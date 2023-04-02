import Button from "@components/Button";
import SessionName from "@components/SessionName";
import Link from "next/link";

interface CardProps {
  sessionName: string;
  title: string;
  description: string;
  buttonHref?: string;
}

const Card = ({ description, sessionName, title, buttonHref }: CardProps) => {
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <SessionName>{sessionName}</SessionName>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
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
