// hero main content
let hero=document.getElementById("hero");
let home_page_bgimg=document.getElementById("home_page_bgimg");
let main_content=document.getElementById("hero_content");
main_content.innerHTML=` <h1 class="page_caption">Upgrade Your Tech Experience</h1>
    <p class="sub_caption">Discover powerful laptops and accessories.</p>
    <div class="buttons">
    <a href="../products/products.html"><button>Shop Now</button></a>
   <a href="../products/products.html"> <button>Explore Now</button></a></div>
    `;
main_content.classList.add("show");
console.log(home_page_bgimg);
setTimeout(()=>{
    home_page_bgimg.classList.add("show");
},1000)
// home_page_bgimg.classList.add("show");


//  category section

// fetch("../data/category.josn")
// .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     });
    

async function retrive(){
   try{
    const response=await fetch("../data/category.josn");
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
     console.log(response);
    const data=await response.json();
    console.log(data);
    
    const card_container=document.getElementById("card_container");
    for(item of data){
card_container.innerHTML +=`
        <div class="cards">
          <img
            src="${item.image}"
            alt="gaming_cardimg"
            class="gaming_cardimg"
            id="gaming_cardimg"
          />
          <p class="title">${item.title}</p>
          <div class="tag_line">${item.tagline}</div>
          <div>
            <a href="${item.page}"
              ><button>Explore →</button></a
            >
          </div>
        </div>
        
`;
    }


   }catch(error){
    console.error("Network parsing error:".error);
   }
}
retrive();
