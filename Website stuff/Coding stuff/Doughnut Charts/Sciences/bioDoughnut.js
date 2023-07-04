
const ctx = document.getElementById('myDonught').getContext('2d');
const myDonught= new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6', 'Unit 7', 'Unit 8'],
        datasets: [{
            label: 'Unit Breakdown',
            data: [9.5,11.5,14.0,12.5,9.5,14.0,16.5,12.5], 
            backgroundColor: [
                'rgba(239, 212, 191)',
                'rgba(234, 182, 159)',
                'rgba(224, 122, 95)',
                'rgba(143, 93, 93)',
                'rgba(102, 79, 92)',
                'rgba(61, 64, 91)',
                'rgba(95, 121, 123)',
                'rgba(129, 178, 154)',
                'rgba(186, 191, 149)',
                'rgba(242, 204, 143)'
 
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