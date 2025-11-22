const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rudrarudraprasad086@gmail.com",
    pass: "qgvb noiz euey tmmj"
  }
});

app.post("/notify", async (req, res) => {
  const { item } = req.body;

  const mailOptions = {
    from: "CredibleX Coffee",
    to: [
      "muhammad.yaseen@crediblex.io",
      "sambath.pilakkavil@crediblex.io"
    ],
    subject: "Coffee Item Selected",
    text: `User selected: ${item}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
