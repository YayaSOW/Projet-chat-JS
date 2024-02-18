const users=[
    {
        nom:"kiki📕",
        username:"kiki@",
        password:"passer",
        messages:[
            {text:"Slt cmmt sa vas?", date:"10/10/2024 10:00"},
            {text:"Nice Cool", date:"10/10/2024 10:01"},
            {text:"le prof est venu", date:"10/10/2024 10:03"},
            {text:"Ah tkt je vais pas faire cours Aujourd'hui", date:"10/10/2024 10:04"},
        ]
    },
    {
        nom: "Tata💪🏿",
        username:"tata",
        password:"passer",
        messages: [
            {text:"Slt Kiki", date: "10/10/2024 10:10",user:0},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Le prof est mort", date: "10/10/2024 10:10"},
            {text:"Srx?", date: "10/10/2024 10:10"},
            {text:"C'est une bonne nouvelle ca?", date: "10/10/2024 10:10"},
            {text:"oui tout le monde est content wollah", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Breukh😎👍🏾",
        username:"breukh",
        password:"passer",
        messages: [
            {text:"Slt Yaya", date: "10/10/2024 10:10"},
            {text:"Slt, tu as fais le projet js?", date: "10/10/2024 10:10"},
            {text:"OUi mais je crois que je vais avoir 0 😭", date: "10/10/2024 10:10"},
            {text:"mais traoure est foutu, tu c?", date: "10/10/2024 10:10"},
            {text:"abon pk?", date: "10/10/2024 10:10"},
            {text:"parce qu'il a eu un seul fichier 🤣", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Fatou Ndiaye ❤️🔐",
        username:"fatou",
        password:"passer",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    },
    {
        nom: "Bernadette🩸",
        username:"bernie",
        password:"passer",
        messages: [
            {text:"Slt Bro", date: "10/10/2024 10:10"},
            {text:"Slt Bro", date: "10/10/2024 10:10"},
        ]
    }
]

// console.log(users[0].messages[users[0].messages.length -1].text)

const list=document.querySelector(".list")
const messages=document.querySelector(".messages")
const messageInput=document.querySelector("textarea")
const btnSend=document.querySelector(".send")
const writting = document.querySelector(".writting");
const msgOwner = document.querySelector("#msgOwner");
const container = document.querySelector(".container");
const connexion = document.querySelector(".connexion");
//
const btnConnexion = document.querySelector(".btnConnexion");
const usernameInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");



let posUserActual = -1; //la position du contact sur lequel on a cliquer
let posConnectedUser = -1; //La position de celui qui s'est connecté

function printList() {
    list.innerHTML="";
    users.forEach(function (usr,i) {
        if (i!=posConnectedUser) {
            list.innerHTML+=`<div class="item" onclick="detailsUser(${i})">${usr.nom}</div>`;
        }
    });
}

function detailsUser(pos) {
    // console.log(pos)
    // console.log(users[pos])
    const actuelUser=users[pos]
    printMessage(actuelUser)
    //
    posUserActual=pos;
    // console.log(posUserActual)
}

function login(username,password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username===username && users[i].password===password) {
            return i;
        }
    }
    return -1;
    // let user=users.filter(u=>u.username===username && u.password===password)
}

function printMessage(actuelUser) {
    msgOwner.innerHTML=`Message de ${actuelUser.nom}`
    // messages.innerHTML=`<h2>Message de ${actuelUser.nom}</h2>`
    actuelUser.messages.forEach(function(msg){
        messages.innerHTML+=`
        <div class="message">
            <div class="text">${msg.text}</div>
            <div class="date"><span>${msg.date}</span></div>
        </div>
    `
    })
}

// console.log(new Date().toLocaleDateString())
function getCurrentDate() {
    const d=new Date()
    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
}

function isWritting() {
    writting.classList.remove("stop")
    // if (!messageInput.value.trim() ou messageInput.value.trim()=="" messageInput.value="" ) {
        // si y a rien dans le messageInput alors on affiche pas
    if (!messageInput.value.trim()) {
        writting.classList.add("stop")
    }
}

messageInput.addEventListener("input",isWritting)
//
btnConnexion.addEventListener("click",()=>{
    const username=usernameInput.value.trim();// pour enlever en mm temps les espaces
    const password=passwordInput.value.trim();
    posConnectedUser=login(username,password);
    if (posConnectedUser==-1) {
        return;
    }
    container.classList.remove("hide");
    connexion.classList.add("hide");
    printList();
})

btnSend.addEventListener('click',()=>{
    const newMessage=messageInput.value;
    // if (newMessage.trim()=="") {
    if (!newMessage.trim() || posUserActual==-1) {
        // on fait rien pcq'il n'a rien saisie ou n'a pas encore cliquer sur un utilisateur
        return;
    }

    users[posUserActual].messages.push({
        text:newMessage,
        date: getCurrentDate()
    })
    // console.log(users);
    //Actualiser les messages de l'utilisateur dans le DOM
    detailsUser(posUserActual)

    // Vider le champs de saisi
    messageInput.value="";
    isWritting()
});

//
window.onload=function(){
    container.classList.add("hide");
    // printList();
}
