//Metodo fetch() para buscar o arquivo dados.json ou qualquer API, transformando o resultado em um obejeto usando o metodo response.json

fetch('dados.json')
.then(response => response.json() )
.then(corpo => {

    document.getElementById('nomeR').innerHTML = corpo.rock.name;
    document.getElementById('discoR').innerHTML = corpo.rock.album;
    document.getElementById('estiloR').innerHTML = corpo.rock.style;
    document.getElementById('precoR').innerHTML = corpo.rock.price;
    document.getElementById('imagemR').innerHTML = corpo.rock.image;

    document.getElementById('nomeS').innerHTML = corpo.samba.name;
    document.getElementById('discoS').innerHTML = corpo.samba.album;
    document.getElementById('estiloS').innerHTML = corpo.samba.style;
    document.getElementById('precoS').innerHTML = corpo.samba.price;
    document.getElementById('imagemS').innerHTML = corpo.samba.image;

    document.getElementById('nomeM').innerHTML = corpo.MPB.name;
    document.getElementById('discoM').innerHTML = corpo.MPB.album;
    document.getElementById('estiloM').innerHTML = corpo.MPB.style;
    document.getElementById('precoM').innerHTML = corpo.MPB.price;
    document.getElementById('imagemM').innerHTML = corpo.MPB.image;
    
});