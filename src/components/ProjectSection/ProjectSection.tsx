import { ContentTitle } from '../ContentTitle/ContentTitle';

import { DevIcons } from '@icons/DevIcons';
import { ProjectList, ProjectListProps } from '@pages/Projects/ProjectList';
import Card from '@components/Card/Card';

import './ProjectSection.scss'

export const ProjectSection = () => {
    return (
        <section className='my-projects'>
            <ContentTitle title={`Proyectos (${ProjectList.length})`} />
            <div className='my-projects__content'>
                {
                    ProjectList.map(({ image, title, technologies, text, url }: ProjectListProps, index) => {
                        return (
                            <Card title={title} image={image} url={url} key={index} >
                                <Card.Technologies>
                                    {
                                        technologies.map((technology, index) => {
                                            return <div key={index}>
                                                {DevIcons[technology]}
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
        </section>
    )
}
