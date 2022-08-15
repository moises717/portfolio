import { useEffect, useState } from "react"
import { getVercelDeployment } from "@services/vercel"
import { ContentTitle } from "../ContentTitle/ContentTitle"
import { Project } from "@interfaces/VercelDeployment";
import { DeploymentItem } from "../DeploymentItem/DeploymentItem";

export const VercelSection = () => {
    const [projects, setProjects] = useState<Project[]>();
    useEffect(() => {
        getVercelDeployment().then((res) => {
            console.log(res);
            setProjects(res.projects);

        })
    }, [])

    return (
        <section>
            <ContentTitle title="Despliegues 🚀" />
            {
                projects?.map((project: Project) => <DeploymentItem key={project.id} projectItem={project} />)
            }
        </section>
    )
}
