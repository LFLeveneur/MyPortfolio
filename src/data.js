// Woks
import imgLouxor from './assets/img/png/card-project/img-project-louxor.png';
import imgHeretic from './assets/img/png/card-project/img-project-heretic.png';
import img0fr from './assets/img/png/card-project/img-project-0fr.png';
import imgTheWonders from './assets/img/png/card-project/img-project-the-wonders.png';
import imgAppMeteo from './assets/img/png/card-project/img-project-app-meteo.png';
import imgAppMusic from './assets/img/png/card-project/img-project-app-music.png';
import imgAppDelivery from './assets/img/png/card-project/img-project-app-delivery.png';
import imgAppToDooList from './assets/img/png/card-project/img-project-app-to-doo-list.png';
import imgTampleJaponais from './assets/img/png/card-project/img-project-tample-japonais.png';
import imgEcclesia from './assets/img/png/card-project/img-project-ecclesia.png';
import imgSnowHouse from './assets/img/png/card-project/img-project-snow-house.png';
import imgYuGiOh from './assets/img/png/card-project/img-project-yu-gi-oh.png';
import imgOpuntia from './assets/img/png/card-project/img-project-opuntia.png';
import imgPortfolio from './assets/img/png/card-project/img-project-portfolio.png';

// Services
import imgServiceDeveloper from './assets/img/png/card-service/img-service-developer.jpg';
import imgServiceDesigner from './assets/img/png/card-service/img-service-ui-ux-designer.jpg';

// About
import pdfCV from './assets/CV-LeveneurLouis.pdf';

export const dataHome = {
    titleH2: 'Hello, I’m',
    titleH1: 'Louis',
    description: 'a student web developer and web designer based in Paris.',
    competences: ['Developer', 'Designer 3D', 'Designer UI/UX']
}

