import { FunctionComponent, useState } from "react";
import Box from "@components/Box";
import Image from "next/image";
import logo from "public/structuralImages/primary-negative-large.png";
import LogoValues from "./LogoValues";

const Circle = () => (
  <span className="relative flex h-12 w-12">
    <span className="relative inline-flex rounded-full h-12 w-12 bg-transparent border-info border"></span>
  </span>
);

const CircleActive = () => (
  <span className="relative flex h-12 w-12">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
    <span className="relative inline-flex rounded-full h-12 w-12 bg-accent"></span>
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
        <Box className="flex-1">{isActive ? <CircleActive /> : <Circle />}</Box>
        <p
          className={`text-3xl font-bold ${
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
    <Box color={"neutral"} className={"grid grid-cols-3 gap-5 my-5 box-border"}>
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
        className="bg-primary relative"
        onMouseEnter={() => setActive("6")}
        onMouseLeave={() => setActive("0")}
      >
        <Image
          fill={true}
          style={{ objectFit: "contain" }}
          src={logo}
          className={"p-8"}
          alt="Logo dos clientes"
        />
      </div>

      <Value
        text="Respeito, transparência e crescimento colaborativo"
        id={"2"}
      />

      <Box className="row-span-2 relative flex justify-center items-center">
        {active && <LogoValues active={active} />}
      </Box>
      <Value text={"Foco na excelência e qualidade"} id={"3"} />

      <Value text="Paixão pelo trabalho e integridade" id={"4"} />
      <Value text="Cultivo de relações de longo prazo" id={"5"} />
    </Box>
  );
};

export default Values;
