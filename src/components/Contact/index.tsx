import Box from "@components/Box";
import Button from "@components/Button";
import Image from "next/image";
import contactForm from "public/structuralImages/contact-image.jpg";
import { useState } from "react";
// import mailgun from 'mailgun-js';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Configurar e enviar o e-mail aqui
    // const mg = mailgun({
    // 	apiKey: process?.env?.MAILGUN_API_KEY?.toString() ?? "",
    // 	domain: process?.env?.MAILGUN_DOMAIN?.toString() ?? "",
    // });

    // Configurar os detalhes do e-mail
    // const mailData = {
    // 	from: process.env.MAILGUN_FROM_EMAIL, // Substitua pelo seu próprio MAILGUN_FROM_EMAIL
    // 	to: 'destinatario@exemplo.com', // Substitua pelo endereço de e-mail do destinatário
    // 	subject: `Contato de ${name} - Site da Empresa`,
    // 	text: message,
    // };

    // Enviar o e-mail
    // mg.messages().send(mailData, (error, body) => {
    // 	if (error) {
    // 		console.log(error);
    // 	} else {
    // 		console.log(body);
    // 	}
    // });

    // Limpar o formulário
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Box color="neutral" className="grid grid-cols-2 gap-5 m-5 mx-auto">
      <Box color="neutral" className="relative">
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src={contactForm}
          alt="Contact form image"
        />
      </Box>
      <Box className="flex flex-col gap-4 p-10">
        <a className="font-semibold link text-accent hover:text-accent-focus">
          entre em contato
        </a>

        <form onSubmit={handleSubmit}>
          <Box className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full max-w-xs input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full max-w-xs input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <Button submit={true} type="cta">
              Enviar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
