import { Project } from '@interfaces/VercelDeployment';
import { useVercelDeployments } from '@hooks/useVercelDeployments';

import { DeploymentItem } from '../DeploymentItem/DeploymentItem';
import { ProjectSection } from '../ProjectSection/ProjectSection';
import { List } from '../Skeleton/List/List';

const VercelSection = () => {
	const { isLoading, projects } = useVercelDeployments();
	return (
		<ProjectSection
			title={`Últimos proyectos (${projects?.length || 0}) 🚀`}
			isLoading={isLoading}
			loadingComponent={<List lines={4} quantity={4} numberOfItems={4} showItems title />}
		>
			<div className='deployment'>
				{projects?.map((project: Project) => (
					<DeploymentItem key={project.id} projectItem={project} />
				))}
			</div>
		</ProjectSection>
	);
};

export default VercelSection;
