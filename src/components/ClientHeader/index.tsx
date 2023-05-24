import { FunctionComponent } from "react";
import Image from "next/image";
import logo from "public/structuralImages/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkedinLogo from "public/structuralImages/linkedin.svg";
import InstagramLogo from "public/structuralImages/instagram.svg";
const Items = () => {
  const router = useRouter();
  const { pathname } = router;

  const itemsData = [
    {
      label: "Quem somos",
      slug: "/about",
      active: pathname.indexOf("/about") > -1 ? "active" : "",
    },
    {
      label: "O que fazemos",
      slug: "/services",
      active: pathname.indexOf("/services") > -1 ? "active" : "",
    },
    {
      label: "Projetos & cia",
      slug: "/projects",
      active: pathname.indexOf("/projects") > -1 ? "active" : "",
    },
    {
      label: <Image src={LinkedinLogo} width={16} height={16} alt={""} />,
      slug: "https://www.linkedin.com/company/barassa-cruz-consulting/",
      active: false,
    },
    {
      label: <Image src={InstagramLogo} width={16} height={16} alt={""} />,
      slug: "https://www.instagram.com/barassaecruzconsulting/",
      active: false,
    },
  ];

  return (
    <>
      {itemsData.map((item) => (
        <li key={item.slug}>
          <Link className={`hover:text-accent ${item.active}`} href={item.slug}>
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
};

const ClientHeader: FunctionComponent = () => {
  const getWidthLogo = (h: number) => h * 3.55;
  const h = 56;
  return (
    <div className="top-0 z-50 h-20 p-5 border-b-2 border-info sm:sticky navbar bg-primary">
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
