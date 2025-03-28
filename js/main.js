async function loadContent() {
    document.getElementById("sidebar").innerHTML = await fetch('../sidebar.html').then(res => res.text());
}

loadContent();
