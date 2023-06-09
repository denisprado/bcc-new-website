import Box from "@components/Box";
import Button from "@components/Button";
import History from "@components/History";
import Layout from "@components/Layout";
import Values from "@components/Values";
import VideoHero from "@components/VideoHero";
import Link from "next/link";
import Image from "next/image";
import edgar from "public/structuralImages/edgar.jpg";
import robson from "public/structuralImages/robson.jpg";
import { ReactElement } from "react";

export default function About() {
  return (
    <Box color="neutral" className="w-full">
      {/* // Hero */}
      <VideoHero
        text={
          "Um time fantástico é o ponto de partida para grandes realizações"
        }
        hasButton={true}
        buttonLabel={"Quem somos"}
        buttonHref={"#serv"}
        videoUrl={
          "https://emuuocvkyaoflsbclvbr.supabase.co/storage/v1/object/public/videos/quem-somos-comp.mp4"
        }
      />
      {/** quem somos */}
      <Box className="my-4">
        <a id="serv" />
        <Box
          color="neutral"
          className="grid grid-cols-1 grid-rows-2 gap-4 mx-auto my-4"
        >
          <Box color="illustrated" className="flex justify-center mx-4">
            <Box
              color="illustrated"
              className="container grid md:grid-cols-2 md:min-h-[684px]"
            >
              <Box
                color="neutral"
                className="relative aspect-square md:aspect-auto"
              >
                <Image
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className={"grayscale"}
                  src={robson}
                  alt="Foto de Robson Cruz"
                />
              </Box>
              <Box className="flex flex-col gap-5 p-14">
                <h2 className="font-thin text-8xl">Robson Cruz</h2>
                <h3 className="text-3xl text-accent">
                  Experiência em Pesquisa e Desenvolvimento de Sistemas de
                  Powertrain
                </h3>
                <div className="flex flex-col w-11/12 gap-3">
                  <p>
                    Coordenou times globais (EUA, Alemanha, China) de
                    desenvolvimento de projetos de powertrain mais leves, com
                    menor atrito e menos poluentes
                  </p>
                  <p>
                    Engenheiro Mecânico pela UNESP (2006); Pós-graduado em
                    Engenharia Automotiva pela USP (2020); Mestrando pela
                    UNICAMP na área de Eletrificação de Veículos Pesados
                  </p>
                  <p>
                    Participação e liderança de projetos internacionais com
                    organizações como AUDI (Ingolstadt); BMW (Munique);
                    Volkswagen (Chemnitz); Porsche (Weisbach); Daimler
                    (Stuttgart); CUMMINS (Columbus) e Catterpillar (Peoria).
                  </p>
                  <p>
                    Participou do desenvolvimento de rotorshafts para a
                    plataforma VW MEB e Tesla Model 3
                  </p>
                  <Link
                    href={`https://www.linkedin.com/in/robson-cruz-/`}
                    target="_blank"
                  >
                    <Button type={"page"}>Página no Linkedin</Button>
                  </Link>
                </div>
              </Box>
            </Box>
          </Box>
          <Box color="illustrated" className="flex justify-center mx-4">
            <Box
              color="illustrated"
              className="container grid  md:grid-cols-2 md:min-h-[684px]"
            >
              <Box className="flex flex-col order-2 gap-4 p-14 md:order:1">
                <h2 className="font-thin text-8xl">Edgar Barassa</h2>
                <h3 className="text-3xl text-accent">
                  Experiência em Prospecção Tecnológica e Governança para
                  Ciência, Tecnologia e Inovação
                </h3>
                <div className="flex flex-col w-11/12 gap-3">
                  <p>
                    Coordenou projetos para inovação tecnológica e roadmaps e
                    identificou novos modelos de negócios.
                  </p>
                  <p>
                    Doutor pela UNICAMP na área de Eletromobilidade e Mobilidade
                    de baixo carbono (2019), Mestre na área de Política
                    Cientifica e Tecnológica pela UNICAMP (2015) e Graduado em
                    Negócios Internacionais, UNICAMP (2012).
                  </p>
                  <p>
                    Pesquisador visitante na Universidade de Bordeaux no centro
                    de pesquisa em inteligência tecnológica e competitiva VIA
                    INNO (2017).
                  </p>
                  <p>
                    Elaborou o Roadmap Nacional para Veículos Elétricos (2018) e
                    apoiou a construção do Plano Nacional de Eletromobilidade
                    (2018).
                  </p>
                  <Link
                    href={`https://www.linkedin.com/in/edgar-barassa-phd-50165562/`}
                    target="_blank"
                  >
                    <Button type={"page"}>Página no Linkedin</Button>
                  </Link>
                </div>
              </Box>
              <Box
                color="neutral"
                className="relative order-2 aspect-square md:aspect-auto md:order:1"
              >
                <Image
                  fill={true}
                  style={{ objectFit: "cover" }}
                  src={edgar}
                  alt="Eletric Car"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box color="illustrated" className="w-full xl:min-h-[144px]">
        <a id="valores" />
      </Box>
      <Box color="illustrated" className="w-full min-h-screen">
        {/* Nossos valores */}
        <Box className="container relative w-full p-5 mx-auto bg-white">
          <Values />
        </Box>
        <Box color="illustrated" className="w-full md:min-h-[144px]">
          <a id="historia" />
        </Box>
        {/* History */}

        <Box className="container relative w-full p-5 mx-auto bg-white">
          <History />
        </Box>
        <Box color="illustrated" className="w-full min-h-[144px]"></Box>
      </Box>
    </Box>
  );
}

About.noLayout = true;

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout hasContactForm={false}>{page}</Layout>;
};
