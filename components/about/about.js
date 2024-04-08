import * as cManager from '../cManager.js';
import { STATE } from '../../logic/state.js';
import { OBSERVER } from '../../identity/observer.js';

const copywrite = STATE.Get( 'about');

export const component = {
    domID: 'aboutBox',
    parentID: 'wrapper',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component ),
    render
}

//globals
let currentContent = 0;
const getBlob = () => document.querySelector( '.nextView');

let windowWidth = window.innerWidth;
let currentView =  windowWidth > 650 ? 'Movement' : 'Static'

function render( DOM ) {

    DOM.classList.add( 'aboutPage');
    DOM.classList.add( 'revealMe--onsight');

    DOM.innerHTML = `
        <div class="titleContainer"></div>
        <div class="textContainer"></div>
        <p class="pageCounter">1 / 3</p>

        <span class="revealer topAligned"></span>
        <span class="revealer bottomAligned"></span>
    `;

    OBSERVER.observeElements( [DOM], 'observing--element');

    updateContent( currentContent);

    const changeView = document.createElement( 'div');
    changeView.classList.add( 'nextView');
    changeView.classList.add( 'hideDot');
    changeView.textContent = '»';
    DOM.append( changeView);
    
    let currentBlob = windowWidth > 650 ? movementBlob : staticBlob
    currentBlob( DOM );
    
    window.onresize = () =>  {
        windowWidth = window.innerWidth;
        //LARGE TO SMALL
        if( windowWidth < 650 && currentView === 'Movement'){
            currentView = 'Static';
            staticBlob( DOM );
        }   
        //SMALL TO LARGE
        if( windowWidth > 650 && currentView === 'Static')
        {
            currentView = 'Movement';
            movementBlob( DOM );
        }
    }
} 

function movementBlob( DOM ) {
    
    if( document.querySelector( '.staticButton')) {document.querySelector( '.staticButton').remove();}

    DOM.addEventListener( 'mouseenter', () => {
        
        const target = getBlob();
        
        DOM.onpointermove = event => {

            target.classList.remove( 'hideDot');
            target.classList.add( 'showDot');

            const { clientX, clientY } = event;

            target.animate({
                left: `${clientX - 50}px`,
                top: `${clientY - 95}px`
            }, { duration: 500, fill: "forwards"});

        }

        let timeoutID = 0;
        DOM.onmousedown = () => {

            target.id = 'holding-blob';
            timeoutID = setTimeout(() => {

                currentContent += 1
                if( currentContent > copywrite.length - 1) currentContent = 0;
                console.log( currentContent);
                updateContent( currentContent);
            }, 1000);
        };

        DOM.onmouseup = () => {
            target.removeAttribute( 'id');
            clearTimeout( timeoutID);
        }
        
    })

    DOM.addEventListener( 'mouseleave', () => {
        document.querySelector( '.nextView').classList.remove( 'showDot');
        document.querySelector( '.nextView').classList.add( 'hideDot');
    })

}

function staticBlob( DOM ) {
    const mobileButton = document.createElement( 'div');
    mobileButton.classList.add( 'staticButton');
    mobileButton.textContent = '»';
    DOM.append( mobileButton);


    mobileButton.onclick = () => {
        currentContent += 1
        if( currentContent > copywrite.length - 1) currentContent = 0;
        console.log( currentContent);
        updateContent( currentContent);
    }

}

function updateContent( contentIndex) {

    //START revealer
    const duration = 500;
    const revealer = document.querySelectorAll( '.revealer');
    revealer.forEach( R => {
        R.animate({
            height: '50%',
        }, { duration: duration, fill: "forwards", animationTimingFunction: 'ease-in-out'});
    })


    const timeoutID = setTimeout(() => {
        const content = copywrite[contentIndex];
    
        const titleContainer = document.querySelector( '.titleContainer');
        titleContainer.innerHTML = `<h1 class="${content.class} showContent">${content['title']}</h1>`;
    
        const textContainer = document.querySelector( '.textContainer');
        textContainer.innerHTML = '';

        textContainer.innerHTML += `<h3>${content['message'].title}</h3>`;
        content['message'].content.forEach( p => textContainer.innerHTML += `<p>${p}</p>`)

        document.querySelector( '.pageCounter').textContent = `${contentIndex + 1} / ${copywrite.length}`;

        clearTimeout( timeoutID);
        const removeRevealer = setTimeout(() => {
            revealer.forEach( R => {
                R.animate({
                    height: '0%',
                }, { duration: duration, fill: "forwards", animationTimingFunction: 'ease-in-out'});
            });

            clearTimeout( removeRevealer);
        },(duration / 2)) 

    }, duration);



}
