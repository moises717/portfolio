import Card from '@components/Card/Card';
import { ProjectList, ProjectListProps } from '@pages/Projects/ProjectList';

import './ProjectSection.scss'

export const ProjectSection = () => {
    return (
        <div className='my-projects'>
            {
                ProjectList.map(({ image, title, technologies, text, url }: ProjectListProps, index) => {
                    return (
                        <Card title={title} image={image} url={url} key={index} >
                            <Card.Technologies>
                                {
                                    technologies.map((technology, index) => {
                                        return <div key={index}>
                                            {technology}
                                        </div>;
                                    })
                                }
                            </Card.Technologies>
                            <Card.Text>
                                {text || 'Project description'}
                            </Card.Text>
                        </Card>
                    )
                })
            }
        </div>
    )
}
