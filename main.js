if(document.URL.includes("index.html")) {

} else if(document.URL.includes("projects.html")) {
document.querySelector(".nav_item_proj").classList.add('active');
document.querySelector(".nav").classList.add('project');
} else if(document.URL.includes("contacts.html")) {
document.querySelector(".nav_item_contact").classList.add('active');
document.querySelector(".nav").classList.add('contact');
}