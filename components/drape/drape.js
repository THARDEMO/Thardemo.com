import * as cManager from '../cManager.js';
import { PubSub } from '../../logic/pubsub.js';

export const component = {
    domID: 'Drape',
    parentID: 'body',
    elementType: 'div',

    preRender: () => cManager.renderComponent( component),
    render
}

function render( DOM ) {

    PubSub.subscribe
    ({
        event: 'DRAPE::open',
        listener: ( href ) => {
            DOM.classList.add( 'Drape--open');
            
            setTimeout(() =>{
                let reload = window.location = href;

                setTimeout(() => DOM.classList.remove( 'Drape--open'), 800);
            }, 600)
        },
    });

    PubSub.subscribe
    ({
        event: 'Drape::close',
        listener: () => {
            DOM.classList.add( 'Drape--close')
            setTimeout(() => DOM.classList.remove( 'Drape--close'), 900);
        }
    })
}
