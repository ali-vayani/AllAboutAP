    // setup
    const data = {
      labels: ['5', '4', '3', '2', '1'],
        datasets: [{
            label: '2022 Score Distribution',
            data: [23.5, 	28.6, 	29.9, 	14.9, 	3.1],

            backgroundColor: [
                'rgba(61, 163, 93, 0.4)',
                'rgba(150, 224, 114, 0.4)',
                'rgba(228, 179, 99, 0.4)',
                'rgba(238, 86, 34, 0.4)',
                'rgba(244, 91, 105, 0.4)',
                'rgba(255, 210, 137, 0.4)'],

            borderColor: [
                'rgba(61, 163, 93, 1)',
                'rgba(150, 224, 114, 1)',
                'rgba(228, 179, 99, 1)',
                'rgba(238, 86, 34, 1)',
                'rgba(244, 91, 105, 1)',
                'rgba(255, 159, 64, 1)'],

            borderWidth: 1.5,
      }]
    };

    // config
    const config = { type: 'bar', data,
     options: {
       scales: {
       x: { beginAtZero: true, title: {display: true,text: 'Score '}},
       y: {beginAtZero: true, title: {display: true,text: 'Score Distribution'}
                }

        }
      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );