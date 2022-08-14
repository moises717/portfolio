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
        title: 'Todo link',
        url: 'https://todo-link.up.railway.app/',
        text: "Aplicación de tareas que permite agregar, eliminar y editar tareas, esta app crea un enlace único a cada lista de tareas el cual puedes compartir.",
        image: 'https://i.imgur.com/ESEwlp3.png',
        technologies: [
            'nextjs',
            'mongodb',
        ]
    },

]