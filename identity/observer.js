function observeElements( nodeList, style) {
    const observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
            
            if( entry.isIntersecting) {
                entry.target.classList.add( style);
            }else {
                entry.target.classList.remove( style);
            }
        });
    });


    // const elements = document.querySelectorAll( query);
    // console.log( elements);

    nodeList.forEach( e => observer.observe( e));
}

export const OBSERVER = {
    observeElements,
};