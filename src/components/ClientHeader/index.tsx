import { FunctionComponent } from "react";
import Image from "next/image";
import logo from "public/structuralImages/logo.png";
import Link from "next/link";

const ClientHeader: FunctionComponent = () => {
  const getWidthLogo = (h: number) => h * 3.55;
  return (
    <>
      <div className="p-5 h-20 navbar bg-secondary">
        <div className="flex-1">
          <Link href={"/"}>
            <Image
              width={getWidthLogo(52)}
              height={52}
              src={logo}
              alt="BCC logo"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="px-5 menu menu-horizontal text-base-100">
            <li>
              <Link className="hover:text-accent" href={"/about"}>
                Quem somos
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" href={"/services"}>
                O que fazemos
              </Link>
            </li>
            <li>
              <Link href={"/projects"} className="hover:text-accent">
                Projetos & cia
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
