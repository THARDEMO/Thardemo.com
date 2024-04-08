import ClassWatcher from "../../logic/classWatcher.js";
import { OBSERVER } from "../../identity/observer.js";
import { STATE } from '../../logic/state.js';
import * as cManager from '../cManager.js';


export const component = {
    domID: 'Stacks',
    parentID: 'wrapper',
    elementType: 'section',

    preRender: () => cManager.renderComponent( component ),
    render,
}

function render( DOM ) {
    DOM.classList.add( 'Stacks');
    DOM.innerHTML = `
        <h2>Constantly Adding Stacks</h2>
        <div class="grid--stacks"></div>
    `;
    // const gridStacks = document.createElement( 'div');
    // gridStacks.classList.add( 'grid--stacks');
    // DOM.append( gridStacks);

    //OBSERVATIONS
    // const STACKS = document.querySelector( '.Stacks');
    // observeElements( '.Stacks', 'observing-stacks');
    OBSERVER.observeElements( [DOM], 'observing-stacks')
    const observeStacks = new ClassWatcher( DOM, 'observing-stacks', setBackground, unsetBackground); 

    renderStacks( DOM.querySelector( '.grid--stacks'));
    
}

const setBackground = () => document.body.style.background = 'var(--MainTxt)';
const unsetBackground = () => document.body.style.background = null;
const randomHeight = ( min, max ) => Math.floor( Math.random() * (max - min) + min);

const stackData = STATE.Get( 'stacks');

function renderStacks( parentDOM ) {
    // const parentDOM = document.querySelector( '.grid--stacks'); 

    let column = 1;
    let nodes = [];

    for( const [ I, stack ] of stackData.entries())
    {
        const row = I + 1;
        if( column === 4) column = 1;
        
        const stackContainer = document.createElement( 'div');
        stackContainer.classList.add( 'stack');
        stackContainer.style.animationDelay = `0.${column}s`;
        // stackContainer.style.marginTop = `${column}00px`;

        // stackContainer.style.height = randomHeight(225, 525) + 'px';
        // stackContainer.style.gridArea = `${row} / ${column}`;

        stackContainer.innerHTML = `
            <div class="stack--textcontainer">
                <h3>${stack['type']}</h3>
                <p>${stack['text']}</p>
            </div>
            <div class="stack--icon ${stack['type']}"></div> 

            `;
            // <div class="glow" style="background: ${stack['background']};"></div>
        
        parentDOM.append( stackContainer)
        nodes.push( stackContainer);
        column = column > 3 ? 1 : column += 1;
    }    

    OBSERVER.observeElements( nodes, 'observing-stack');

}