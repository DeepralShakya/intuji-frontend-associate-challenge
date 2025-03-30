async function loadContent() {
    try {
        document.getElementById("sidebar").innerHTML = await fetch('components/sidebar.html').then(res => res.text());
        document.getElementById("main-content").innerHTML = await fetch('components/main-content.html').then(res => res.text());
        document.getElementById("header").innerHTML = await fetch('components/header.html').then(res => res.text());
        document.getElementById("overview").innerHTML = await fetch('components/overview.html').then(res => res.text());
        document.getElementById("saving-plan").innerHTML = await fetch('components/saving-plan.html').then(res => res.text());
        document.getElementById("analytics").innerHTML = await fetch('components/analytics.html').then(res => res.text());
        document.getElementById("recent-transaction").innerHTML = await fetch('components/recent-transaction.html').then(res => res.text());
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

loadContent();
