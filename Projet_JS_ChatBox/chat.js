const users=[
    {
        img:"img/k.jpg",
        nom:"Luffy👌",
        username:"luffy",
        password:"passer",
        dernier_msg:"hello",
        messages:[
            {text:"Slt Luffy", date:"9/01/2024 10:00"},
            {text:"Nice Cool", date:"15/02/2024 10:01"},
        ]
    },
    {
        img:"img/s.jpg",
        nom:"Senku🧠",
        username:"senku",
        password:"passer",
        dernier_msg:"hello",
        messages:[
            {text:"cmmt sa vas Senku?", date:"10/11/2023 10:00"},
        ]
    },
    {
        img:"img/b.jpg",
        nom:"Blue_Lock⚽",
        username:"Blue",
        password:"passer",
        dernier_msg:"hello",
        messages:[
            {text:"Slt cmmt sa vas?", date:"13/08/2023 10:00"},
            {text:"Nice Cool", date:"20/01/2024 10:01"},
            {text:"J'attends tjrs la saison 2", date:"22/01/2024 10:03"},
        ]
    },
    {
        img:"img/i.jpg",
        nom:"Ichigo 🗡️",
        username:"ichigo",
        password:"passer",
        dernier_msg:"hello",
        messages:[
            {text:"Ichigo t'a tué combien de holo ajourd'hui?", date:"30/12/2023 10:00"},
        ]
    },
    {
        img:"img/10.jpg",
        nom:"Pro ✅✅✅",
        username:"pro",
        password:"passer",
        dernier_msg:"hello",
        messages:[
            {text:"Mais Pro dit moi la technique!!!", date:"01/01/2024 10:00"},
        ]
    }
]

const chats=document.querySelector(".chats")
const messages =document.querySelector(".messages")
const textarea=document.querySelector(".textarea")
const btnSend=document.querySelector(".btnSend")
const nameOwner=document.querySelector(".nameOwner")
const writting=document.querySelector(".writting")
const home=document.querySelector(".home")
const connexion=document.querySelector(".connexion")
const userConnected=document.querySelector(".userConnected")
const searchBar=document.querySelector(".searchBar")
const userchat=document.querySelector(".userchat")
const newContact=document.querySelector("#nouveau")
const utiliateurs=document.querySelector("#utiliateurs")
//
const btnConnexion=document.querySelector("#login")
const nameInput=document.querySelector(".inputName")
const passwordInput=document.querySelector(".inputpassword")
// const img=document.querySelector("#img")


let posUserActual = -1; //la position du contact sur lequel on a cliquer
let posConnectedUser = -1; //La position de celui qui s'est connecté

