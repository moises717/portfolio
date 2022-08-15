import { Project } from "@interfaces/VercelDeployment";
import { DevIcons } from "../../icons/DevIcons";

import './DeploymentItem.scss';

interface DeploymentItemProps {
    projectItem: Project;
}

export const DeploymentItem = ({ projectItem }: DeploymentItemProps) => {
    return (
        <ul className="deployment">
            <li key={projectItem.id}>
                <a href={`https://${projectItem.alias[0].domain}`} target="_blank">{projectItem.name.split(' ')[0].split('')[0].toUpperCase() + projectItem.name.slice(1).replaceAll('-', ' ')}</a>
                {projectItem.live}
                <span>{DevIcons[projectItem.framework] ?? ''} {projectItem.framework}</span>
            </li>
        </ul>
    )
}
