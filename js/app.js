// filter array 
let filterarray =[];

// gallery card array

let galleryarray = [
    {
        id:1,
        name : "pls donate map",
        src: "../images/thumb-9.png",
        desc : "Time to make a game like pls donate - using my map :D <br><br> <a class=btn11 href=https://www.roblox.com/library/9851588592/Pls-Donate-Map target=_blank>Get Model</a>"
    },
    {
        id:2,
        name : "stand model",
        src: "./images/iphone1.jpg",
        desc : "add this to pls donate map!!! <br><br> <a class=btn11 href=https://www.roblox.com/library/9636924007/Stand-Model target=_blank>Get Model</a>"
    },
    {
        id:3,
        name : "realistic rain system",
        src: "./images/phone2.jpg",
        desc : "Time to change ur game style <br><br> <a class=btn11 href=https://www.roblox.com/library/11407783743/Realistic-Rain-System target=_blank>Get Model</a>"
    },
    {
        id:4,
        name : "cash shop",
        src: "./images/watch2.jpg",
        desc : "buy some cash for better experiment <br><br> <a class=btn11 href=https://www.roblox.com/library/8761030946/Cash-Shop target=_blank>Get Model</a>"
    },
    {
        id:5,
        name : "daily spin",
        src: "./images/headphone1.jpg",
        desc : "Time to get free money 🤑 (Spin & Win) <br><br> <a class=btn11 href=https://www.roblox.com/library/11447412050/Daily-Spin target=_blank>Get Model</a>"
    },
    {
        id:6,
        name : "building system",
        src: "./images/watch3.jpg",
        desc : "Time to build your own building <br><br> <a class=btn11 href=https://www.roblox.com/library/11464518329/Building-System target=_blank>Get Model</a>"
    },
    {
        id:7,
        name : "simulator shop",
        src: "./images/watch3.jpg",
        desc : "Make a Simulator With a shop <br><br> <a class=btn11 href=https://www.roblox.com/library/9116977707/Simulator-Shop-NEW target=_blank>Get Model</a>"
    },
    {
        id:8,
        name : "cashDrop system",
        src: "./images/watch3.jpg",
        desc : "can you drop for me some cash? <br><br> <a class=btn11 href=https://www.roblox.com/library/9607715790/CashDrop-System target=_blank>Get Model</a>"
    },
    {
        id:9,
        name : "eggHunt model",
        src: "./images/watch3.jpg",
        desc : "easter egg event coming soon :o <br><br> <a class=btn11 href=https://www.roblox.com/library/9659892467/EggHunt-Model target=_blank>Get Model</a>"
    },
    {
        id:9,
        name : "doors lobby",
        src: "./images/watch3.jpg",
        desc : "Wanna make Doors game? (your in the right place) <br><br> <a class=btn11 href=https://www.roblox.com/library/11522149756/Roblox-Doors target=_blank>Get Model</a>"
    }
   ];



showgallery(galleryarray);


// create function to show card
{/* <img src="${curarra[i].src}" width="100%" height="320px"/> */}


function showgallery(curarra){
   document.getElementById("card").innerText = "";
   for(var i=0;i<curarra.length;i++){
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h1 class="text-capitalize text-center" style="font-size: 24px;">${curarra[i].name}</h4>

          
          <p class="mt-2">${curarra[i].desc}</p>
       
          </div>
          </div>
       `
   }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray= galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
       showgallery(galleryarray);
   }
   else{
       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});