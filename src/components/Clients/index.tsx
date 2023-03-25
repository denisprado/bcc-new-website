import logo1 from 'public/structuralImages/clients/logo1.jpg'
import logo2 from 'public/structuralImages/clients/logo2.jpg'
import logo3 from 'public/structuralImages/clients/logo3.jpg'
import logo4 from 'public/structuralImages/clients/logo4.jpg'
import logo5 from 'public/structuralImages/clients/logo5.png'
import logo6 from 'public/structuralImages/clients/logo6.jpg'
import logo7 from 'public/structuralImages/clients/logo7.png'
import logo8 from 'public/structuralImages/clients/logo8.jpg'
import logo9 from 'public/structuralImages/clients/logo9.png'
import logo10 from 'public/structuralImages/clients/logo10.jpg'
import logo11 from 'public/structuralImages/clients/logo11.png'
import { FunctionComponent } from 'react'
import Box from '@components/Box'
import Image from 'next/image'

const Clients: FunctionComponent = () => {
	const logos = [logo1, logo2, logo3, logo4, logo5, logo8, logo7, logo11, logo9, logo10, logo6]
	return (
		<>

			<Box color={'neutral'} className={'flex gap-[19.2px] my-5 flex-wrap box-border '}>
				<div className='relative flex items-center justify-center border bg-accent aspect-square h-60 rounded-xl'>
					<p className={'text-white font-light text-center text-4xl'}>Nossos<br />clientes</p>
				</div>
				{logos.map((logo, i) => <div className='relative border rounded-md aspect-square h-60 border-primary' key={i}>
					<Image
						fill={true}
						style={{ objectFit: "contain" }}
						src={logo}
						className={'p-5 grayscale'}
						alt="Logo dos clientes"
					/>
				</div>
				)}
			</Box>
		</>
	)
}

export default Clients