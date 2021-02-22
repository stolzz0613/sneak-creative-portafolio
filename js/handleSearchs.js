function search(term){
    getImages('&query=' + term);
    document.getElementById('grid').scrollIntoView();
}