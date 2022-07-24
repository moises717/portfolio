import Card from '@components/Card/Card';
import './projects.scss';
import { ProjectList, ProjectListProps } from './ProjectList';

export const Projects = () => {
    return (
        <div className="projects fade-in">
            <div className="projects__content">
                {
                    ProjectList.map(({ image, title, technologies, text }: ProjectListProps, index) => {
                        return (
                            <Card title={title} image={image} key={index} >
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
                                    {text}
                                </Card.Text>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
