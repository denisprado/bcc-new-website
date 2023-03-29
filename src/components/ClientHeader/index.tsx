import { FunctionComponent } from "react";
import Image from "next/image";
import logo from "../../../public/structuralImages/logo.png";
import Link from "next/link";

const ClientHeader: FunctionComponent = () => {
  return (
    <>
      <div className="p-5 h-28 navbar bg-secondary">
        <div className="flex-1">
          <Link href={"/"}>
            <Image width={199} height={56} src={logo} alt="BCC logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="px-5 menu menu-horizontal text-base-100">
            <li>
              <a className="hover:text-accent">
                <Link href={""}>Quem somos</Link>
              </a>
            </li>
            <li>
              <a className="hover:text-accent">
                <Link href={"services"}>O que fazemos</Link>
              </a>
            </li>
            <li>
              <a className="hover:text-accent">Projetos & cia</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
