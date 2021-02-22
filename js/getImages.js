const apiURL = 'https://api.unsplash.com/photos/random/?count=16&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d';

const getImages = async(term) => {
    const response = await fetch(apiURL + term);
    if (response.status === 200){
        response.json().then((data) => {
            generateImages(data, term)
            return data
        });
    } else {
        console.log('There was an error trying to get the images')
    }
}

const generateImages = (data) => {
    document.getElementById('grid').innerHTML = '';
    for (let i = 0; i < data.length; i++){
        var div = document.createElement('div');
        var image = document.createElement('img');
        image.src = data[i].urls.thumb;
        div.classList.add('grid__image');
        div.appendChild(image);
        document.getElementById('grid').appendChild(div);
    }
}

window.onload = function(){
    getImages('');
};