// const item  = document.querySelector(".item");
// const searchinput = document.querySelector(".search");

// let todos = []


// const getitem = () => { 
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then ( res => {res.json()
//         .then(res => {
//             todos = res;
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));
// };



// searchinput.addEventListener('input', )

// function viewResult(arr) {
//     let output = "";
//     arr.foreach(({ id, title }) => (output = `
//     <tr>
//     <td>
//     <div class = "result" >
//     <div>
//     <h1>
//     $ {id}
//     </h1>
//     </div>
//     <p>
//     $ {username}
//     </p>
//     </div>
//     </div>
//     </td>
//     </tr>

//     `
    
//     ));

//     item.innerHTML = output;

// }

// document.addEventListener("DOMContentLoaded", getitem);




// const items = document.querySelector(".items");
// const searchInput = document.getElementById("search");
// let todos = []

// const getItem = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => {res.json()
//     .then(res => {
//         todos = res;
     
//     })
//     .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));
// };

// searchInput.addEventListener('input', e => {
//     const element = e.target.value.toLowerCase()

//     const searchFunc = todos.filter(todo => {
//         return todo.title.toLowerCase().includes(element)
//     }
//     )
  
//     viewResults(searchFunc)
// })

// const viewResults = (arr) => {
//     let output = "";

//     arr.forEach(({ id,title }) => (output += `
//     <tr>
//         <td>
//             <div class="results">
//                  <div>
//                      <h1>
//                         ${id}
//                      </h1>
//                  </div>
//                     <div>
//                      <p>
//                         ${title}
//                      </p>
//                     </div>
//             </div>
//         </td>
//     </tr>


//     `));
//     items.innerHTML = output;
// }

// document.addEventListener("DOMContentLoaded",getItem);





let local = document.querySelector('.local_page');
let h1 = document.getElementById('h1');
let svg = document.querySelector(".btn4");



svg.addEventListener("click", function(){
    local.style.transform =  "translateX(0px)";
});
    



h1.addEventListener("click", function(){
    local.style.transform =  "translateX(450px)";
});




let btb = document.querySelector(".btb") ;


btb.addEventListener("click", function() {
    btb.style.backgroundColor = "chocolate";

});



btb.addEventListener("dblclick", function() {
    btb.style.backgroundColor = "white";

});



let btn = document.querySelector(".btn");

let wrapper1 = document.querySelector(".wrapper1");



btn.addEventListener("click", function(){
    wrapper1.style.display = "block";
});




btn.addEventListener("dblclick", function(){
    wrapper1.style.display = "none";
});



let input = document.querySelector(".input");


let bt = document.querySelector(".bt");
let btn_ = document.querySelector(".btn_");
let ut = document.querySelector("#ut");
bt.addEventListener("click", function(){
    input.value ++;
});

btn_.addEventListener("click", function(){
    if(input.value  <= 0){
        input.value == 0;
        
     }
     else{
        input.value --;
     }
});

bt.addEventListener("click", function(){
    ut.value ++;
})


btn_.addEventListener("click", function(){
    if(ut.value  <= 0){
        ut.value == 0;
        
     }
     else{
        ut.value --;
     }
});


console.log(bt);




let iinput = document.querySelector(".iinput");
let tu = document.querySelector("#tu")

let bt1 = document.querySelector(".but");
let bun = document.querySelector(".bun_");

bt1.addEventListener("click", function(){
    iinput.value ++;
});



bt1.addEventListener("click", function(){
    tu.value ++;
});



bun.addEventListener("click", function(){
    if(iinput.value  <= 0){
        iinput.value == 0;
        
     }
     else{
        iinput.value --;
     }
});

bun.addEventListener("click", function(){
    if(tu.value  <= 0){
        tu.value == 0;
        
     }
     else{
        tu.value --;
     }
});





let iiinput = document.querySelector(".iiinput");
let t = document.querySelector("#t")

let bbut = document.querySelector(".bbut");
let bbun = document.querySelector(".bbun_");

bbut.addEventListener("click", function(){
    iiinput.value ++;
});



bbut.addEventListener("click", function(){
   t.value ++;
});

bbun.addEventListener("click", function(){
    if(iiinput.value  <= 0){
        iiinput.value == 0;
        
     }
     else{
        iiinput.value --;
     }
});








