import SessionName from "@components/SessionName";
import Link from "next/link";

interface CardProps {
  sessionName: string;
  title: string;
  year?: string;
  client?: string;
  description: string;
  buttonHref?: string;
  className?: string;
  image?: string;
}

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="feather feather-external-link"
    id="IconChangeColor"
  >
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      id="mainIconPathAttribute"
    ></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const Card = ({
  description,
  sessionName,
  title,
  buttonHref,
  className,
  year,
  client,
  image,
}: CardProps) => {
  const img = image ? JSON.parse(image) : "";
  const url = img[0]?.url;
  return (
    <div
      className={`card card-compact sm:card-normal bg-primary text-primary-content ${className}`}
    >
      {url && (
        <figure>
          <img src={url} alt="Shoes" />
        </figure>
      )}
      <div className="justify-start flex-none card-body">
        <SessionName>{sessionName}</SessionName>
        <div className="card-title">
          <h2 className="text-white card-title">{title}</h2>
        </div>
        <p className="hidden text-sm sm:block">
          {description.substring(0, 255)}
        </p>
        <div className="flex flex-col ">
          <div className="flex flex-row items-center justify-start w-full">
            {year && <p className={"text-accent font-semibold w-1/4"}>Ano: </p>}
            {year && (
              <p className="w-3/4 text-sm font-bold text-white">{year}</p>
            )}
          </div>
          <div className="flex flex-row items-start w-full text-base">
            {client && (
              <p className={"text-accent font-semibold w-1/4"}>Cliente: </p>
            )}
            {client && (
              <p className="w-3/4 pt-1 text-sm font-bold text-white">
                {client}
              </p>
            )}
          </div>
        </div>

        {!!buttonHref && (
          <div className="justify-start card-actions">
            <Link
              href={buttonHref}
              className="flex flex-row items-center gap-2"
            >
              <button className="link">Mais informações</button>
              <ExternalLinkIcon />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
