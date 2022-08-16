import { useEffect, useState } from "react"

import { getVercelDeployment } from "@services/vercel"
import { Project } from "@interfaces/VercelDeployment";

import { DeploymentItem } from "../DeploymentItem/DeploymentItem";
import { ProjectSection } from "../ProjectSection/ProjectSection";
import { List } from "../Skeleton/List/List";

export const VercelSection = () => {
    const [projects, setProjects] = useState<Project[]>();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        getVercelDeployment().then(({ projects }) => {
            setProjects(projects);
            setIsLoading(false);
        })
    }, [])

    return (
        <ProjectSection title={`Despliegues (${projects?.length || 0}) 🚀`} isLoading={isLoading} loadingComponent={<List lines={4} quantity={4} numberOfItems={4} showItems title />}>
            <>
                {
                    projects?.map((project: Project) => <DeploymentItem key={project.id} projectItem={project} />)
                }
            </>
        </ProjectSection>
    )
}
