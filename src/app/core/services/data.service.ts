import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const authors = ['Author 1', 'Author 2', 'Author 3', 'Author 4', 'Author 5'];

        const courses = [
            {
                id: 1,
                title: 'Angular 1.X',
                date: 1487714400000,
                duration: 90,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi nisl, sollicitudin non sapien congue, ultrices tristique metus.',
                authors: ['Author 1']
            },
            {
                id: 2,
                title: 'How to make angular CDP in time',
                date: 1487800800000,
                duration: 105,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi nisl, sollicitudin non sapien congue, ultrices tristique metus.',
                authors: ['Author 2']
            },
            {
                id: 3,
                title: 'TypeScript is awesome',
                date: 1487887200000,
                duration: 75,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi nisl, sollicitudin non sapien congue, ultrices tristique metus.',
                authors: ['Author 3']
            },
            {
                id: 4,
                title: 'Semantic Markup',
                date: 1487973600000,
                duration: 130,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi nisl, sollicitudin non sapien congue, ultrices tristique metus.',
                authors: ['Author 4']
            },
            {
                id: 5,
                title: 'How to make BEM',
                date: 1487973600000,
                duration: 230,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi nisl, sollicitudin non sapien congue, ultrices tristique metus.',
                authors: ['Author 5']
            }
        ];
        return { authors, courses };
    }
}
