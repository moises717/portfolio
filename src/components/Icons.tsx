import type { SVGAttributes } from 'react';

type Props = SVGAttributes<HTMLOrSVGElement>;

export function Home({ width = 21, height = 21, ...props }: Props) {
	return (
		<svg width={width} height={height} viewBox='0 0 21 21' xmlns='http://www.w3.org/2000/svg'>
			<g
				fill='none'
				fillRule='evenodd'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				transform='translate(1 1)'
				{...props}
			>
				<path d='m.5 9.5 9-9 9 9' />
				<path d='m2.5 7.5v7c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-7' />
			</g>
		</svg>
	);
}

export function MailIcon({ width = 21, height = 21, ...props }: Props) {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 24 24'
			fill='none'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			aria-hidden='true'
			{...props}
		>
			<path
				d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
				className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
			/>
			<path d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6' className='stroke-zinc-400 dark:stroke-zinc-500' />
		</svg>
	);
}
export function Folder({ width = 21, height = 21, ...props }: Props) {
	return (
		<svg width={width} height={height} viewBox='0 0 21 21' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g
				fill='none'
				fillRule='evenodd'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				transform='translate(2 4)'
			>
				<path d='m15.5 4.5c.000802-1.10737712-.8946285-2.00280762-1.999198-2.00280762l-5.000802.00280762-2-2h-4c-.55228475 0-1 .44771525-1 1v.99719238 2.00280762' />
				<path d='m.81056316 5.74177845 1.31072322 5.24326075c.22257179.8903496 1.02254541 1.5149608 1.94029301 1.5149608h8.87667761c.9177969 0 1.7178001-.6246768 1.9403251-1.5150889l1.3108108-5.24508337c.1339045-.53580596-.1919011-1.07871356-.727707-1.21261805-.079341-.0198283-.1608148-.02983749-.2425959-.02983749l-13.43852073.00188666c-.55228474.00007754-.99985959.44785564-.99985959 1.00014038 0 .08170931.01003737.16310922.02985348.24237922z' />
			</g>
		</svg>
	);
}
export function Contact({ width = 21, height = 21, ...props }: Props) {
	return (
		<svg width={width} height={height} viewBox='0 0 21 21' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g
				fill='none'
				fillRule='evenodd'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				transform='translate(3 3)'
			>
				<circle cx='7.5' cy='5.5' r='2' />
				<path d='m.5 3.5h1v-1c0-1.1045695.8954305-2 2-2h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-8c-1.1045695 0-2-.8954305-2-2v-1h-1' />
				<path d='m.5 7.5h1' />
				<path d='m.5 5.5h1' />
				<path d='m.5 9.5h1' />
				<path d='m10.5 10.5v-1c0-1.1045695-.8954305-2-2-2h-2c-1.1045695 0-2 .8954305-2 2v1c0 .5522847.44771525 1 1 1h4c.5522847 0 1-.4477153 1-1z' />
			</g>
		</svg>
	);
}
