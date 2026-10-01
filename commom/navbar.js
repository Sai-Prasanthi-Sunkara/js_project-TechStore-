function createNavbar() {
  return `
        <header class="navbar">

            <div class="nav-logo">
                <a href="../home/home.html">
                    <img src="../images/nexora-logo.png"
                         alt="Nexora Tech Store">
                </a>
            </div>

            <nav class="nav-links" id="nav-links">

                <a href="../home/home.html">Home</a>

                <a href="../products/products.html">Laptops</a>

                <a href="../products/products.html?category=accessories">
                    Accessories
                </a>

                <a href="../products/products.html?category=deals">
                    Deals
                </a>

                <a href="../about/about.html">About</a>

                <a href="../contact/contact.html">Contact</a>

            </nav>

            <div class="nav-actions">

                <div class="search-box">
                    <input
                        type="search"
                        placeholder="Search products..."
                    >

                    <button class="search-btn">
                         <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <button class="nav-icon">
                     <i class="fa-regular fa-heart"></i>
                </button>

                <button class="nav-icon">
                   <i class="fa-regular fa-user"></i>
                </button>

                <a href="../cart/cart.html" class="cart-link">
                   <i class="fa-solid fa-cart-shopping"></i>
                    <span id="cart_count">Cart</span>
                </a>
        
                <button class="menu-toggle" id="menu-toggle">
    <i class="fa-solid fa-bars"></i>
</button>

            </div>

        </header>
    `;
}
//  adding or instering the resuable navbar code at afterbrgin
document.body.insertAdjacentHTML("afterbegin", createNavbar());

const navLinks=document.getElementById("nav-links");
const menuToggle= document.getElementById("menu-toggle");
const icon=menuToggle.querySelector("i");
menuToggle.addEventListener("click",(e)=>{
    console.log("this is for test");
 navLinks.classList.toggle("show");
icon.classList.toggle("fa-xmark");
icon.classList.toggle("fa-bars");
});

const current_match_path=window.location.pathname; // to identify the path name we use the "pathname";

const queryString=window.location.search;  // to identify the url parameters:like "?category=accessories"  we use the "window.lolocation.search" And "URLSearchParams";
console.log(queryString);
const currecnt_url_params=new URLSearchParams(queryString);

console.log(currecnt_url_params);
console.log(currecnt_url_params.get("category"));
const page_params=currecnt_url_params.get("category");
console.log(current_match_path);

let all_links=document.querySelectorAll(".nav-links a");
console.log(all_links);

for(let item of all_links){

console.log(item.href);
const nav_link = new URL(item.href);

console.log(nav_link.search);
const nav_link_params=new URLSearchParams(nav_link.search);
// const nav_link_search=nav_link.search;
 const nav_params=nav_link_params.get("category");

console.log(nav_link.pathname);

    if(current_match_path === nav_link.pathname  && page_params === nav_params)
        item.classList.add("active");
}
