import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
    name: { type: String, default: 'Anonymous' },
    portrait: { type: String, },
    socials: { type: String, },
    resume: { type: String,  },
    email: { type: String,  }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;