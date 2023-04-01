import Box from "@components/Box";
import eletricCar from "public/structuralImages/eletricCar.jpg";
import robson from "public/structuralImages/robson.jpg";
import edgar from "public/structuralImages/edgar.jpg";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "@components/Layout";
import Button from "@components/Button";
import Clients from "@components/Clients";
import Card from "@components/Card";
import SessionName from "@components/SessionName";
import useProjectsCategories from "src/hooks/useProjectsCategories";
import useProjects from "src/hooks/useProjects";
import useServiceCategories from "src/hooks/useServicesCategories";
import Link from "next/link";

export default function Home() {
  const { data: allCategories } = useProjectsCategories();
  const { data: projects } = useProjects();
  const { data: allServiceCategories } = useServiceCategories();

  return (
    <Box color="neutral" className="w-full">
      {/* // Hero */}

      <header className="relative flex m-4 min-h-[486px] justify-center h-screen overflow-hidden">
        <Box className="container bg-transparent pt-56 mr-0 bg-bottom relative z-30 ">
          <div className="flex-col w-3/6 p-5 lg:flex-row-reverse">
            <Box className="bg-primary opacity-90 px-6 pt-6 pb-8 rounded-md">
              <h1 className="text-6xl font-light fotn mb-8 drop-shadow-2xl">
                Criando valor junto às tecnologias&nbsp;emergentes&nbsp;verdes
                e&nbsp;de&nbsp;baixo&nbsp;carbono
              </h1>
              <Button type={"cta"}>
                <Link href={"#serv"}>Saiba mais</Link>
              </Button>
            </Box>
          </div>
        </Box>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://emuuocvkyaoflsbclvbr.supabase.co/storage/v1/object/public/videos/pagina-inicial.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>

      {/**  O que fazemos */}
      <Box className="mx-4">
        <a id="serv" />
        <Box
          color="neutral"
          className="container grid grid-cols-2 gap-4 m-4 mx-auto  min-h-[500px]"
        >
          <Box color="neutral" className="relative">
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
            <Box className="flex gap-2 my-4">
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
      <Box className="mx-4">
        <Box
          color="neutral"
          className="container grid grid-cols-2 gap-4 m-4 mx-auto  min-h-[500px]"
        >
          <Box className="flex flex-col gap-4 p-14">
            <SessionName>quem somos</SessionName>
            <h2 className="text-3xl">
              Quer saber quem está por trás dos nossos serviços incríveis?
              Conheça a nossa equipe de especialistas!
            </h2>

            <Box className="flex gap-2 my-4">
              <Button type={"page"}>Nossa equipe</Button>
              <Button type={"page"}>Nossos valores</Button>
              <Button type={"page"}>Nossa história</Button>
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

      <Box
        color="neutral"
        className="container grid grid-cols-4 gap-4 m-4 mx-auto"
      >
        {featuredPosts(allCategories, projects)}
      </Box>
    </Box>
  );
}

Home.noLayout = true;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

function featuredPosts(
  allCategories: { [x: string]: string }[] | null | undefined,
  projects: { [x: string]: string }[] | null | undefined
) {
  return allCategories ? (
    allCategories.map((cat) =>
      projects?.map((project) =>
        project?.featured && project.id_post_category === cat.id ? (
          <Card
            key={project.id}
            sessionName={cat.description}
            title={project.title}
            description={project.description}
          />
        ) : (
          <></>
        )
      )
    )
  ) : (
    <p>Nenhum resultado encontrado</p>
  );
}
