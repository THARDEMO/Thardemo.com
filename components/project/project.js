import { STATE } from '../../logic/state.js';
import { PubSub } from '../../logic/pubsub.js';
import * as cManager from '../cManager.js';
import { OBSERVER } from '../../identity/observer.js';
import { activateDrape } from '../../identity/activateDrape.js';


import { component as contact } from '../contact/contact.js';
import { component as nav } from '../nav/nav.js';
import { component as drape } from '../drape/drape.js';

export const component = {
    domID: 'ProjectPage',
    parentID: 'wrapper',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component ),
    render
}

function render( DOM ) {

    drape.preRender()
    PubSub.publish
    ({
        event: 'Drape::close',
        detail: ':)'
    });
    
    const urlParams = new URLSearchParams(window.location.search);
    const projectTitle = urlParams.get('title');

    const PROJECT = STATE.Get( 'projects').find( p => p.title === projectTitle);

    if( !PROJECT) {
        console.log(' no project was found 404');
        return
    }

    DOM.innerHTML = `
        <div class="headingProject">

            <img src="${PROJECT.headerIMG}"></img>
           <div class="sideDivider">  
                <div class="hidden-element"></div>              
                <div>
                    <h1>${PROJECT.title}</h1>
                    <ul class="tagContainer"></ul>
                </div>
                <p class="yearStamp">${PROJECT.time}</p>

           </div>
        </div>

       <div class="descriptiveSection">
            <p>${PROJECT.description}</p>
       </div>

       <div class="IMGcontainer"></div>

       <article id="Blog" class="blog"></article>

       <a href="${PROJECT.endpoint}" target="_blank" style="text-align:center;text-decoration:underline"><p>Explore ${PROJECT.title} here.</p></a>

       <div class="otherProjects">
            <h2>Other Projects</h2>
            <div class="secondaryProjectContainer"></div>
       </div>

    `; 

    PROJECT['tags']?.forEach( tag => {
        const li = document.createElement( 'li');
        li.innerHTML = `<p>${tag}</p>`;
        DOM.querySelector( '.tagContainer').append( li);
    })

    PROJECT['secondaryIMG']?.forEach( imgsrc => {
        console.log( imgsrc)
        DOM.querySelector( '.IMGcontainer').innerHTML += `<img src="${imgsrc}"></img>`
    })

    PROJECT['blog']?.forEach( section => {

        const blogSection = DOM.querySelector( '#Blog');
        blogSection.classList.add( 'blogSection');
        blogSection.innerHTML += `<h3 class="blogH3">${section.header}</h3>`;

        section['paragraphs'].forEach( p => {
            blogSection.innerHTML += `<p>${p}</p>`
        });

    
        // DOM.querySelector( '#Blog').append( blogSection);
    })


    let otherProjects = STATE.Get( 'projects').filter( p => p.title !== PROJECT.title);
    let displayProjects = [];
    while( displayProjects.length < 3 ) {
        const randomIdx = Math.floor(Math.random() * otherProjects.length);
        displayProjects.push( otherProjects[randomIdx]);
        otherProjects.splice( randomIdx, 1);
    }

    displayProjects.forEach( p => {

        const link = document.createElement( 'a');
        link.href = `${window.location.origin}/project?title=${p.title}`;
        link.innerHTML = `
            <img src="${p.headerIMG}"/>
            <div class="smallTitle">
                <p>${p.title}</p>
            </div>
        `;

        DOM.querySelector( '.secondaryProjectContainer').append( link);
        activateDrape( link, link.href );
    })

    OBSERVER.observeElements( DOM.querySelectorAll( '.blogSection'), 'observing--blogSection');

    contact.preRender()
    nav.preRender( 'home');
}