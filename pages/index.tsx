import Box from "@components/Box"
import bgImage from 'public/structuralImages/hero-bg.png'
import eletricCar from 'public/structuralImages/eletricCar.jpg'
import robson from 'public/structuralImages/robson.jpg'
import edgar from 'public/structuralImages/edgar.jpg'
import Image from 'next/image'
import { ReactElement } from "react"
import Layout from "@components/Layout"
import Button from "@components/Button"
import Clients from "@components/Clients"
import Card from "@components/Card"
import SessionName from "@components/SessionName"

export default function Home() {
	return (
		<Box color="neutral" className="w-full">

			{/* // Hero */}

			<Box color="primary" className="flex flex-row m-4 min-h-[600px]" >
				<div className="bg-bottom hero">
					<div className="flex-col pb-0 hero-content lg:flex-row-reverse">
						<Image
							width={645}
							height={610}
							src={bgImage}
							alt="Geradores de energia eólica"
						/>
						<div>
							<h1 className="py-6 text-5xl">Criando valor junto às tecnologias emergentes verdes e de baixo carbono</h1>
							<Button type={"cta"}>Saiba mais</Button>
						</div>
					</div>
				</div>
			</Box>

			{/**  O que fazemos */}
			<Box className="mx-4">


				<Box color="neutral" className="container grid grid-cols-2 gap-4 m-4 mx-auto  min-h-[500px]">
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
						<h2 className="text-3xl">Planejamento e estratégia para empresas e organizações que buscam a descarbonização com viabilidade técnica e econômica</h2>
						<p>Construímos as melhores abordagens em tecnologias verdes, incluindo soluções para mobilidade sustentável e energias renováveis, e oferecemos consultoria estratégica para auxiliar na integração dessas tecnologias em seus negócios. Nossos especialistas trabalham para ajudar os clientes a alcançar seus objetivos ambientais, econômicos e sociais.</p>
						<Box className="flex gap-2 my-4">
							<Button type={"page"}>Para Empresas</Button>
							<Button type={"page"}>3º Setor</Button>
							<Button type={"page"}>Poder Público</Button>
						</Box>
					</Box>
				</Box>
			</Box>
			{/** quem somos */}
			<Box className="mx-4">
				<Box color="neutral" className="container grid grid-cols-2 gap-4 m-4 mx-auto  min-h-[500px]">
					<Box className="flex flex-col gap-4 p-14">
						<SessionName>quem somos</SessionName>
						<h2 className="text-3xl">Quer saber quem está por trás dos nossos serviços incríveis? Conheça a nossa equipe de especialistas!</h2>

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
								className={'grayscale'}
								src={robson}
								alt="Eletric Car"
							/></Box>
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

			<Box color="neutral" className="container grid grid-cols-1 m-4 mx-auto my-10">
				<Clients />
			</Box>

			{/* Projetos & cia */}

			<Box color="neutral" className="container grid grid-cols-4 gap-4 m-4 mx-auto">
				<Card />
				<Card />
				<Card />
				<Card />
			</Box>

		</Box>

	);
}

Home.noLayout = true;

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}
