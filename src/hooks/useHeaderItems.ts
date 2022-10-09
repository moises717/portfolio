import { useState } from 'react';
import { HeaderBaseItems, HeaderItems } from '@interfaces/HeaderItems';

export const useHeaderItems = (HEADER_ITEMS: HeaderItems[]) => {
	const [headerItems, setHeaderItems] = useState<HeaderBaseItems>({
		activeItem: null,
		list: HEADER_ITEMS,
	});

	const toggleActive = (index: number) => {
		setHeaderItems({
			...headerItems,
			activeItem: headerItems.list[index],
		});
	};

	const toggleActiveStyle = (index: number) =>
		headerItems.list[index] === headerItems.activeItem ? 'nav-items--active' : '';

	return {
		headerItems,
		toggleActive,
		toggleActiveStyle,
	};
};
