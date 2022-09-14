import { Project } from '@interfaces/VercelDeployment';
import { DevIcons } from '@icons/DevIcons';

import { useGithubFiles } from '@hooks/useGithubFiles';
import { capitalize } from '@utils/CapitalizeText';
import { List } from '../Skeleton/List/List';

import './DeploymentItem.scss';

interface DeploymentItemProps {
	projectItem: Project;
}

export const DeploymentItem = ({ projectItem }: DeploymentItemProps) => {
	const { fileGithubInfo, loading } = useGithubFiles({
		repo: projectItem.link.repo,
		file: 'package.json',
		username: projectItem.link.org,
	});
	const repoInfo = fileGithubInfo ? JSON.parse(fileGithubInfo) : {};

	return (
		<div className='deployment__item'>
			<header className='deployment__header'>
				<a href={`https://${projectItem.alias[0].domain}`} target='_blank'>
					{capitalize(projectItem.name)}
				</a>
			</header>

			{!loading ? (
				<p className='deployment__description'>{repoInfo.description || projectItem.framework + ' aplicación'}</p>
			) : (
				<List lines={4} quantity={1} />
			)}
			<div className='deployment__technologies-used'>
				<small>build with: {DevIcons[projectItem.framework] ?? projectItem.framework}</small>
				{repoInfo.keywords?.map((i: any, index: any) => (
					<span key={index}>{i}</span>
				))}{' '}
			</div>
		</div>
	);
};
