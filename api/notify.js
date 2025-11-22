import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { item } = req.body;

  // Example transporter (use env variables for credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ['muhammad.yaseen@crediblex.io','sambath.pilakkavil@crediblex.io'],
      subject: 'Coffee Selected',
      text: `User selected: ${item}`
    });
    res.status(200).json({ message: 'Email sent' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
