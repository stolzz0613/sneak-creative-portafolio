
function handleSearchBar(){
    var searchDiv = document.getElementById('search');
    if (searchDiv.attributes.getNamedItem('state').nodeValue == 'false'){
        searchDiv.attributes.getNamedItem('state').value = 'true';
        searchDiv.removeAttribute('hidden');
        document.getElementById('term').focus();
    } else {
        searchDiv.attributes.getNamedItem('state').value = 'false';
        searchDiv.setAttribute('hidden', '');
    }
}

function makeSearch(e){
    e.preventDefault();
    var term = document.getElementById('term').value;
    search(term);
}