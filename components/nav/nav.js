import * as cManager from '../cManager.js';

export const component = {
    domID: 'Navigation',
    parentID: 'body',
    elementType: 'nav',

    page: null,

    preRender: ( page ) => {
        if( page ) component.page = page;
        cManager.renderComponent( component )
    },
    render
}

const contentMain = [ {section: 'Welcome', title: 'About'}, {section: 'Projects', title: 'Projects' }, {section: 'Contact', title: 'Contact'}];
const contentPage = [{ section: 'Home', title: 'Home'}, {section: 'Blog', title: 'Blog'}, {section: 'Contact', title: 'Contact'}]

function render( DOM ) {

    const content = component.page ? contentPage : contentMain;

    //generate content
    content.forEach( link => {

        const { section, title } = link;
        
        const hyperLink = document.createElement( 'a');
        hyperLink.href = '#' + section;
        if( section === 'Home') hyperLink.href = window.origin;
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