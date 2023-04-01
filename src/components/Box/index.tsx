import { FunctionComponent, ReactNode } from "react";
interface BoxProps {
  color?: "primary" | "secondary" | "accent" | "neutral" | "illustrated";
  children: ReactNode;
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
      'bg-primary text-white bg-[url("/structuralImages/ilustra-fundo.svg")] bg-contain',
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
    neutral: "bg-neutral text-primary",
  };

  return <div className={`${bgColor[color]} ${className}`}>{children}</div>;
};

export default Box;
