export interface ProjectListProps {
    title: string;
    image: string;
    text?: string;
    url: string;
    technologies: string[];
}

export const ProjectList: ProjectListProps[] = [
    {
        title: 'Pagina web personal',
        url: 'https://moisesbarillas.vercel.app/',
        text: "Pagina web personal que muestra una breve descripción de mi trabajo, con una imagen de mi perfil y una lista de mis tecnologías que utilizo.",
        image: 'https://i.imgur.com/epc5lfD.png',
        technologies: [
            'html',
            'react',
            'sass',
            'typescript',
        ]
    },
    {
        title: 'Mars app',
        url: 'https://i.imgur.com/XqQZQZb.png',
        text: "Ejemplo card de proyecto que muestra una imagen de un planeta y una descripción de su estado actual.",
        image: 'https://i.imgur.com/jJFyufS.jpeg',
        technologies: [
            'css',
            'html',
            'javascript',
        ]
    },

]