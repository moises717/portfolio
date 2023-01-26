import ReactMarkdown from 'react-markdown';
import remarkGemoji from 'remark-gemoji';

import { skillList } from './SkillList';
import { GitHub, Linkedin } from '@icons/index';
import { useGithubFiles } from '@hooks/useGithubFiles';
import { HomeSkeleton } from '@components/Skeleton/HomeSkeleton/HomeSkeleton';
import { Skills } from '@interfaces/Skills';

import profile from '@assets/images/profile.png';
import './Home.scss';

export const Home = () => {
	const { fileGithubInfo, loading } = useGithubFiles({ file: 'README.md', repo: 'moises717', username: 'moises717' });

	return (
		<div className='home'>
			<div className='home__presentation'>
				<div className='home__image'>
					<img src={profile} alt='Moises barillas picture' width={230} height={230} />
					<div className='home__social'>
						<a href='https://github.com/moises717' target='__blank'>
							<GitHub className='home__github' />
						</a>
						<a href='https://www.linkedin.com/in/moises-barillas/' target='__blank'>
							<Linkedin className='home__linkedin' />
						</a>
					</div>
				</div>
				<div className='home__description'>
					<div>
						<h1>
							Hola! Soy Moisés Barillas, <span>desarrollador web</span>
						</h1>
					</div>
					<div className='technologies'>
						{skillList.map((skill: Skills) => {
							return (
								<div title={skill.title} key={skill.title} className='technologies__item' data-tooltip={skill.title}>
									{skill.icon}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className='home__about-me fade-in'>
				{loading && <HomeSkeleton />}
				<ReactMarkdown remarkPlugins={[remarkGemoji]} children={fileGithubInfo} />
			</div>
		</div>
	);
};
