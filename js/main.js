async function loadContent() {
    try {
        document.getElementById("sidebar").innerHTML = await (await fetch('components/sidebar.html')).text();
        document.getElementById("main-content").innerHTML = await (await fetch('components/main-content.html')).text();
        document.getElementById("header").innerHTML = await (await fetch('components/header.html')).text();
        document.getElementById("overview").innerHTML = await (await fetch('components/overview.html')).text();
        document.getElementById("saving-plan").innerHTML = await (await fetch('components/saving-plan.html')).text();
        document.getElementById("analytics").innerHTML = await (await fetch('components/analytics.html')).text();
        document.getElementById("recent-transaction").innerHTML = await (await fetch('components/recent-transaction.html')).text();
        
        initializeChart();

        document.querySelector('.hamburger').addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('active');
            
            document.body.classList.toggle('sidebar-active');
        });
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

function initializeChart() {
    const ctx = document.getElementById('analyticsChart');
    if (!ctx) {
        console.error('Canvas element not found!');
        return;
    }

    const chartContext = ctx.getContext('2d');
    const createGradient = (ctx, color) => {
        let gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, `rgba(${color}, 0.4)`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        return gradient;
    };

    const gradientBlue = createGradient(chartContext, "100, 102, 241");
    const gradientYellow = createGradient(chartContext, "234, 179, 8");

    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                data: [13000, 10000, 5000, 16000, 13000, 20000, 17000],
                borderColor: '#6466F1',
                backgroundColor: gradientBlue,
                borderWidth: 3,
                tension: 0.5,
                fill: true,
                pointRadius: 0, 
            },
            {
                data: [5000, 9000, 6000, 11000, 5500, 7000, 8000],
                borderColor: '#EAB308',
                backgroundColor: gradientYellow,
                borderWidth: 3,
                tension: 0.5,
                fill: true,
                pointRadius: 0,
            }
        ]
    };

    // Create the chart
    new Chart(chartContext, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,  
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false 
                    },
                    ticks: {
                        font: {
                            size: 10 
                        }
                    },
                    categoryPercentage: 0.5,
                    barPercentage: 0.5 
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 5000, 
                        callback: function(value) {
                            return value / 1000 + 'k'; 
                        },
                        min: 0,
                        max: 20000,
                    },
                    grid: {
                        display: false 
                    }
                }
            }
        }
    });
}

loadContent();