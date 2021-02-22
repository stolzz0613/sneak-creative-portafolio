const apiURL = 'https://api.unsplash.com/photos/random/?count=16&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d';

const getImages = async(term) => {
    const response = await fetch(apiURL + term);
    if (response.status === 200){
        response.json().then((data) => {
            generateImages(data, term)
            return data
        });
    } else {
        let data=[]
        generateImages(data, term)
        console.log('There was an error trying to get the images');
    }
};

const generateImages = (data) => {
    document.getElementById('grid').innerHTML = '';
    if (data.length != 0){
        handleError('hide');
        for (let i = 0; i < data.length; i++){
            var div = document.createElement('div');
            var image = document.createElement('img');
            image.src = data[i].urls.thumb;
            div.classList.add('grid__image');
            div.appendChild(image);
            document.getElementById('grid').appendChild(div);
        }
    } else {
        handleError('show');
    }

    document.getElementById('grid').scrollIntoView();
};

function handleError(action){
    var errorText = document.getElementById('errorText');
    console.log(action)
    if (action == 'show'){
        errorText.removeAttribute('hidden');
    } else {
        errorText.setAttribute('hidden', '');
    }
};

window.onload = function(){
    getImages('');
};