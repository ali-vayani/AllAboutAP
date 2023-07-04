const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Units 1, 4, and 7', 'Units 2, 5 and 8', 'Unit 3, 6, and 9'],
        datasets: [{
            label: 'Unit Breakdown',
            data: [45.5, 40.5, 16.5], 
            backgroundColor: [
            	'rgba(224, 122, 95)',
                'rgba(143, 93, 93)',
                'rgba(102, 79, 92)',
            ],
            hoverOffset: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});