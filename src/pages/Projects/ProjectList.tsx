export interface ProjectListProps {
    title: string;
    image: string;
    text?: string;
    url: string;
    technologies: string[];
}

export const ProjectList: ProjectListProps[] = [
    {
        title: 'Juego de ajedrez',
        url: 'https://i.imgur.com/ih13x2G.jpeg',
        text: "El ajedrez es un juego de tablero entre dos contrincantes en el que cada uno dispone al inicio de 16 piezas",
        image: 'https://i.imgur.com/ih13x2G.jpeg',
        technologies: [
            'css',
            'html',
            'nodejs',
            'react',
            'sass',
            'typescript',
            'javascript'
        ]
    },
    {
        title: 'Mars app',
        url: 'https://i.imgur.com/XqQZQZb.png',
        text: "Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio",
        image: 'https://i.imgur.com/jJFyufS.jpeg',
        technologies: [
            'css',
            'html',
            'javascript',
        ]
    },

]