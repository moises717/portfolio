export const getAge = (): number => {
	const myBirthday = new Date('1998-09-20');
	const today = new Date();
	const age = today.getFullYear() - myBirthday.getFullYear();

	return age;
};
