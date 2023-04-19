import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: "edgarbarassa@bcconsulting.com.br",
      pass: "",
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
