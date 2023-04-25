import { FunctionComponent } from "react";
import Image from "next/image";
import logo from "public/structuralImages/logo.png";
import Link from "next/link";

const Items = () => {
  return (
    <>
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
    </>
  );
};

const ClientHeader: FunctionComponent = () => {
  const getWidthLogo = (h: number) => h * 3.55;
  const h = 56;
  return (
    <div className="z-50 h-20 p-5 navbar bg-primary">
      <div className="flex-1 navbar-start">
        <Link href={"/"}>
          <Image width={getWidthLogo(h)} height={h} src={logo} alt="BCC logo" />
        </Link>
      </div>
      <div className="flex-none navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <Items />
          </ul>
        </div>
        <ul className="hidden px-5 lg:flex menu menu-horizontal text-base-100">
          <Items />
        </ul>
      </div>
    </div>
  );
};

export default ClientHeader;
