import * as cManager from '../cManager.js';

export const component = { 
    domID: 'Landing',
    parentID: 'wrapper',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component ),
    render
}


function render( DOM ) {

    DOM.classList.add( 'LandingPage');
    DOM.innerHTML = `
        <aside>
            <h4 class="vertical--text">Web Developer<br> & Designer</h4>
        </aside>
        
        <h1>Teo<br>Hardemo</h1>
        <div class="remindPeopletoScroll"><p>SCROLL</p></div>
        
        <div class="movementBlob bigBlob blobFilters"></div>
        <div class="movementBlob smallBlob blobFilters"></div>
        <div class="movementBlob staticBlob blobFilters"></div>
    `;


}

