
const backgroundColor = `rgb(244, 234, 223)`
const links = document.querySelectorAll("a");
const exp = document.querySelector("#exp");
const projects = document.querySelector("#projects");
const Youtube = document.querySelector("#youtube");
const toDo = document.querySelector(".to-do-list");
const working = document.querySelector(".what-im-doing");

function hover(e) {
    e.target.style.backgroundColor = "rgb(193, 191, 191)";
    e.target.style.borderRadius = "0.2rem";
}

function unhover(e) {
    e.target.style.backgroundColor = backgroundColor;
}


for (const link of links) {
    link.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "rgb(193, 191, 191)";
        e.target.style.borderRadius = "0.2rem";}
    );
    link.addEventListener("mouseout", (e) => e.target.style.backgroundColor = backgroundColor
    );
}

Youtube.addEventListener("click", (e) => {
    ans = alert("The page you are going to is an extremely fun, unserious site. While I'm happy to share the games we are playing and will strive to have the site lean more professional, my siblings also have access to the site to make any changes they see fit.");
})

toDo.addEventListener("mouseenter", (e) => hover(e))

toDo.addEventListener("mouseleave", (e) => unhover(e))

working.addEventListener("mouseenter", (e) => hover(e))

working.addEventListener("mouseleave", (e) => unhover(e))