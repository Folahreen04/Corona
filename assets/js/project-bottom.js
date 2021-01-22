/********************************************
 *               XRP Card                    *
 ********************************************/
    //Get the context of the Chart canvas element we want to select
function loadChart1() {
    var xrpChartjs = document.getElementById("xrp-chartjs").getContext("2d");
// Create Linear Gradient
    var blue_trans_gradient = xrpChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(30,159,242,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
// Chart Options
    var XRPStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(30,159,242,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

// Chart Data
    var XRPMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "XRP",
            data: [70, 20, 35, 60, 20, 40, 30],
            backgroundColor: blue_trans_gradient,
            borderColor: "#1E9FF2",
            borderWidth: 1.5,
            strokeColor : "#1E9FF2",
            pointRadius: 0,
        }]
    };

    var XRPCardconfig = {
        type: 'line',

        // Chart Options
        options : XRPStats,

        // Chart Data
        data : XRPMonthData
    };

// Create the chart
    var XRPAreaChart = new Chart(xrpChartjs, XRPCardconfig);
}

function loadChart2() {
    var xrpChartjs = document.getElementById("xrp-chartjs2").getContext("2d");
// Create Linear Gradient
    var blue_trans_gradient = xrpChartjs.createLinearGradient(0, 0, 0, 100);
    blue_trans_gradient.addColorStop(0, 'rgba(30,159,242,0.4)');
    blue_trans_gradient.addColorStop(1, 'rgba(255,255,255,0)');
// Chart Options
    var XRPStats = {
        responsive: true,
        maintainAspectRatio: false,
        datasetStrokeWidth : 3,
        pointDotStrokeWidth : 4,
        tooltipFillColor: "rgba(30,159,242,0.8)",
        legend: {
            display: false,
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
                ticks: {
                    min: 0,
                    max: 85
                },
            }]
        },
        title: {
            display: false,
            fontColor: "#FFF",
            fullWidth: false,
            fontSize: 30,
            text: '52%'
        }
    };

// Chart Data
    var XRPMonthData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "XRP",
            data: [70, 20, 35, 60, 20, 40, 30],
            backgroundColor: blue_trans_gradient,
            borderColor: "#1E9FF2",
            borderWidth: 1.5,
            strokeColor : "#1E9FF2",
            pointRadius: 0,
        }]
    };

    var XRPCardconfig = {
        type: 'line',

        // Chart Options
        options : XRPStats,

        // Chart Data
        data : XRPMonthData
    };

// Create the chart
    var XRPAreaChart = new Chart(xrpChartjs, XRPCardconfig);
}

loadChart1();
loadChart2();