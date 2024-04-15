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
            id: 'ClassCode',
            endpoint: 'https://www.thardemo.com/app/classcode/',
            tags: ['JavaScript', 'Php', 'Team Project', 'First App', 'Desktop'],
            headerIMG: './media/images/ClassCode.png',
            description: 'ClassCode was created as the final project during the first year of my degree. It was a team project made by me and two other talented classmates. ClassCode is a forum very similar to the well known StackOverflow, only with the focus being access by our class. \n The users were able to ask and answer questions & problems regarding programming. You were able to share your code in a formatted manor and create threads where the classmates could comment and give their solutions and advice. ClassCode was designed and developed during a 5 week period',
            secondaryIMG: ['./media/images/ClassCode2.png', './media/images/ClassCode3.png'],
            blog: [
                {
                    header: 'The first project',
                    paragraphs: [
                        'ClassCode was the first opportunity I got to create something that I could call my own. During the creation we had no guides or instructions on how the project was to be built. The only requirements were that it contained an API and was built using asynchronous JavaScript. This project was the culmination of the experience and knowledge I had gained from my first year at university.',
                        'Our idea was to create a forum that had the same purpose as Stack Overflow but the difference being to help the students from our programme. We had a goal that the threads could be shared through a link which was a challenge for us at the time. A goal was also to be able to share code snippets that were formatted according to a text editor. It was an ambitious project for us at the time, but we were driven to make it possible.',
                        'It was a big change from the tasks I had gotten before as assignments in the different programming courses, this time we were supposed to come up with the solutions and ideas all by ourselves. Though I found this to be the best way for me to learn. Everything just clicked with this project in that I found out that almost everything can be solved if you give it enough time and effort.  '
                    ]
                },
                {
                    header: 'My Role',
                    paragraphs: [
                        'My role in the project was mainly front-end development. My focus was primarily on creating each threads page. I focused on creating a way to include code snippets into each thread’s body. I remember I found an external library that converted strings to formatted code and assigned styling. This was simple enough to include but the challenge arose when I had to identify which text in a string that was supposed to be formatted to code. I came up with a system that encapsulated the target of the string with special characters and later used a regex expression to locate it in the string.',
                        'Other than that, I mostly worked on the websites design and the comment and liking functionality. But the project was a combination of all of the three group members skillsets and ideas. And we all helped each other on different parts of the application.',
                    ]
                },
                {
                    header: 'Looking Back',
                    paragraphs: [
                        'The experience and knowledge I gained whilst creating ClassCode was immense, but looking back I can also see how extremely far I have come. When I look and analyze the code that was written I would describe it as clumsy and compare it to the wild west. Something I’ve noticed is vital in creating functional and adaptable web applications is that having a defined structure and system makes your world a thousand times easier whilst in the development phase. And a structure was not something we could even begin to think about during the creation of ClassCode.',
                        'This resulted in a hectic development phase where we had to adapt to each other’s different styles of programming and creating functions. We were lucky to have such good chemistry within the group and we were always able to adapt. But as a result, the code started resembling something created in a scrapbook. But you live and you learn and ever since I’ve always had this in mind whilst creating new projects.',
                        'But all in all, ClassCode will always have a special place in my heart since it was the first website I could look at and say, I created this. And even though if I revisited the project now, I would change many things. But with the abilities I had when creating ClassCode I’m still quite impressed we managed to pull it off.',
                    ]
                }
            ],
            time: 'SPRING 2023'
        }, 
        {
            title: 'Tipsy',
            id: 'Tipsy',
            endpoint: 'https://thardemo.com/app/tipsy/',
            headerIMG: './media/images/Tipsy.png',
            tags: ['React', 'Php', 'Mobile', 'Party App'],
            description: 'Tipsy is the one and only tipping application that makes every party a fun and interactive experience where you’ll be tested on how well you know the attendees. It’s an app that you create events and invite your friends to, then the predictions start. Everyone can create questions within the following categories, VS, Most Likely and True or False. The participants then place their bets on the created questions. When the party is over the votes are opened and everyone proceeds to vote on what actually happened during the party. When the votes are in and everyone’s points are calculated, and a winner is crowned!',
            secondaryIMG: ['./media/images/Tipsy2.png'],
            blog: [
                {
                    header: 'Learning React',
                    paragraphs: [
                        'When I started developing this project, I wanted to challenge myself with something new and exciting. For the longest time I had wanted to try out developing a web application with the JavaScript framework React. Tipsy felt like the perfect project to learn React through because of the scale and the functionality behind the app. Tipsy is a project where you through created events generate questions about what the attendees think will happen. Everyone places their bets before the event takes place. When the event has concluded, the voting is initiated. Through the votes we validate what is the correct answer through majority vote. And then the points are distributed, enabling a winner to be crowned. It is an app where me and my partner concluded that many aspects of the app could be created through components, which enables a quick and fluid workflow.',
                        'React is perfectly suited to a component-based app since it functions through returning html through component functions. That meant that we could for instance create a component for each element in the app. Or that was our plan. Since this was our first time using and creating a react-based application we had to overcome many hurdles along the way. This meant that during the small timeframe we had to work on Tipsy we constantly found out new and more streamlined ways to extract the full potential that React offers.',
                    ]
                },
                {
                    header: 'The Hurdles',
                    paragraphs: [
                        'As previously stated, we had to overcome many hurdles during the development of Tipsy. Not only did React introduce many new concepts that diverted from the usual workflow from vanilla JavaScript, but we also had to adapt to this entirely new way to utilize the built-in hooks and routing. We spent lots of time trying to define how the app should operate. We started looking into how we could create a multipage react application but quickly concluded that our first project in react should focus on a “single page” application.',
                        'Connecting the app to our specifically created API proved more difficult than anticipated, since React is structured like something I would describe as a tree. The components are all branches of the tree and each one returns html that when we finally reach the roots, we have combined everything, and the app is constructed. This made creating an asynchronous function more challenging since if there even is one async function, everything had to be asynchronous. Our solution was found within the useEffect and useState hooks in order to mitigate the promise hell we otherwise would experience. Using it wasn’t a challenge but finding the solution on our own was really fun and I learnt a lot from it.',
                    ]
                },
                {
                    header: 'What Comes Next?',
                    paragraphs: [
                        'I now have a much better understanding of React and through having this experience in Tipsy. The next project I create using react will be much better structured. I hope to create a more maintainable project created with react where this new skillset really will develop, and I can start to utilize and come up with smart new solutions to the problems and hurdles I phased during the creation of Tipsy.',
                    ]
                }
            ],
            time: 'WINTER 2023',
        }, 
        {
            title: 'Egg Timer',
            id: 'EggTimer',
            endpoint: 'https://www.thardemo.com/app/eggtimer/',
            headerIMG: './media/images/EggTimer.png',
            tags: ['JavaScript', 'Design', 'Mobile', 'SVG'],
            description: 'The app was created for the person that wants eggcelent eggs each and every time. Egg Timer allows you to customize and calculate the perfect cooking time for your egg based on your inputs. Choose how you want your egg, how large it is and if it’s cold or room temperature and let the timer do the rest! ',
            secondaryIMG: ['./media/images/EggTimer2.png'],
            blog: [
                {
                    header: 'SVG',
                    paragraphs: [
                        'During the creation of the project my biggest challenge was to create the circular timeline when the timer was active. My goal was to create an animated circle that became less and less filled as the time went down. And I wanted it to be smooth, not go down in small percentages each second.',
                        'My first iterations were created through CSS where I played around with gradients and borders, but I found it wasn’t accurate enough to create the animation connected to the timer. Having the animation adaptable to a timer proved challenging if I were to create it purely through CSS. I then decided to turn my attention towards scalable vector graphics, or as it’s usually called SVG’s. It was new and unexplored ground for me at the time, so it was quite exiting to play around with what’s possible with the format.',
                        'I started doing some research trying to understand how you wrote the markup that formats an SVG. It proved to be remarkably easy to create the shape I was looking for, only a circle with a specified radius and boom. It started to resemble a timer already. But the challenge arose when I started to try to fill the circle according to a percentage. I was able to calculate the percentage the timer had left through the formula ((current time / original time) * 100). I then calculated the circumference of the entire circle. The next step was using the stroke-dasharray and stroke-dashoffset properties that are animatable. These are the vital parts in the timer and how it works. By defining the stroke-dasharray as the entire circumference of the circle element you are able to calculate the offset. The offset is where the stroke will start within the circle. Through using the following formula, I could calculate the exact point on the circle where the dash-offset was supposed to start from, (circumference * (100 - percentage) / 100). Now I had a way to calculate the exact position of the stroke according to the passed time, the only step left was to create an interval that was called every 0.1 of a second that calculated the current position of the SVG stroke.',
                        'Overall, I really enjoyed the process of finding out and trying out different solutions to a problem and having to come up with new and exciting ideas that could satisfy my vision. I could have settled on the sloppy and inaccurate CSS solution, but I chose to challenge myself and I’m very glad I did.',
                    ]
                }
            ],
            time: 'AUTUMN 2023',

        },
        {
            title: 'Life Journey Visualization',
            id: 'LifeJourney',
            endpoint: 'https://www.thardemo.com/app/Life%20Journey/',
            headerIMG: './media/images/LifeJourney.png',
            tags: ['D3', 'Data Visualization', 'SVG', 'Desktop'],
            description: 'The app was created for the person that wants eggcelent eggs each and every time. Egg Timer allows you to customize and calculate the perfect cooking time for your egg based on your inputs. Choose how you want your egg, how large it is and if it’s cold or room temperature and let the timer do the rest! ',
            secondaryIMG: ['./media/images/LifeJourneyGIF.gif'],
            blog: [
                {
                    header: 'SVG',
                    paragraphs: [
                        'During the creation of the project my biggest challenge was to create the circular timeline when the timer was active. My goal was to create an animated circle that became less and less filled as the time went down. And I wanted it to be smooth, not go down in small percentages each second.',
                        'My first iterations were created through CSS where I played around with gradients and borders, but I found it wasn’t accurate enough to create the animation connected to the timer. Having the animation adaptable to a timer proved challenging if I were to create it purely through CSS. I then decided to turn my attention towards scalable vector graphics, or as it’s usually called SVG’s. It was new and unexplored ground for me at the time, so it was quite exiting to play around with what’s possible with the format.',
                        'I started doing some research trying to understand how you wrote the markup that formats an SVG. It proved to be remarkably easy to create the shape I was looking for, only a circle with a specified radius and boom. It started to resemble a timer already. But the challenge arose when I started to try to fill the circle according to a percentage. I was able to calculate the percentage the timer had left through the formula ((current time / original time) * 100). I then calculated the circumference of the entire circle. The next step was using the stroke-dasharray and stroke-dashoffset properties that are animatable. These are the vital parts in the timer and how it works. By defining the stroke-dasharray as the entire circumference of the circle element you are able to calculate the offset. The offset is where the stroke will start within the circle. Through using the following formula, I could calculate the exact point on the circle where the dash-offset was supposed to start from, (circumference * (100 - percentage) / 100). Now I had a way to calculate the exact position of the stroke according to the passed time, the only step left was to create an interval that was called every 0.1 of a second that calculated the current position of the SVG stroke.',
                        'Overall, I really enjoyed the process of finding out and trying out different solutions to a problem and having to come up with new and exciting ideas that could satisfy my vision. I could have settled on the sloppy and inaccurate CSS solution, but I chose to challenge myself and I’m very glad I did.',
                    ]
                }
            ],
            time: 'SPRING 2024',

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