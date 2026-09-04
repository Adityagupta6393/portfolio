const { addContactMessage } = require("../services/googleSheetsService");

const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await addContactMessage({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Contact Form Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

module.exports = {
  submitContactForm,
};