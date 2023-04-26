import { FunctionComponent, useState } from "react";
import Box from "@components/Box";
import Image from "next/image";
import logo from "public/structuralImages/primary-negative-large.png";
import LogoValues from "./LogoValues";

const Circle = () => (
  <span className="relative flex w-10 h-10">
    <span className="relative inline-flex w-10 h-10 bg-transparent border rounded-full border-info"></span>
  </span>
);

const CircleActive = () => (
  <span className="relative flex w-10 h-10">
    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-accent"></span>
    <span className="relative inline-flex w-10 h-10 rounded-full bg-accent"></span>
  </span>
);
export type paths = "0" | "1" | "2" | "3" | "4" | "5" | "6";

const Values: FunctionComponent = () => {
  type ValueProps = {
    text: string;
    id: paths;
  };

  const [active, setActive] = useState<paths>("0");

  const Value = ({ text, id }: ValueProps) => {
    const isActive = id === active;
    return (
      <div
        onMouseEnter={() => setActive(id)}
        onMouseLeave={() => setActive("0")}
        className="bg-primary p-5 gap-4 flex flex-row items-center justify-centers min-h-[216px] cursor-pointer"
      >
        <Box className="flex-1 hidden lg:flex">
          {isActive ? <CircleActive /> : <Circle />}
        </Box>
        <p
          className={`text-xl sm:text-2xl md:text-3xl font-semibold ${
            isActive ? "text-white" : "text-info"
          }`}
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <Box
      color={"neutral"}
      className={"grid grid-cols-3 gap-2 sm:gap- md:gap-4 box-border"}
    >
      <div
        className={`relative flex items-center justify-center border bg-accent rounded-xl bg-[url("/structuralImages/ilustra-fundo-white.svg")] bg-cover`}
      >
        <a id="values" />
        <p className={"text-white font-light text-center text-4xl"}>
          Nossos valores
        </p>
      </div>

      <Value
        text="Transformação contínua e co-evolução organizacional"
        id={"1"}
      />
      <div
        className="relative bg-primary"
        onMouseEnter={() => setActive("6")}
        onMouseLeave={() => setActive("0")}
      >
        <Image
          fill={true}
          style={{ objectFit: "contain" }}
          src={logo}
          className={"p-8"}
          alt="Logo"
        />
      </div>

      <Value
        text="Respeito, transparência e crescimento colaborativo"
        id={"2"}
      />

      <Box className="relative flex items-center justify-center row-span-1 p-4 sm:p-5 md:p-6 lg:p-8 md:row-span-2">
        {active && <LogoValues active={active} />}
      </Box>
      <Value text={"Foco na excelência e qualidade"} id={"3"} />

      <Value text="Paixão pelo trabalho e integridade" id={"4"} />
      <Box color="illustrated" className="md:hidden" />
      <Value text="Cultivo de relações de longo prazo" id={"5"} />
    </Box>
  );
};

export default Values;
