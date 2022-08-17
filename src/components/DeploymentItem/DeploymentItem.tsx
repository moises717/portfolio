import { Project } from "@interfaces/VercelDeployment";
import { DevIcons } from "@icons/DevIcons";

import './DeploymentItem.scss';
import { useGithubFiles } from "../../hooks/useGithubFiles";
import { capitalize } from "../../utils/CapitalizeText";
import { List } from "../Skeleton/List/List";

interface DeploymentItemProps {
    projectItem: Project;
}

export const DeploymentItem = ({ projectItem }: DeploymentItemProps) => {
    const { fileGithubInfo, loading } = useGithubFiles({ repo: projectItem.link.repo, file: 'package.json', username: projectItem.link.org });
    const repoInfo = fileGithubInfo ? JSON.parse(fileGithubInfo) : {};

    return (
        <li key={projectItem.id}>
            <a className="deployment__title" href={`https://${projectItem.alias[0].domain}`} target="_blank">
                {capitalize(projectItem.name)}
            </a>
            <span className='description'>
                {!loading ? <p>{repoInfo.description || projectItem.framework + ' aplicación'}</p> : <List lines={4} quantity={1} />}
            </span>
            <span className="technologies">
                {DevIcons[projectItem.framework] ?? ''} {projectItem.framework} {repoInfo.keywords?.map((i: any, index: any) => <span key={index}>{DevIcons[i] || ` ${i}`}</span>)}
            </span>
        </li>
    )
}
