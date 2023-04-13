import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "bryon49@ethereal.email",
      pass: "Z9nd374d4R79uJSEdd",
    },
  });

  const mailOptions = {
    from: email,
    to: "densiforigo@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Houve algum erro ao enviar a mensagem." });
  }
}
