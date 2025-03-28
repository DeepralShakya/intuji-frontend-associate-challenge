async function loadContent() {
    try {
        document.getElementById("sidebar").innerHTML = await fetch('../sidebar.html').then(res => res.text());

        document.getElementById("main-content").innerHTML = await fetch('../main-content.html').then(res => res.text());

        document.getElementById("header").innerHTML = await fetch('../header.html').then(res => res.text());
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

loadContent();
