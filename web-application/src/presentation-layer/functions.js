function initMap() {

    var myLatLng = { lat: 57.868828, lng: 14.133597 };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 57.7811, lng: 14.1586 },
        zoom: 11,
        streetViewControl: false,
        fullscreenControl: false
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'lillån'
    });

    marker.addListener('click', function () {
        initGraph()
        getInfo()
    })
}
//get info 
function getInfo() {
    document.getElementById("title").innerHTML = "Lillån"
    document.getElementById("info").innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
}


//create chart.js graph with hardcoded values
function initGraph() {

    //x
    var time = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
    //y
    var point1 = [10, 9, 12, 12, 12, 13, 12];
    var point2 = [9, 12, 12, 11, 9, 11, 10];
    var average = [9.5, 10.5, 12, 11.5, 10.5, 12, 11];

    var ctx = document.getElementById("chart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,

            datasets: [
                {
                    data: point1,
                    label: "Point 1",
                    borderColor: "#8eb5dd",
                    fill: false,
                    spanGaps: true
                },
                {
                    data: point2,
                    label: "Point 2",
                    borderColor: "#e0a0a0",
                    fill: false
                },
                {
                    data: average,
                    label: "Average",
                    borderColor: "#acdca6",
                    fill: false
                },
            ]
        },
        options: {
            legend: {
                position: "bottom",
                labels: {
                    fontColor: "#707070",
                    fontFamily: "Montserrat",
                    boxWidth: 80,
                    fontSize: 16,
                    padding: 50,
                    usePointStyle: true
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#707070",
                        fontFamily: "Montserrat",
                        fontSize: 14,
                        maxTicksLimit: 6,
                        padding: 20
                    },
                    gridLines: {
                        //display: false,
                        //lineWidth: 30,
                        drawBorder: false,
                        //borderDash: [50, 50]
                        zeroLineColor: "rgba(0, 0, 0, 0.1)"
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "#707070",
                        fontFamily: "Montserrat",
                        fontSize: 14,
                        padding: 20
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            responsive: false,
            elements: {
                line: {
                    tension: 0
                }
            },
            layout: {
                padding: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        }
    });
}
