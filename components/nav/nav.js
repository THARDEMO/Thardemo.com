import * as cManager from '../cManager.js';

export const component = {
    domID: 'Navigation',
    parentID: 'body',
    elementType: 'nav',

    preRender: () => cManager.renderComponent( component ),
    render
}

const content = [ {section: 'Welcome', title: 'About'}, {section: 'Projects', title: 'Projects' }, {section: 'Contact', title: 'Contact'}];

function render( DOM ) {
    //generate content
    content.forEach( link => {

        const { section, title } = link;
        
        const hyperLink = document.createElement( 'a');
        hyperLink.href = '#' + section;
        hyperLink.innerHTML = `
            <h3 class="text--NAV">${title}</h3>
        `;

        DOM.append( hyperLink);
    })

    //assign scroll behavior
    addEventListener( 'wheel', ( e ) => {
        if( e.deltaY < 0) DOM.classList.remove( 'hidden--NAV');
        if( e.deltaY > 0) DOM.classList.add( 'hidden--NAV');
    });
}