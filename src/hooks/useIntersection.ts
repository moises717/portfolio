import { useEffect, useRef, useState } from 'react';

export const useIntersecting = (options: IntersectionObserverInit, once?: boolean) => {
	const [intersecting, setIntersecting] = useState(false);
	const intersectingRef = useRef<HTMLDivElement | null>(null);

	const onChange = (entries: IntersectionObserverEntry[]) => {
		const [entry] = entries;
		if (!once) {
			setIntersecting(entry.isIntersecting);
		} else {
			if (entry.isIntersecting) setIntersecting(true);
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(onChange, options);
		if (intersectingRef.current) observer.observe(intersectingRef.current);

		return () => {
			if (intersectingRef.current) observer.unobserve(intersectingRef.current);
		};
	}, [intersectingRef, options]);

	return [intersectingRef, intersecting] as const;
};
