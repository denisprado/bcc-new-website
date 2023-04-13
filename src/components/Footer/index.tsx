import Image from "next/image";
import Link from "next/link";
import logo from "public/structuralImages/logo.png";
import useProjectsCategories from "src/hooks/useProjectsCategories";
import useServiceCategories from "src/hooks/useServicesCategories";
const Footer = () => {
  const { data: allServiceCategories } = useServiceCategories();
  const { data: postCategories } = useProjectsCategories();
  return (
    <footer className="w-full p-10 footer bg-secondary text-neutral">
      <div>
        <Image width={199} height={56} src={logo} alt="BCC logo" />
        <p>Barassa & Cruz consulting</p>
      </div>
      <div>
        <span className="footer-title">Quem somos</span>
        <Link className="link link-hover" href={"about#serv"}>
          Nossa equipe
        </Link>
        <Link href={"about#historia"} className="link link-hover">
          Nossa história
        </Link>
        <Link href={"about#valores"} className="link link-hover">
          Nossos valores
        </Link>
      </div>
      <div>
        <span className="footer-title">O que fazemos</span>
        {allServiceCategories ? (
          allServiceCategories?.map((cat) => (
            <Link
              className="link link-hover"
              key={cat.id}
              href={`services/${cat.id}`}
            >
              {cat.title}
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
      <div>
        <span className="footer-title">Projetos & cia</span>

        {postCategories?.map((cat) => {
          return (
            <Link
              scroll={false}
              href={`projects/${cat.id}`}
              className={`link link-hover`}
              key={cat.id}
            >
              {cat.description}
            </Link>
          );
        })}
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
