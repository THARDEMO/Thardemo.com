import * as cManager from '../cManager.js';
import { STATE } from '../../logic/state.js';
import { OBSERVER } from '../../identity/observer.js';
import ClassWatcher from "../../logic/classWatcher.js";



export const component = {
    domID: 'Welcome',
    parentID: 'wrapper',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component ),
    render
}

function render( DOM ) {

    DOM.classList.add( 'observe--Welcome');

    const BlackBlob = document.createElement( 'div')
    BlackBlob.classList.add( 'welcomeBlob--Fixed');
    DOM.append( BlackBlob);

    DOM.innerHTML += `
        <div class="gridContainer--welcome">
            <img src="./media/images/portfolio_one.webp" alt="firstImage" class="imageOne">
            
            <aside class="firstSection">
                <h2>The Person behind the Keys</h2>
                
                <p>Hello and welcome! My name is Teo Hardemo and I am a student of Malmö University studying towards a bachelor's degree in Web Development & Design.</p>
                <p>You are currently viewing my online portfolio, which has been crafted to show of exactly what I am capable of creating.</p>
                <p>Continue scrolling and find out everything I have to offer!</p>
            </aside>
        </div>
        <div class="LinkTo">
                <h2>Other than programming<br>I also Draw!</h2>
                <a href="https://www.artstation.com/lazy_bandito" target="_blank">Check it out Here</a>
        </div>
    `;

    const experienceContainer = document.createElement( 'div');
    experienceContainer.classList.add( 'gridContainer--welcome');

    const experienceAside = document.createElement( 'aside');
    experienceAside.classList.add( 'flex--experience');

    const listContainer = document.createElement( 'ul');
    listContainer.classList.add( 'experienceList');


    // console.log( listContainer);
    experienceAside.innerHTML = '<h2>My Experience</h2>';
    STATE.Get( 'experience').forEach( ex => listInstance( listContainer, ex))

    experienceAside.append( listContainer);
    experienceContainer.append( experienceAside);
    experienceContainer.innerHTML += '<img src="./media/images/portfolio_two.webp" alt="secondImage" class="imageTwo">';
    DOM.append( experienceContainer);


    OBSERVER.observeElements( [DOM], 'observing--Welcome');
    const observeWelcome= new ClassWatcher( DOM, 'observing--Welcome', showBlob, hideBlob);

    function showBlob() { document.querySelector( '.welcomeBlob--Fixed').classList.add( 'welcomeBlob--showing')}
    function hideBlob() { document.querySelector( '.welcomeBlob--Fixed').classList.remove( 'welcomeBlob--showing')}
}

function listInstance( listContainer, ex ) {

    const li = document.createElement( 'li');
    
    let roleElement = `<p>${ex['role']}</p>`;
    if( ex.link) roleElement = `<a href="${ex['link']}" target="_blank"><p class="arrowLink">${ex['role']}</p></a>`

    li.innerHTML = `
        <h3>${ex['where']}<span class="timeperiod--experience">( ${ex['year']} )</span></h3>
        ${roleElement}
    `;

    listContainer.append( li);
}
