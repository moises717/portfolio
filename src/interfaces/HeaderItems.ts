import { ReactElement } from 'react';

export interface HeaderItems {
	id: number;
	text: string;
	icon: ReactElement | ReactElement[];
	to: string;
}

export interface HeaderBaseItems {
	activeItem: HeaderItems | null;
	list: HeaderItems[];
}
