import Button from "@components/Button";
import SessionName from "@components/SessionName";
import Link from "next/link";

interface CardProps {
  sessionName: string;
  title: string;
  description: string;
  buttonHref?: string;
  className?: string;
}

const Card = ({
  description,
  sessionName,
  title,
  buttonHref,
  className,
}: CardProps) => {
  return (
    <div className={`card bg-primary text-primary-content ${className}`}>
      <div className="card-body">
        <SessionName>{sessionName}</SessionName>
        <h2 className="card-title">{title}</h2>
        <p className="hidden sm:flex">{description.substring(0, 255)}</p>
        {!!buttonHref && (
          <div className="justify-end card-actions">
            <Link href={buttonHref}>
              <Button type="page">Ver mais</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