bbun.addEventListener("click", function(){
    if(t.value  <= 0){
        t.value == 0;
        
     }
     else{
    t.value --;
     }
});


let img = document.querySelector(".img");


if(t.value = 0){
    img.style.style.display = "none"
}









let div = document.querySelector(".sectionn3");

const data = [


    {
        img: "./img/p7 1.png",
        id: 5,
        nomi: "nomi dasturlash",

    },
    {
        img: "./img/p7 1.png",

        nomi: "nomi dasturlash",


    },
    {
        img: "./img/p3 1.png",

        nomi: "dasturlash",

    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },

    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },
    {
        img: "./img/p7 1.png",

        nomi: "dasturlash",


    },

    
];


data.map((item)=>{
    div.innerHTML += `
    
    <div class="div_mini">
   <img  src="${item.img}" alt="" >
    <p> ${item.nomi} </p>

    </div>
    `;
})






// ==================SLIDER<SLIDER>SLIDER==================




// const slider = document.querySelector(".slider"),

// line1 = document.querySelector("#line1"),
// line2 = document.querySelector("#line2");


// line1.addEventListener("click",function(){
//     slider.style.transform = "translateX(25%)"


// })


// line2.addEventListener("click" ,function(){
//     slider.style.transform = "translateY(-50%)"




// })












let pt = document.querySelector(".nput");


let tn_b = document.querySelector(".tn_");
let tb = document.querySelector(".tb");
tn_b.addEventListener("click", function(){
    if(pt.value  <= 0){
        pt.value == 0;
        
     }
     else{
      pt.value --;
     }
});


tb.addEventListener("click", function(){
  
     
      pt.value ++;
     
});









let ttn_ = document.querySelector(".ttn_");
let ttb = document.querySelector(".ttb");

let hojia = document.querySelector("#put");

ttn_.addEventListener("click", function(){
    if(hojia.value  <= 0){
        hojia.value == 0;
        
     }
     else{
        hojia.value --;
     }
});


ttb.addEventListener("click", function(){
  
     
    hojia.value ++;
     
});


let bir = document.querySelector(".bir");










if(bt.addEventListener("click")){
    bt1.addEventListener(function(){
        bir.style.display = "block"
    })
}












// let div = document.querySelector(".div");

// const data = [


//     {
//         img: "./img/sa.jpg",
//         id: 5,
//         nomi: "nomi dasturlash",

//         reklama_nomi: "ega hojiakbar_dasturchi"

//     },
//     {
//         img: "./img/sa.jpg",
//         id: 5,
//         nomi: "nomi dasturlash",
//         reklama_narxi:" reklama_narxi 4000" ,
//         reklama_nomi: "ega hojiakbar_dasturchi"

//     },
//     {
//         img: "./img/sa.jpg",
//         id: 5,
//         nomi: "nomi dasturlash",
//         reklama_narxi:" reklama_narxi 4000" ,
//         reklama_nomi: "ega hojiakbar_dasturchi"
//     },
//     {
//         img: "./img/sa.jpg",
//         id: 5,
//         nomi: "nomi dasturlash",
//         reklama_narxi:" reklama_narxi 4000" ,
//         reklama_nomi: "ega hojiakbar_dasturchi"

//     },
//     {
//         img: "./img/sa.jpg",
//         id: 5,
//         nomi: "dasturlash",
//         reklama_narxi:" reklama_narxi 4000" ,
//         reklama_nomi: "ega hojiakbar_dasturchi"

//     },
//     {
//         img: "./img/sa.jpg",
//         id: 5,
//         nomi: "dasturlash",
//         reklama_narxi:" reklama_narxi 4000" ,
//         reklama_nomi: "ega hojiakbar_dasturchi"

//     },


    
// ]


// data.map((item)=>{
//     div.innerHTML += `
    
//     <div class="div_mini">
//    <img  src="${item.img}" alt="" >
//     <p> ${item.id} </p>
//     <p> ${item.nomi} </p>
//     <p> ${item.reklama_narxi} </p>    
//     <p> ${item.reklama_nomi} </p>
//     <button class="but"> sotib olish</button>
//     </div>
//     `;
// })