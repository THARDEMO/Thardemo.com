
function observeElements( query, style) {
    const observer = new IntersectionObserver( entries => {
        entries.forEach( entry => {
            
            if( entry.isIntersecting) {
                entry.target.classList.add( style);
            }else {
                entry.target.classList.remove( style);
            }
        });
    });


    const elements = document.querySelectorAll( query);
    console.log( elements);

    elements.forEach( e => observer.observe( e));
}

export default observeElements;