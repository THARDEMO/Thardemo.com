import { PubSub } from "../../logic/pubsub.js";
import * as cManager from '../cManager.js';

const IM = [ 'Developer & Designer _', 'Greetings My Name is _'];
// const DOM = document.querySelector( '.generative--Heading');

export const component = {
    domID: 'curtain',
    parentID: 'body',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component),
    render
}


// export function curtain() {
function render( parentDOM ) {
    parentDOM.classList.add( 'init--AppCurtain');
    parentDOM.innerHTML = `<h3 class="gradient--Text FFdeg--green generative--Heading"></h3>`

    const DOM = parentDOM.querySelector( '.generative--Heading');

    // console.log( 'curtain');

    let I = 0;
    let currentMessage = 0;
    let pause = 0;
    const interval = setInterval(() => {
        
        if( I === 0) {
            if( pause != 5) {
                pause++;
                return
            }
            pause = 0;
            

            DOM.innerHTML = '';
            [ ...IM[currentMessage]].map( char => `<span class="hiddenLetter">${char}</span>`).forEach( node => DOM.innerHTML += node);
        }

        const characters = parentDOM.querySelectorAll( 'h3 span');
        const totalIterations = IM[ currentMessage].length * 2;
        const middle = Math.floor(totalIterations / 2)

        if( I === middle) {

            if( pause != 16) {
                pause++
                return
            } 

            pause = 0;
        }
        
        //ADD CHARS
        if( I < middle ) characters[I].classList.toggle( 'hiddenLetter');
        
        //REMOVE CHARS
        if( I > middle ) {
            const VC = parentDOM.querySelectorAll( 'h3 span:not(.hiddenLetter)');
            VC[VC.length - 1].classList.toggle( 'hiddenLetter');
        }

        //BREAK INTERVAL & REMOVE CURTAIN
        if( I === totalIterations && currentMessage === IM.length - 1) {

            clearInterval( interval);
            
            const CURTAIN = document.querySelector( '.init--AppCurtain');
            CURTAIN.classList.add( 'Utility--MoveUp');
            
            removeCurtain( CURTAIN);

            return
        }
        
        //NEXT MESSAGE
        if( I === totalIterations) {  
            currentMessage++;
            I = 0;
            return
        }
        

        I++;
    }, 50);
}

function removeCurtain( ref) {
    console.log( 'starting timeout')
    setTimeout(() => {
        console.log( 'removing curtain');
        ref.remove();

    }, 5000)
}



