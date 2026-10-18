
const fields = [
  "name", "company", "email", "phone", "uen",
  "trading", "facility", "amount", "message"
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    if (!process.env.RESEND_API_KEY ||
        !process.env.CONTACT_EMAIL_FROM ||
        !process.env.CONTACT_EMAIL_TO) {
      return res.status(500).json({
        error: "Email configuration missing"
      });
    }

    const data = req.body || {};
    const required = [
      "name", "company", "email", "phone",
      "trading", "facility", "amount"
    ];

    if (required.some(key =>
      typeof data[key] !== "string" ||
      !data[key].trim()
    )) {
      return res.status(400).json({
        error: "Required fields are missing"
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return res.status(400).json({
        error: "Invalid email address"
      });
    }

    const clean = {};

    for (const key of fields) {
      clean[key] = String(data[key] || "")
        .trim()
        .slice(0, 2000);
    }

    const emailBody = fields
      .map(key => `${key.toUpperCase()}: ${clean[key]}`)
      .join("\n\n");

    const response = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          "Authorization":
            `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: process.env.CONTACT_EMAIL_FROM,
          to: [process.env.CONTACT_EMAIL_TO],
          reply_to: clean.email,
          subject: "New Loan Application",
          text: emailBody
        })
      }
    );

    if (!response.ok) {
      console.error(
        "Resend error:",
        response.status,
        await response.text()
      );

      return res.status(502).json({
        error: "Failed to send email"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application submitted"
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
