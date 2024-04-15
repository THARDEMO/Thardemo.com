import { PubSub } from "../logic/pubsub.js";

export const activateDrape = ( DOM, endpoint ) => {

    DOM.onclick = ( e ) => {
        e.preventDefault();

        PubSub.publish
        ({
            event: 'DRAPE::open',
            detail: endpoint
        })
    }

}