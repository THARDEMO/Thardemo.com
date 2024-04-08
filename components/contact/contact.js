import ClassWatcher from "../../logic/classWatcher.js";
import { OBSERVER } from "../../identity/observer.js";
import * as cManager from '../cManager.js';
import { STATE } from "../../logic/state.js";

export const component = {
    domID: 'Contact',
    parentID: 'wrapper',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component ),
    render,
}


const links = STATE.Get( 'links');

// export default function contact() 
function render( DOM ) {

    DOM.classList.add( 'Contact');
    DOM.classList.add( 'revealMe--onsight');

    DOM.innerHTML = `
        <div class="LetsConnect">
            <h1>Let's <br>Connect</h1>
            <h4>teo.hardemo@gmail.com</h4>
            <p>+46 73 340 82 50</p>
        </div>

        <div class="contactInfo">
            <ul class="links"></ul>
        </div>

        <div class="lastBlob"></div>    
    `;


    // const CONTACT = document.querySelector( '#Contact');
    OBSERVER.observeElements( [DOM], 'observing--element');
    let onView = new ClassWatcher( DOM, 'observing--element', addStyle, removeStyle);

    const linkDOM = DOM.querySelector( '.links');
    links.forEach( link => {

        const element = document.createElement( 'li');
        element.innerHTML = ` 
            <a href="${link['link']}" target="_blank" class="${link['type']}">
                <img src=" ./media/images/${link['imgPath']}"/>
            </a>
        `;

        linkDOM.append( element);
    });
    
}

function addStyle() {
    document.body.style.background = 'var(--MainTxt)';
}
function removeStyle() {
    document.body.style.background = null;
}

// <section id="Contact" class="Contact revealMe--onsight">
// <div class="LetsConnect">
//     <h1>Let's <br>Connect</h1>
//     <h4>teo.hardemo@gmail.com</h4>
//     <p>+46 73 340 82 50</p>
// </div>

// <div class="contactInfo">
//     <ul class="links"></ul>
// </div>

// <div class="lastBlob"></div>
// </section>

