import "bootstrap";
import "./style.css";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dominios = ['es', 'com', 'io', 'net'];
  
// let mixarray = (arr) => {return Math.floor(Math.random()*arr.length);}
  
// let generador = pronoun[mixarray(pronoun)]+adj[mixarray(adj)]+noun[mixarray(noun)]+"."+dominios[mixarray(dominios)];

let generador = [];

for (let i of pronoun){
    for (let j of adj){
        for (let k of noun){
            for (let l of dominios){
                generador.push(i+j+k+"."+l);
            }
        }
    }
}

const list = generador.join("\n");

document.getElementById("domain").innerText = list;
