
var typed = new Typed(".typing",{
    strings:["Css Expart","Js Expart","Html Expart","JS Expart"],
    typeSpeed:100,
    BackSpeed:80,
    loop:true
})
// game
let playerone = document.querySelector(".playerone");
let playeroneinput = document.querySelector(".playeroneinput");
let playeronebtn = document.querySelector(".playeronebtn");
let playeronetext = document.querySelector(".playeronetext");
let playertwo = document.querySelector(".playertwo");
let playertwoinput = document.querySelector(".playertwoinput");
let playertwobtn = document.querySelector(".playertwobtn");
let playertwotext = document.querySelector(".playertwotext");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let changtwo = document.querySelector(".changtwo");
let playeronevalue;
let chance =3
playeroneinput.addEventListener("keyup",function(){
    playeronetext.innerHTML="";
});
playertwoinput.addEventListener("keyup",function(){
    playertwotext.innerHTML="";
});
playeronebtn.addEventListener("click",()=>{
if(playeroneinput.value){
if(playeroneinput.value - 20){
if(playeroneinput.value>0 && playeroneinput.value<10){
    playeronevalue =playeroneinput.value;
    two.style.display = "block"
    one.style.display = "none"  
}else{
    playeronetext.innerHTML ="Please Enter Number Between 1-9 " 
}
}else{
    playeronetext.innerHTML ="Please Enter Your Number value "    
}
}
else{
    playeronetext.innerHTML ="Please Enter Your Input value "  
}
});
// two
playertwobtn.addEventListener("click",()=>{
    if(playertwoinput.value){
    if(playertwoinput.value - 20){
    if(playertwoinput.value>0 && playertwoinput.value<10){
      if(playeronevalue == playertwoinput.value){
        changtwo.innerHTML = "Game over player two win this game"
      }else{
        chance--;
           if(chance !== 0){
            changtwo.innerHTML = "chance -" + chance;
           }else{
            changtwo.innerHTML = "Game over player one win this game"
           }
      }
    }else{
        playertwotext.innerHTML ="Please Enter Number Between 1-9 " 
    }
    }else{
        playertwotext.innerHTML ="Please Enter Your Number value "    
    }
    }
    else{
        playertwotext.innerHTML ="Please Enter Your Input value "  
    }
    });
    // na
    //------_____class18 js part start_____---------//

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let update = document.querySelector(".update");
let data = [];
let id;
btn.addEventListener("click",()=>{
    if(input.value){
        data.push(input.value);
        todo();
    input.value = "";
    }
})
function todo(){
    list.innerHTML ="";
    data.map(
        (item) =>
    (list.innerHTML += `<li>${item} <a href="#" class="btn button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Delete
  </a><a href="#" class="btn edit">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Edit
</a></li>`)
                
    );
    let Deleterr = document.querySelectorAll(".button");
    let editNod = document.querySelectorAll(".edit");
    let Deleteitem = Array.from(Deleterr);
    let editSingle = Array.from(editNod);
    Deleteitem.map((itemd, index) => {
itemd.addEventListener("click",() => {
data.splice(index, 1);
todo();
});

    });

    editSingle.map((iteme, index)=>{
        iteme.addEventListener("click",() => {
            input.value = data[index];
            id = index;
            });
    }); 
}
update.addEventListener("click",()=>{
data[id]= input.value;
todo();
})
// game
playertwobtn.addEventListener("click",()=>{
    playertwoinput.value="";
});