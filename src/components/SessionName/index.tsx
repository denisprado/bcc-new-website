import { FunctionComponent, ReactNode } from "react";
interface BoxProps {

	children: ReactNode
	className?: string
}

const SessionName: FunctionComponent<BoxProps> = ({ children, className = "" }) => {

	return (
		<a className={`my-4 font-semibold link text-accent hover:text-accent-focus first-letter:uppercase brightness-125 ${className}`}>
			{children}
		</a>
	);
}

export default SessionName;