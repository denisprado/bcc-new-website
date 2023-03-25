import { FunctionComponent } from "react";
import Image from 'next/image'
import logo from '../../../public/structuralImages/logo.png'

const Header: FunctionComponent = () => {
	return (
		<>
			<div className="p-5 h-28 navbar bg-secondary">
				<div className="flex-1">

					<Image
						width={199}
						height={56}
						src={logo}
						alt="BCC logo"
					/>

				</div>
				<div className="flex-none">
					<ul className="px-5 menu menu-horizontal text-base-100">
						<li><a className="hover:text-accent">Quem somos</a></li>
						<li><a className="hover:text-accent">O que fazemos</a></li>
						<li><a className="hover:text-accent">Projetos & cia</a></li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Header;