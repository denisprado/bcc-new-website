import { FunctionComponent, ReactNode } from "react";
interface BoxProps {
	color?: "primary" | "secondary" | "accent" | "neutral"
	children: ReactNode
	className?: string
}

const Box: FunctionComponent<BoxProps> = ({ color = "primary", children, className = "" }) => {
	const bgColor = {
		primary: 'bg-primary text-white',
		secondary: 'bg-secondary text-white',
		accent: "bg-accent text-white",
		neutral: 'bg-neutral text-primary'
	}

	return (
		<div className={`${bgColor[color]} ${className}`}>
			{children}
		</div>
	);
}

export default Box;