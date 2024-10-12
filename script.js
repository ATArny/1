// HOME SECTION START
// let navItems = document.querySelectorAll('.side-nav p');
 
// let allIcons = document.querySelectorAll(".home i, .about i, .services i, .portfolio i, .contact i");
// let allPara = document.querySelectorAll(".home p, .about p, .services p, .portfolio p, .contact p");

// for (navItem of navItems) {
//     navItem.addEventListener("click",changeColor);
// }

// function changeColor (event) {
//     event.currentTarget.allIcons.style.color = "#F433FF";
//     event.currentTarget.allPara.style.color = "#F433FF";
// }



// let navItems = document.querySelectorAll('.side-nav p');
// let activeNavItem = document.querySelector('.side-nav p#active');

// for (let navItem of navItems) {
//     navItem.addEventListener("click", changeColor);
// }

// function changeColor(event) {
//     if (activeNavItem) {
//         activeNavItem.style.color = ""; 
//         let prevAnchor = activeNavItem.querySelector('a');
//         if (prevAnchor) {
//             prevAnchor.style.color = "";
//         }
//         let prevIcon = activeNavItem.parentElement.querySelector('i');
//         if (prevIcon) {
//             prevIcon.style.color = "#FFFFFF";
//         }
//         activeNavItem.removeAttribute('id'); 
//     }

//     let clickedPara = event.currentTarget;
//     clickedPara.style.color = "#F433FF";
//     let anchor = clickedPara.querySelector('a');
//     if (anchor) {
//         anchor.style.color = "#F433FF";
//     }
//     let icon = clickedPara.parentElement.querySelector('i');
//     if (icon) {
//         icon.style.color = "#F433FF";
//     }
//     clickedPara.id = 'active';
//     activeNavItem = clickedPara;
// }




// HOME SECTION END


// ABOUT SECTION START
let skillTitles = document.getElementsByClassName('skill-title');
let skillContents = document.getElementsByClassName('skill-content');

function openContent(name) {
    for(skillTitle of skillTitles) {
        skillTitle.classList.remove('active-link');
    }

    for(skillContent of skillContents) {
        skillContent.classList.remove('active-content');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(name).classList.add('active-content');
}
// ABOUT SECTION END

// PORTFOLIO SECTION START
let btnClick = document.querySelector("#port-btn");
let images = document.getElementsByClassName("inactive");

function showImages() {
    for (image of images) {
        image.style.display = "block";
    }
    btnClick.style.display = "none";    
}


let portCards = document.getElementsByClassName("port-card");

for(portCard of portCards) {    
    portCard.addEventListener("mouseover",mouseOver);
    portCard.addEventListener("mouseout",mouseOut);
}

function mouseOver(event) {
    let layers= event.currentTarget.getElementsByClassName("layer")
    for(let layer of layers) {
        layer.style.visibility = "visible";
    }
}

function mouseOut(event) {
    let layers= event.currentTarget.getElementsByClassName("layer")
    for(let layer of layers) {
        layer.style.visibility = "hidden";
    }
}

// PORTFOLIO SECTION END


// --------------MOBILE RESPONSIVE-----------------


