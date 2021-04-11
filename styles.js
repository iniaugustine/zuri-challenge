var MenuItems = document.getElementById('MenuItems');

MenuItems.style.maxHeight = "0px";

function menuToggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}

let test = document.querySelector(".fa-bars");

test.addEventListener("click", function(){
  
    if(document.querySelector(".nav-links").getAttribute("class").includes('hide')){
     document.querySelector(".nav-links").classList.remove("hide");
     document.querySelector(".nav-links").classList.add("show");
    } else{
        document.querySelector(".nav-links").classList.remove("show");
     document.querySelector(".nav-links").classList.add("hide");
    }
     
})