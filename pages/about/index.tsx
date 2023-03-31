import Box from "@components/Box";
import robson from "public/structuralImages/robson.jpg";
import edgar from "public/structuralImages/edgar.jpg";
import nossosValores from "public/structuralImages/nossos-valores.png";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "@components/Layout";
import SessionName from "@components/SessionName";

export default function About() {
  return (
    <Box color="neutral" className="w-full">
      {/* // Hero */}

      {/** quem somos */}
      <Box color={"neutral"} className="mx-4">
        <Box
          color="neutral"
          className="container grid min-h-screen grid-cols-1 grid-rows-2 gap-4 m-4 mx-auto"
        >
          <div className="grid grid-cols-2 min-h-[609px]">
            <Box color="neutral" className="relative">
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                className={"grayscale"}
                src={robson}
                alt="Eletric Car"
              />
            </Box>
            <Box className="flex flex-col gap-4 p-14">
              <h2 className="font-light text-7xl">Robson Cruz</h2>
              <SessionName>
                Experiência em Pesquisa e Desenvolvimento de Sistemas de
                Powertrain
              </SessionName>
              <p>
                Coordenou times globais (EUA, Alemanha, China) de
                desenvolvimento de projetos de powertrain mais leves, com menor
                atrito e menos poluentes
              </p>
              <p>
                Engenheiro Mecânico pela UNESP (2006); Pós-graduado em
                Engenharia Automotiva pela USP (2020); Mestrando pela UNICAMP na
                área de Eletrificação de Veículos Pesados
              </p>
              <p>
                Participação e liderança de projetos internacionais com
                organizações como AUDI (Ingolstadt); BMW (Munique); Volkswagen
                (Chemnitz); Porsche (Weisbach); Daimler (Stuttgart); CUMMINS
                (Columbus) e Catterpillar (Peoria).
              </p>
              <p>
                Participou do desenvolvimento de rotorshafts para a plataforma
                VW MEB e Tesla Model 3
              </p>
            </Box>
          </div>

          <div className="grid grid-cols-2 min-h-[609px]">
            <Box className="flex flex-col gap-4 p-14">
              <h2 className="font-light text-7xl">Edgar Barassa</h2>
              <SessionName>
                Experiência em Prospecção Tecnológica e Governança para Ciência,
                Tecnologia e Inovação
              </SessionName>
              <p>
                Coordenou projetos para inovação tecnológica e roadmaps e
                identificou novos modelos de negócios.
              </p>
              <p>
                Doutor pela UNICAMP na área de Eletromobilidade e Mobilidade de
                baixo carbono (2019), Mestre na área de Política Cientifica e
                Tecnológica pela UNICAMP (2015) e Graduado em Negócios
                Internacionais, UNICAMP (2012).
              </p>
              <p>
                Pesquisador visitante na Universidade de Bordeaux no centro de
                pesquisa em inteligência tecnológica e competitiva VIA INNO
                (2017).
              </p>
              <p>
                Elaborou o Roadmap Nacional para Veículos Elétricos (2018) e
                apoiou a construção do Plano Nacional de Eletromobilidade
                (2018).
              </p>
            </Box>
            <Box color="neutral" className="relative">
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                src={edgar}
                alt="Eletric Car"
              />
            </Box>
          </div>
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