newContact.addEventListener("click",()=>{
    // chats.classList.add("hide")
    connexion.style.height='max-content';
    chats.innerHTML=""
    var nouveauContact= `<div class="connexion">
    <div class="form">
        <h2 class="log">New Contact</h2>
        <div class="image">
            <label for="img"><img src="ab.png" alt="" onclick="takeImage()"></label>
            <input type="file" id="img" name="img">
        </div>
        <div class="name">
            <label for="name">Name</label>
            <div>
                <input type="text" class="inputNameR" placeholder="Enter Your Name">
            </div>
        </div>
        <div class="emai">
            <label for="text">Username</label>
            <div>
                <input type="text" class="inputName" placeholder="Enter Email">
            </div>
        </div>
        <div class="password">
            <label for="password">Password</label>
            <div>
                <input type="password" class="inputpassword" placeholder="Enter Password">
            </div>
        </div>
        <div class="login">
            <button id="enregistrer" onclick="printList()" type="submit">Enregistrer</button>
        </div>
    </div>
</div>
    `
    chats.innerHTML+=nouveauContact
})
utiliateurs.addEventListener("click",()=>{
    // console.log("bien")
    printList();
})
function takeImage() {
    console.log("cool")
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


function printList(filteredliste=users) {
    chats.innerHTML=""
    filteredliste.forEach(function (usr,i) {
        let dernierMessage = usr.messages[usr.messages.length - 1]; // Accéder au dernier message dans la liste des messages
        if (i!=posConnectedUser) {
            chats.innerHTML+=`<div class="userchat" onclick="detailsUser(${i})">
                                <img src="${usr.img}" alt="">
                                <div class="userchatinfo">
                                    <span>${usr.nom}</span>
                                    <p>${dernierMessage.text}</p>
                                </div>
                            </div>`
        }
    })
}
searchBar.addEventListener("input",()=>{
    const searchedValue = searchBar.value.trim().toLowerCase();
    const filteredliste=users.filter(usr=>{
        return usr.nom.toLocaleLowerCase().includes(searchedValue);
    })
    printList(filteredliste)
})
// function getLastMessage(i) {
//     // users.forEach(user => {
//     //     const dernierMessage = user.messages[user.messages.length - 1]; // Accéder au dernier message dans la liste des messages
//     //     console.log(dernierMessage.text); // Afficher le texte du dernier message
//     //     // const l=dernierMessage.text
//     // });
//     return users[i].messages[users[i].messages.length - 1];
// }

function detailsUser(position) {
    // console.log(users[position])
    const actuelUser=users[position]
    // console.log(users[position].img)
    const imgUser=users[position].img
    printMessage(actuelUser,imgUser)
    

    //
    posUserActual=position;
}

function printMessage(usertab,imguser) {
    nameOwner.innerHTML=`${usertab.nom}`
    messages.innerHTML=""
    usertab.messages.forEach(function(msg){
        messages.innerHTML+=`
                    <div class="message owner">
                        <div class="messagecontent">
                            <p>${msg.text}</p>
                        </div>
                        <div class="messageinfo">
                        <img src="${imguser}" alt="">
                            <span>${msg.date}</span>
                        </div>
                    </div>
        `
    })
}

// d=new Date()
// console.log(d)
// console.dir(d)

function getCurrentDate() {
    d=new Date()
    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
}

function isWritting() {
    writting.classList.remove("stop")
    if (!textarea.value) {
        writting.classList.add("stop")
    }
}

textarea.addEventListener("input",isWritting)

btnConnexion.addEventListener("click",()=>{
    const username=nameInput.value.trim();
    const password=passwordInput.value.trim();
    
    // console.log(username,password);
    posConnectedUser=login(username,password)
    // console.log(posConnectedUser)
    if (posConnectedUser==-1) {
        return;
    }
    home.classList.remove("hide");
    connexion.classList.add("hide");
    messages.innerHTML="";
    chats.innerHTML="";

    let user=users.filter(u=>u.username===username && u.password===password)
    // console.log(user)
    userConnected.innerHTML=""
    user.forEach(function (u) {
        // console.log(u.nom)
        userConnected.innerHTML+=`
            <img class="img" src="${u.img}" alt="">
            <span>${u.nom}</span>
            <button class="logout" onclick="getOut()">logout</button>
        `
    })
    // printList();
})

function getOut() {
    home.classList.add("hide");
    connexion.classList.remove("hide");
}

btnSend.addEventListener("click",()=>{
    const newMessage = textarea.value
    // if (newMessage.trim=="") {
    if (!newMessage.trim() || posUserActual==-1) {
        return;
    }
    // console.log(newMessage)
    // console.log(users[posUserActual].messages)
    users[posUserActual].messages.push({
        text:newMessage,
        date:getCurrentDate()
    },
    )
    printList();
    // console.log(users[posUserActual].messages[users[posUserActual].messages.length - 1])
    // dernierMessage=getLastMessage(posUserActual)
    // console.log(dernierMessage)
    detailsUser(posUserActual)
    //Vider le champ de saisi
    textarea.value="";
    
    //Enlever writting
    isWritting();
})

window.onload=function(){
    home.classList.add("hide");
    // printList();
}
// printList()