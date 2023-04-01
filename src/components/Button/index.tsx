import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "page" | "cta";
  submit?: boolean;
}
const Button: FunctionComponent<ButtonProps> = ({ children, type, submit }) => {
  const typeButton = {
    page: "btn btn-primary border border-neutral hover:border hover:border-accent hover:text-accent",
    cta: "btn btn-accent btn-xl text-white rounded-full px-8",
  };
  return (
    <button className={typeButton[type]} type={submit ? "submit" : "button"}>
      {children}
    </button>
  );
};

export default Button;
