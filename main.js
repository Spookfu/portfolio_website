if(document.URL.includes("index.html")) {
document.querySelector(".nav_item_home").classList.add('active');
document.querySelector(".nav").classList.add('home');
document.querySelector(".nav_status").classList.add('home');
} else if(document.URL.includes("projects.html")) {
document.querySelector(".nav_item_proj").classList.add('active');
document.querySelector(".nav").classList.add('project');
document.querySelector(".nav_status").classList.add('project');
}