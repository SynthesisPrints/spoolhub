import { SVGProps } from 'react';
import { orange, zinc } from 'tailwindcss/colors';
import { cn } from '.';

export type LogoProps = SVGProps<SVGSVGElement> & {
	trim?: boolean;
};

export const Logo = ({ trim, className, ...props }: LogoProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox={`0 0 100 ${trim ? 88 : 100}`}
		className={cn('w-fit h-full', className)}
		{...props}
	>
		<style>{`path{fill:${zinc[900]}}@media (prefers-color-scheme:dark){path{fill:oklch(var(--bc))}}`}</style>
		<path
			fillRule="evenodd"
			d="M82.498 88C93.21 78.83 100 65.208 100 50c0-27.614-22.386-50-50-50S0 22.386 0 50c0 15.208 6.79 28.83 17.502 38H47.55a2.5 2.5 0 1 1 4.9 0h30.048ZM66.5 50c0 9.113-7.387 16.5-16.5 16.5S33.5 59.113 33.5 50 40.887 33.5 50 33.5 66.5 40.887 66.5 50ZM85 25c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10ZM25 35c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm10 40c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm40 10c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM48 25a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm9 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm5 45a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm13-20a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM48 75a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM25 55a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm27.5-43a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm38 38a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12 52.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
			clipRule="evenodd"
		/>
		<path
			d="M60 50c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
			style={{ fill: orange[600] }}
		/>
	</svg>
);
