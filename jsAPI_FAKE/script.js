function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "Cristiano" && senha == "123"){
        const jogador1='{"nome":"Cristiano Ronaldo dos Santos Aveiro","idade":"39","profissao":"Jogador do Al-Narsc","imagem":"img/cr7.jpg"}';
const data = JSON.parse(jogador1);
document.getElementById("nome").innerHTML = "Nome:"+ data.nome;
document.getElementById("idade").innerHTML = "Idade: "+  data.idade + " anos";
document.getElementById("profissao").innerHTML = "Profissão: " +data.profissao;
document.getElementById("imagem").src="img/cr7.jpg";


console.log(data)


    }else if(login == "Messi" && senha == "123"){
       

const jogador2='{"nome":"Lionel Andrés Messi","idade":"35","profissao":"Jogador do PSG","imagem":"img/messi.jpg"}';
const data = JSON.parse(jogador2);
document.getElementById("nome").innerHTML = "Nome: "+data.nome;
document.getElementById("idade").innerHTML = "Idade: "+ data.idade + " anos";
document.getElementById("profissao").innerHTML = "Profissão: " + data.profissao;
document.getElementById("imagem").src="img/messi.jpg";

 


console.log(data)



    } else if(login == "Gabigol" && senha == "123"){
        const jogador3='{"nome":"Gabriel Barbosa Almeida","idade":"26","profissao":"Jogador do Flamengo","imagem":"img/gabigol.jpg"}';
const data = JSON.parse(jogador3);
document.getElementById("nome").innerHTML = "Nome: "+ data.nome;
document.getElementById("idade").innerHTML = "Idade: "+  data.idade + " anos";
document.getElementById("profissao").innerHTML = "Profissão: " +data.profissao;
document.getElementById("imagem").src="img/gabigol.jpg";


console.log(data)
        
    } else if(login == "Ibra" && senha == "123"){
        const jogador4='{"nome":"Zlatan Ibrahimović","idade":"41","profissao":"Jogador do Milar","imagem":"img/ibra.jpg"}';
const data = JSON.parse(jogador4);
document.getElementById("nome").innerHTML = "Nome: "+ data.nome;
document.getElementById("idade").innerHTML = "Idade: "+  data.idade + " anos";
document.getElementById("profissao").innerHTML = "Profissão: " +data.profissao;
document.getElementById("imagem").src="img/ibra.jpg";

console.log(data)
        
    }else if(login == "Haaland" && senha == "123"){
        const jogador5='{"nome":"Erling Braut Haaland","idade":"22","profissao":"Jogador do Manchester City","imagem":"img/halands.jpg"}';
const data = JSON.parse(jogador5);
document.getElementById("nome").innerHTML = "Nome: "+ data.nome;
document.getElementById("idade").innerHTML = "Idade: "+  data.idade + " anos";
document.getElementById("profissao").innerHTML = "Profissão: " +data.profissao;
document.getElementById("imagem").src="img/halands.jpg";

console.log(data)
        
    }else if(login == "Ronaldinho Gaucho" && senha == "123"){
        const jogador6='{"nome":"Ronaldo de Assis Moreira","idade":"42","profissao":"Ex-Jogador do Barcelona","imagem":"img/Ronaldinho.jpg"}';
const data = JSON.parse(jogador6);
document.getElementById("nome").innerHTML = "Nome: "+ data.nome;
document.getElementById("idade").innerHTML = "Idade: "+  data.idade + " anos";
document.getElementById("profissao").innerHTML = "Profissão: " +data.profissao;
document.getElementById("imagem").src="img/Ronaldinho.jpg";

console.log(data)
        
    }
    
    
    else{
        alert('Usuario não encontrado');
    }

}