import { Project } from "@interfaces/VercelDeployment";
import { DevIcons } from "@icons/DevIcons";

import './DeploymentItem.scss';
import { useGithubFiles } from "../../hooks/useGithubFiles";
import { Loading } from "../Loading/Loading";
import { capitalize } from "../../utils/CapitalizeText";

interface DeploymentItemProps {
    projectItem: Project;
}

export const DeploymentItem = ({ projectItem }: DeploymentItemProps) => {
    const { fileGithubInfo, loading } = useGithubFiles({ repo: projectItem.link.repo, file: 'package.json', username: projectItem.link.org });
    const repoInfo = fileGithubInfo ? JSON.parse(fileGithubInfo) : {};


    return (
        <ul className="deployment">
            <li key={projectItem.id}>
                <a className="deployment__title" href={`https://${projectItem.alias[0].domain}`} target="_blank">{capitalize(projectItem.name)}</a>
                <span className='github-list__description'>
                    {!loading ? repoInfo.description || projectItem.framework + ' aplicación' : <Loading />}
                </span>
                <span className="technologies">{DevIcons[projectItem.framework] ?? ''} {projectItem.framework} {repoInfo.keywords?.map((i: any) => DevIcons[i] || ` ${i}`)}</span>

            </li>
        </ul>
    )
}
