import { ReactElement } from 'react';
import { ContentTitle } from '../ContentTitle/ContentTitle';

import './ProjectSection.scss';

interface ProjectSectionProps {
	children: ReactElement | ReactElement[];
	title?: string;
	isLoading?: boolean;
	loadingComponent?: ReactElement;
	id?: string;
}

export const ProjectSection = ({ children, title, isLoading, loadingComponent, id }: ProjectSectionProps) => {
	return (
		<section className='project-section' id={id}>
			<ContentTitle title={title ?? ''} />
			<div className='project-section__content'>
				{children}
				{isLoading && loadingComponent}
			</div>
		</section>
	);
};
