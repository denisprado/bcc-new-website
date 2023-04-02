import Box from "@components/Box";
import robson from "public/structuralImages/robson.jpg";
import edgar from "public/structuralImages/edgar.jpg";
import nossosValores from "public/structuralImages/nossos-valores.png";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "@components/Layout";
import VideoHero from "@components/VideoHero";

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
      <Box color={"neutral"} className="my-4">
        <a id="serv" />
        <Box
          color="neutral"
          className="grid  grid-cols-1 grid-rows-2 gap-4 my-4 mx-auto"
        >
          <Box color="illustrated" className="flex justify-center">
            <Box
              color="illustrated"
              className="container grid grid-cols-2 min-h-[609px]"
            >
              <Box color="neutral" className="relative">
                <Image
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className={"grayscale"}
                  src={robson}
                  alt="Foto de Robson Cruz"
                />
              </Box>
              <Box className="flex flex-col gap-4 p-14">
                <h2 className="font-light text-7xl">Robson Cruz</h2>
                <h3 className="text-accent text-2xl">
                  Experiência em Pesquisa e Desenvolvimento
                  de&nbsp;Sistemas&nbsp;de&nbsp;Powertrain
                </h3>
                <div className="flex flex-col gap-4 w-11/12">
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
                </div>
              </Box>
            </Box>
          </Box>
          <Box color="illustrated" className="flex justify-center">
            <Box
              color="illustrated"
              className="container grid grid-cols-2 min-h-[609px]"
            >
              <Box className="flex flex-col gap-4 p-14">
                <h2 className="font-light text-7xl">Edgar Barassa</h2>
                <h3 className="text-accent text-2xl">
                  Experiência em Prospecção Tecnológica e
                  Governança&nbsp;para&nbsp;Ciência, Tecnologia e Inovação
                </h3>
                <div className="flex flex-col gap-4 w-11/12">
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
                </div>
              </Box>
              <Box color="neutral" className="relative">
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

      {/* Nossos valores */}

      <Box
        color={"neutral"}
        className="container relative w-full m-4 min-h-[676px] max-w-[1394px] mx-auto grayscale opacity-50"
      >
        <Image fill={true} src={nossosValores} alt="Nossos valores" />
      </Box>
    </Box>
  );
}

About.noLayout = true;

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
