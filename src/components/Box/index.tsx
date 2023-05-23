import { FunctionComponent, ReactNode } from "react";
interface BoxProps {
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "illustrated"
    | "grey";
  children?: ReactNode;
  className?: string;
}

const Box: FunctionComponent<BoxProps> = ({
  color = "primary",
  children,
  className = "",
}) => {
  const bgColor = {
    primary: "bg-primary text-white",
    illustrated:
      'bg-primary text-white bg-[url("/structuralImages/ilustra-fundo.svg")] bg-cover',
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
    grey: "bg-primary/5 text-white",
    neutral: "text-primary",
  };

  return <div className={`${bgColor[color]} ${className}`}>{children}</div>;
};

export default Box;
