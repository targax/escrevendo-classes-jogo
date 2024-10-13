class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){

        let ataque;

        if(this.tipo == "guerreiro"){
            ataque = "espada"
        } else if(this.tipo == "mago"){
            ataque = "magia"
        } else if(this.tipo == "monge"){
            ataque = "artes marciais"
        } else if(this.tipo == "ninja"){
            ataque = "uma shuriken"
        };

        console.log("o " + this.tipo + " " + this.nome + " atacou usando " + ataque);
    }
    
}

let heroi1 = new Heroi ("Sasuke", 17, "ninja");

heroi1.atacar();
