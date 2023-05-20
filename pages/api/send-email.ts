import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: "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",
    },
  });

  const mailOptions = {
    from: email,
    to: "denisforigo@gmail.com",
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
