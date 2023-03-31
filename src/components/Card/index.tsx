import Button from "@components/Button";
import SessionName from "@components/SessionName";

interface CardProps {
  sessionName: string;
  title: string;
  description: string;
}

const Card = ({ description, sessionName, title }: CardProps) => {
  return (
    <div className="card bg-primary text-primary-content">
      <div className="card-body">
        <SessionName>{sessionName}</SessionName>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="justify-end card-actions">
          <Button type="page">Ver mais</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
