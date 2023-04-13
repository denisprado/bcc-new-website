import Box from "@components/Box";
import Button from "@components/Button";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import contactForm from "public/structuralImages/contact-image.jpg";
import { useState } from "react";
// import mailgun from 'mailgun-js';
interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: AxiosResponse<{ message: string }> = await axios.post(
        "api/send-email",
        values
      );

      setStatus(response.data.message);
      setValues({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending email");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
              name="name"
              className="w-full text-gray-500 max-w-xs input input-bordered"
              value={values.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="w-full max-w-xs input input-bordered text-gray-500"
              value={values.email}
              onChange={handleChange}
            />
            <textarea
              className="textarea textarea-bordered text-gray-500"
              placeholder="Mensagem"
              name="message"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            <Button submit={true} type="cta">
              Enviar
            </Button>
            <p>{status}</p>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
