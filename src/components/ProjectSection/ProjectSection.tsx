import { ReactElement } from 'react';
import { ContentTitle } from '../ContentTitle/ContentTitle';

import './ProjectSection.scss';

interface ProjectSectionProps {
	children: ReactElement | ReactElement[];
	title?: string;
	isLoading?: boolean;
	loadingComponent?: ReactElement;
}

export const ProjectSection = ({ children, title, isLoading, loadingComponent }: ProjectSectionProps) => {
	return (
		<section className='project-section'>
			<ContentTitle title={title ?? ''} />
			{children}
			{isLoading && loadingComponent}
		</section>
	);
};
