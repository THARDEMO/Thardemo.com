const _state = {

    experience: [
        {
            where: "Undergraduate",
            year: 'Graduating - 2025',
            role: 'Web Development & Design',
            link: 'https://mau.se/sok-utbildning/program/tgwdu/',
        },
        {
            where: 'Swedish Armed Forces',
            year: '2021 - 2022',
            role: 'Flygbassäkerhetssoldat',
            link: 'https://jobb.forsvarsmakten.se/sv/utbildning/befattningsguiden/gu-befattningar/flygbassakerhetssoldat/',
        },
        {
            where: 'Highschool ',
            year: '2018 - 2021',
            role: 'Game Graphics & Animation',
            link: 'https://lbs.se/program/estetiska-programmet/spelgrafik/',
        },
        {
            where: 'JULA',
            year: '2021 - 2023',
            role: 'Store Worker',
            link: null,
        },
        {
            where: 'Restaurants',
            year: '2018 - 2020',
            role: 'Service',
            link: null,
        },
    ],
    about: [
        {
            class: 'whoami',
            css: '--LhtGreen',
            title: 'Who <br>Am <br>I?',
            stats: [
                {
                    subtitle: 'Age',
                    content: '21 years',
                },
                {
                    subtitle: 'Where',
                    content: 'Malmö, Sweden',
                },
                {
                    subtitle: 'Education',
                    content: 'Webbaserad Design & Utveckling<br>Malmö University'
                },
            ],
            message: {
                title: 'About Me',
                content: [
                    'I am a 21 year old student based in Malmö, Sweden, striving to be a Web developer with a background in game graphics and design.',
                    'I would describe myself as a creative mind always striving to level up and learn new techniques and skills.',
                    'Ever since I was a child I have enjoyed the process of creating things. That includes Characters, Video Games, Animations, Websites & Algorithms.',
                    'This love has naturally manifested through my interest in all the creative media that exists in the ever expanding media ecology. And this is where I find my inspirations for my own creations.',
                    'Through Code and Design I try to make the web a more visually stunning and create exiting and functional experiences every day.',
                ],
            }, 
        },
        {
            class: 'development',
            css: '--LhtBlue',
            title: 'Develop<br>ment',
            stats: [
                {
                    subtitle: 'Experience',
                    content: '2 years',
                },
                {
                    subtitle: 'Stack',
                    content: 'JavaScript, React, PHP, HTML, CSS',
                }
            ],
            message: {
                title: 'My Speciality',
                content: [ 
                    'I got introduced to programing through my education and quickly a fun and healthy new addiction was kickstarted.',
                    'I love how I am able to let my creativity flow through the code I write. And there is always a new challenge to take on and to learn.',
                    'I love how code can solve countless problems, how a well written algorithm can sort and find patterns in any type of data, how it can create a immersive flowing user experience.',
                    'The only limit in programming is your own creativity and ingenuity and it is amazing.',
                ],
            }, 
        },
        {
            class: 'creations',
            css: '--LhtPurple',
            title: 'Creative Mind & Design',
            stats: [
                {
                    subtitle: 'Experience',
                    content: 'As long as i can remember',
                },
                {
                    subtitle: 'Stack',
                    content: 'Photoshop, Figma',
                }
            ],
            message: {
                title: 'Creation',
                content: [
                    'During the creation process I try to  let my imagination run wild.',
                    'I have been creating and drawing ever since I was young, I loved creating characters and imagine the stories they have experienced. These stories that evolve from seemingly silly little characters is something that I try to bring into what I design.',
                    'The same way a character has a story based on how it looks transfers to websites as well. Through a visual identity you can create the feelings that a website has its own story and is suited to its means.',
                    'I believe design should be meaningful and create a great visual and functional experience. Through this mindset even more stories can be created.',  
                ],
            }, 
        },
    ],
    stacks: [
        {
            type: 'JavaScript',
            text: 'Vanilla javascript is a versitile language suited for frontend development.',
            background: 'linear-gradient(180deg, #F0DE3E 0%, #FEFFB8 100%)',
        },
        {
            type: 'React',
            text: 'Javascript library which enables a component based workflow targeting user interfaces.',
            background: 'linear-gradient(180deg, #61DAFB 0%, #1EFB91 141.73%)',
        },
        {
            type: 'Php',
            text: 'Php is another scripting language suited for server side applications',
            background: 'linear-gradient(180deg, #4F5B93 0%, #4961D2 99.99%)',
        },
        {
            type: 'D3',
            text: 'D3 makes creating complex & interactive datavisualizations possible trough the web.'
        },
        {
            type: 'Html',
            text: 'Hypertext Markup Language formats the web and without it webdevelopment wouldn’t exist ',
            background: 'linear-gradient(180deg, #FF7262 0%, #FFEF62 192.94%)',
        },
        {
            type: 'CSS',
            text: 'Css formats & styles the web, knowledge of it is necessary in order to create a responsive and beautiful web application',
            background: 'linear-gradient(180deg, #854F93 0%, #B81717 188.31%)',
        },
        {
            type: 'Figma',
            text: 'Figma is the interactive prototyping and design tool every project begins with.',
            background: 'linear-gradient(180deg, #0ACF83 0%, #0AACCF 100%)',
        },
        {
            type: 'Frontend',
            text: 'Focus on UI & UX whilst making the web a little bit more interesting with each project',
            background: 'linear-gradient(180deg, #FFF 0%, #FFCCA0 100%)',
        },
        {
            type: 'Backend',
            text: 'Creating usable API’s to power the applications on the frontend.',
            background: 'linear-gradient(180deg, #83190B 30.65%, #DA2939 104.03%)',
        },
        {
            type: 'PhotoShop',
            text: 'Image editing software that has powerful uses in creative works.',
            background: 'linear-gradient(180deg, #DE76E0 0%, #93139E 100%)',
        },
        
    ],
    projects: [
        { 
            title: 'ClassCode',
            endpoint: '/app/classcode/'
        }, 
        {
            title: 'Tipsy',
            endpoint: '/app/tipsy/'
        }, 
        {
            title: 'Egg Timer',
            endpoint: '/app/eggtimer/'
        }
    ],
    links: [
        {
            type: 'linkedIn',
            link: 'https://www.linkedin.com/in/teo-hardemo-22a02726b',
            imgPath: 'linkedInIcon.png',
        },
        {
            type: 'gitHub',
            link: 'https://github.com/THARDEMO',
            imgPath: 'gitHubIcon.png',
        },
        {
            type: 'instagram',
            link: 'https://www.instagram.com/hardtemo/',
            imgPath: 'instagramIcon.png',
        },
    ],
    
}


export const STATE = {
    Get
}

function Get( entity ) {

    return _state[entity];

}