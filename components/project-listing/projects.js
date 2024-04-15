// import observeElements from "../../logic/observer.js";
import { STATE } from "../../logic/state.js";
import * as cManager from '../cManager.js';
import { OBSERVER } from "../../identity/observer.js";
import { PubSub } from "../../logic/pubsub.js";
import { activateDrape } from "../../identity/activateDrape.js";

// const path = 'https://www.thardemo.com';
const path = window.location.origin;
const projects = STATE.Get( 'projects');

export const component = {
    domID: 'Projects',
    parentID: 'wrapper',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component),
    render,
}

function render( DOM ) {

    DOM.classList.add( 'Projects');
    DOM.innerHTML = `<h1>Projects</h1>`;

    const ProjectsContainer = document.createElement( 'div');
    ProjectsContainer.classList.add( 'projectsContainer');

    let nodes = [];    
    for( const project of projects) {

        const container = document.createElement( 'a');
        container.href = `${path}/project?title=${project['title']}`;
        activateDrape( container, container.href)
        // container.onclick = ( e ) => {
        //     e.preventDefault();

        //     PubSub.publish
        //     ({
        //         event: 'DRAPE::open',
        //         detail: container.href
        //     })
        // }
        // container.target = '_blank';
        
        const projectDiv = document.createElement( 'div');
        projectDiv.classList.add( 'project');
        projectDiv.classList.add( 'observeProject');
        projectDiv.innerHTML = `
            <h2>${project['title']}</h2>
            <div class="actions"><div>
        `;
        nodes.push( projectDiv);

        container.append( projectDiv);
        ProjectsContainer.append( container);
    }

    DOM.append( ProjectsContainer);

    OBSERVER.observeElements( nodes, 'observing--project');
}   