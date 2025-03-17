import "bootstrap";
import "./style.css";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dominios = ['es', 'com', 'io', 'net'];

const NewDomains = [];

// GenerateDomain will generate the domains based of the arrays above and push them into a new array
const GenerateDomain = (arr) =>{
    for (let i of pronoun){
        for (let j of adj){
            for (let k of noun){
                for (let l of dominios){
                    arr.push(i+j+k+"."+l);
                }
            }
        }
    }
    return arr;
}

const esDomains = [];
const comDomains = [];
const ioDomains = [];
const netDomains = [];

// groupDomains will group the domains based on the domain type of AllDomainsMixed array
// AllDomainsMixed is the array of domains generated on the GenerateDomain function

const groupDomains = (AllDomainsMixed) => {
    for (let dom of AllDomainsMixed){
        if (dom.includes("es")){
            esDomains.push(dom);
        }
        if (dom.includes("com")){
            comDomains.push(dom);
        }
        if (dom.includes("io")){
            ioDomains.push(dom);
        }
        if (dom.includes("net")){
            netDomains.push(dom);
        }
    }
    return (esDomains, comDomains, ioDomains, netDomains);
}

// We return the new arrays after filtered by domain type
groupDomains(GenerateDomain(NewDomains));

// list fuction returns the generated domains as a string in a new line for each element
const list = domainGroup => domainGroup.join("\n");

// We set the innerText to print the generated domains on the HTML grouped and listed
document.getElementById("Spanish").innerText = list(esDomains);
document.getElementById("Commerce").innerText = list(comDomains);
document.getElementById("IndianOcean").innerText = list(ioDomains);
document.getElementById("NeT").innerText = list(netDomains);
