async function loadContent(url){
    const response = await fetch(url);
    const data = await response.text();
    mainContent.innerHTML = data;
}

loadContent("./components/header.html",pageHeader);
loadContent("./components/nav.html",pageNav);
loadContent("./components/footer.html",pageFooter);

function markLinkSelected(link){
    link.classList.add("selected");
}


