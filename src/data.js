// Woks
import imgHeretic from './assets/img/png/card-project/img-project-heretic.png';
import imgTheWonders from './assets/img/png/card-project/img-project-the-wonders.png';
import imgYuGiOh from './assets/img/png/card-project/img-project-yu-gi-oh.png';
import imgOpuntia from './assets/img/png/card-project/img-project-opuntia.png';
import imgPortfolio from './assets/img/png/card-project/img-project-portfolio.png';

// Services
import imgServiceDeveloper from './assets/img/png/card-service/img-service-developer.jpg';
import imgServiceDesigner from './assets/img/png/card-service/img-service-ui-ux-designer.jpg';

export const dataHome = {
    titleH2: 'Hello, I’m',
    titleH1: 'Louis',
    description: 'a student web developer based in Paris. I’m a passionate and creative person who loves to create and build things. I’m a self-taught developer and I’m always looking for new challenges and opportunities to learn and grow.',
    competences: ['Developer', 'Designer 3D', 'Designer UI/UX']
}

export const dataWorks = {
    works: [
        {
            id: 1,
            type: 'Developer',
            image: imgHeretic,
            title: 'Heretic',
            language: ['Python', 'illustrator'],
            description: "Heretic is the first project i ever developped with the help of a friend. It was a project where we had to make a textual RPG game in less than 2 months (actually 1 month of real work in parrallel of studying). It is a reproduction of Hetic where i'm a first year student.",
            urlGitHub: 'https://github.com/LFLeveneur/Heretic',
        },
        {
            id: 2,
            type: 'Developer',
            image: imgTheWonders,
            title: 'TheWonders',
            language: ['HTML', 'CSS'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
            urlGitHub: 'https://github.com/LFLeveneur',
        },
        {
            id: 3,
            type: 'Developer',
            image: imgYuGiOh,
            title: 'Yu-Gi-Oh-Card',
            language: ['HTML', 'CSS', 'PHP', 'Wordpress'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
            urlGitHub: 'https://github.com/LFLeveneur',
            url: 'https://hh-test-3.fr/Yu-Gi-Oh/'
        },
        {
            id: 4,
            type: 'Developer',
            image: imgOpuntia,
            title: 'Opuntia',
            language: ['HTML', 'CSS', 'PHP', 'MySQL'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
            urlGitHub: 'https://github.com/LFLeveneur',
        },
        {
            id: 5,
            type: 'Designer 3D',
            image: imgPortfolio,
            title: 'Portfolio',
            language: ['HTML', 'CSS', 'React', 'Node.js', 'SCSS'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
            urlGitHub: 'https://github.com/LFLeveneur',
            url: 'https://www.louisleveneur.ml',
        }
    ]
}

export const dataServices = {
    title: 'My services',
    myServices: [ 'Developeur Front ', 'UI/UX design' ],
    available: 'Unavailable for the moment',
    availableDate: 'Until 05/09/2020',
    price: '150€ /day',
    experience: '2 year',
    services: [
        {
            image: imgServiceDeveloper,
            title: 'Developer',
            language: ['HTML', 'CSS', 'React', 'Node.js', 'SCSS'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
        },
        {
            image: imgServiceDesigner,
            title: 'UI/UX Designer',
            language: ['Figma', 'Adobe'],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
        }
    ]
}

export const dataAbout = {
    title: 'About',
}

export const dataContact = {
    title: 'Contact',
}