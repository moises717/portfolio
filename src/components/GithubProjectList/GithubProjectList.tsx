import { GithubItem } from '../GithubItem/GithubItem';

import { GithubResponse } from '@interfaces/GithubResponse';
import { useGithubRepos } from '@hooks/useGithubRepos';
import { useGithubProfile } from '@hooks/useGithubProfile';

import { ProjectSection } from '../ProjectSection/ProjectSection';
import { List } from '../Skeleton/List/List';

const GithubProjectList = () => {
	const { githubRepos, loading } = useGithubRepos();
	const { gitHubProfile } = useGithubProfile('moises717');

	return (
		<ProjectSection
			title={`Github (${gitHubProfile ? gitHubProfile?.public_repos : '0'})`}
			isLoading={loading}
			loadingComponent={<List lines={5} quantity={3} title showItems numberOfItems={1} />}
		>
			<>
				{githubRepos &&
					githubRepos.map((repo: GithubResponse) => {
						return <GithubItem key={repo.id} {...repo} />;
					})}
				<div className='github-complete-list'>
					<a href='https://github.com/moises717' target='_blank'>
						Ver todos
					</a>
				</div>
			</>
		</ProjectSection>
	);
};

export default GithubProjectList;
