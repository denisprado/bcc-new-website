import Box from "@components/Box";
import Button from "@components/Button";
import Clients from "@components/Clients";
import FeaturedPosts from "@components/FeaturedPosts";
import Layout from "@components/Layout";
import SessionName from "@components/SessionName";
import VideoHero from "@components/VideoHero";
import Image from "next/image";
import Link from "next/link";
import edgar from "public/structuralImages/edgar.jpg";
import eletricCar from "public/structuralImages/eletricCar.jpg";
import robson from "public/structuralImages/robson.jpg";
import { ReactElement } from "react";
import useServiceCategories from "src/hooks/useServicesCategories";

export default function Home() {
  const { data: allServiceCategories } = useServiceCategories();

  return (
    <Box color="neutral" className="w-full ">
      {/* // Hero */}
      <VideoHero
        text={
          "Criando valor junto às tecnologias\xa0emergentes\xa0verdes e\xa0de\xa0baixo\xa0carbono"
        }
        hasButton={true}
        buttonLabel={"Saiba mais"}
        buttonHref={"#serv"}
        videoUrl={
          "https://emuuocvkyaoflsbclvbr.supabase.co/storage/v1/object/public/videos/pagina-inicial-comp.mp4"
        }
      />

      {/**  O que fazemos */}
      <Box className="mx-4" color="illustrated">
        <a id="serv" />
        <Box
          color="neutral"
          className="container grid md:grid-cols-2 gap-4 m-4 mx-auto  min-h-[500px]"
        >
          <Box color="neutral" className="relative hidden md:flex">
            <Image
              fill={true}
              style={{ objectFit: "cover" }}
              src={eletricCar}
              alt="Eletric Car"
            />
          </Box>
          <Box className="flex flex-col gap-4 p-14">
            <SessionName>o que fazemos</SessionName>
            <h2 className="text-3xl">
              Planejamento e estratégia para empresas e organizações que buscam
              a descarbonização com viabilidade técnica e econômica
            </h2>
            <p>
              Construímos as melhores abordagens em tecnologias verdes,
              incluindo soluções para mobilidade sustentável e energias
              renováveis, e oferecemos consultoria estratégica para auxiliar na
              integração dessas tecnologias em seus negócios. Nossos
              especialistas trabalham para ajudar os clientes a alcançar seus
              objetivos ambientais, econômicos e sociais.
            </p>
            <Box className="flex flex-row gap-2 my-4 ">
              {allServiceCategories ? (
                allServiceCategories?.map((cat) => (
                  <Link key={cat.id} href={`services/${cat.id}`}>
                    <Button type={"page"}>{cat.title}</Button>
                  </Link>
                ))
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {/** quem somos */}
      <Box className="mx-4" color="illustrated">
        <Box
          color="neutral"
          className="container grid md:grid-cols-2 gap-4 m-4 mx-auto sm:min-h-[500px]"
        >
          <Box className="flex flex-col gap-4 p-5 sm:p-14">
            <SessionName>quem somos</SessionName>
            <h2 className="text-3xl">
              Quer saber quem está por trás dos nossos serviços incríveis?
              Conheça a nossa equipe de especialistas!
            </h2>

            <Box className="flex flex-row gap-2 my-4">
              <Link href={`about`}>
                <Button type={"page"}>Nossa equipe</Button>
              </Link>
              <Link href={`about#valores`}>
                <Button type={"page"}>Nossos valores</Button>
              </Link>
              <Link href={`about#historia`}>
                <Button type={"page"}>Nossa história</Button>
              </Link>
            </Box>
          </Box>

          <div className="grid grid-cols-2 gap-4 min-h-[335px]">
            <Box color="neutral" className="relative">
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                className={"grayscale"}
                src={robson}
                alt="Eletric Car"
              />
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

      {/* Nossos clientes */}

      <Box
        color="neutral"
        className="container grid grid-cols-1 m-4 mx-auto my-10"
      >
        <Clients />
      </Box>

      {/* Projetos & cia */}

      <Box color="neutral" className="w-full mx-auto">
        <FeaturedPosts />
      </Box>
    </Box>
  );
}

Home.noLayout = true;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