export const dataWorks = {
    works: [
        {
            id: 14,
            type: 'Developer',
            image: imgPortfolio,
            title: 'Portfolio',
            language: ['HTML', 'CSS', 'React', 'SCSS'],
            description: 'Here is the first version of my new fiat portfolio in React (first project in React that I realize)',
            urlGitHub: 'https://github.com/LFLeveneur/MyPortfolio',
            url: 'https://www.louisleveneur.ml',
        },
        {
            id: 13,
            type: 'Developer',
            image: imgOpuntia,
            title: 'Opuntia',
            language: ['HTML', 'CSS', 'PHP', 'MySQL'],
            description: 'For this project I was able to use MySQL and PHP to create a CRUD. I also have the design of the site.',
            urlGitHub: 'https://github.com/LFLeveneur/Opuntia',
            url: 'https://www.figma.com/file/8b4r0xSr9eCAldE3e6Rc5u/Opuntia?node-id=0%3A1'
        },
        {
            id: 12,
            type: 'Developer',
            image: imgYuGiOh,
            title: 'Yu-Gi-Oh-Card',
            language: ['HTML', 'CSS', 'PHP', 'Wordpress'],
            description: 'For this project I was able to use the wordpress CMS, as well as PHP. The goal was to create a system of filter, search and display of Yu-Gi-Oh map.',
            urlGitHub: 'https://github.com/LFLeveneur/Yu-Gi-Oh-Card',
            url: 'https://www.figma.com/file/cwcUno7b2jD6xkIyxGX2em/Yu-Gi-Yo?node-id=0%3A1&t=AJwtsuLohK5EaLnd-1'
        },
        {
            id: 11,
            type: 'Designer 3D',
            image: imgSnowHouse,
            title: 'TheWonders',
            language: ['Blender'],
            description: '3D realization of a snow house in 4 hours with the help of an image.',
            url: 'https://dribbble.com/shots/20204111-House-Snow-3D',
        },
        {
            id: 10,
            type: 'Designer UI/UX',
            image: imgEcclesia,
            title: 'Ecclesia',
            language: ['Figma', 'Interview'],
            description: 'Ecclesia is the collaborative forum where you can find reliable and synthetic information on politics. I had to do the interviews and the design of the application.',
            url: 'https://www.figma.com/file/XzbtBd2Mt9QygLXh5gOI56/Ecclesia?node-id=2%3A11187',
        },
        {
            id: 9,
            type: 'Designer 3D',
            image: imgTampleJaponais,
            title: 'Tample Japonais',
            language: ['Blender'],
            description: '3D realization of a Japanese Temple in 6 hours with the help of an image.',
            url: 'https://dribbble.com/shots/20204060-Temple-japonais-3D',
        },
        {
            id: 8,
            type: 'Designer UI/UX',
            image: imgAppToDooList,
            title: 'To-Doo-List App',
            language: ['Figma'],
            description: 'Here is a Daily challenge. The goal is to create in one day a UI/UX interface. So I was able to create this to-doo-list application.',
            url: 'https://dribbble.com/shots/16949078-Application-Too-Do-List',
        },
        {
            id: 7,
            type: 'Designer UI/UX',
            image: imgAppDelivery,
            title: 'Delivery App',
            language: ['Figma'],
            description: 'Here is a Daily challenge. The goal is to create in one day a UI/UX interface. So I was able to create this delivery application.',
            url: 'https://dribbble.com/shots/16949076-Application-Maps',
        },
        {
            id: 6,
            type: 'Designer UI/UX',
            image: imgAppMusic,
            title: 'Music App',
            language: ['Figma'],
            description: 'Here is a Daily challenge. The goal is to create in one day a UI/UX interface. So I was able to create this music application.',
            url: 'https://dribbble.com/shots/16949071-Application-Music',
        },
        {
            id: 5,
            type: 'Designer UI/UX',
            image: imgAppMeteo,
            title: 'Weather App',
            language: ['Figma'],
            description: 'Here is a Daily challenge. The goal is to create in one day a UI/UX interface. So I was able to create this weather application.',
            url: 'https://dribbble.com/shots/16949060-Application-m-t-o',
        },
        {
            id: 4,
            type: 'Designer UI/UX',
            image: imgTheWonders,
            title: 'The Wonders',
            language: ['Figma', 'Interview', 'HTML', 'CSS'],
            description: 'Application "Les défis" for Les Merveilles Association promoting sisterhood and helping women in their professional projects. I should make some models and develop an application.',
            urlGitHub: 'https://github.com/LFLeveneur/TheWonders',
            url: 'https://www.figma.com/file/98fQH4QgkpCpyQAo6RvS7W/The-Wonders?node-id=1%3A13366'
        },
        {
            id: 3,
            type: 'Designer UI/UX',
            image: img0fr,
            title: '0fr',
            language: ['Figma', 'Illustrator', 'Interview'],
            description: 'Ofr. is an independent bookstore, gallery and publisher that functions as a home base for artists. My goal was redesign the website of the company, and to create a new brand identity.',
            url: 'https://www.figma.com/file/ExHHcejL5ZgDmtHTT1IURg/0fr?node-id=0%3A1',
        },
        {
            id: 2,
            type: 'Developer',
            image: imgHeretic,
            title: 'Heretic',
            language: ['Python', 'Illustrator'],
            description: "Heretic is the first project i ever developped with the help of a friend. It was a project where we had to make a textual RPG game in less than 2 months. It is a reproduction of Hetic where i'm a first year student.",
            url: 'https://www.linkedin.com/feed/update/urn:li:activity:6760008194174656512/',
            urlGitHub: 'https://github.com/LFLeveneur/Heretic',
        },
        {
            id: 1,
            type: 'Designer UI/UX',
            image: imgLouxor,
            title: 'Louxor',
            language: ['Figma', 'Interview'],
            description: "The goal of this project was to redesign the website of the Luxor. A cinema that was created in 1920. I was in a team of 4 for this project which lasted one week. My role was to coordinate the team and to design the models.",
            url: 'https://www.figma.com/file/gtM8m0vv71bd3NGVHvOfyg/LOUXOR?node-id=55%3A679',
        }
    ]
}

export const dataServices = {
    myServices: [ 'Developeur Front ', 'UI/UX design' ],
    available: 'Available for freelance work',
    availableDate: '01/01/2023',
    price: '300€ /day',
    experience: '3 year',
    services: [
        {
            image: imgServiceDeveloper,
            title: 'Developer',
            language: ['HTML', 'CSS', 'React', 'SCSS'],
            description: '',
            url: '',
        },
        {
            image: imgServiceDesigner,
            title: 'UI/UX Designer',
            language: ['Figma', 'Adobe'],
            description: '',
            url: '',
        }
    ]
}

export const dataAbout = {
    title: `Hello ! My name is Leveneur Louis.`,
    text1: `I'm originally from La Reunion, but I currently live in Paris, France. I'm studying engineering in Hetic. School of digital web reputable in its field. Junior front end developer & web designer.`,
    text2: `I am very motivated, I like to solve problems, work in a team, I’m always looking for new challenges and opportunities to learn and grow.`,
    cv: pdfCV,
}

export const dataContact = {
    title: 'Contact',
}