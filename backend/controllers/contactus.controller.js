const contactusModel = require('../models/message.model');

const createContactUs = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = new contactusModel({
            name,
            email,
            subject,
            message
        });
        const savedContact = await contact.save();
        res.status(201).json({ success: true, data: savedContact });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// ✅ Properly export the controller function
module.exports = {
    createContactUs
};
