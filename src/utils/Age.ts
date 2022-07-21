export const getYears = (year: string): number => {
	const startYear = new Date(year);
	const today = new Date();
	const age = today.getFullYear() - startYear.getFullYear();

	return age;
};
