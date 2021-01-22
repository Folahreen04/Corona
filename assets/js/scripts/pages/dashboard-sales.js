/*=========================================================================================
    File Name: dashboard-analytics.js
    Description: intialize advance cards
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: Pixinvent
    Author URL: hhttp://www.themeforest.net/user/pixinvent
    ==========================================================================================*/
$(window).on('load', function () {

    // Revenue - CharJS Line

});

function loadBudgetBreakdown() {
    var columnChart = c3.generate({
        bindto: '#budget-breakdown',
        size: {height:320},
        color: {
            pattern: ['#de6c00','#FECEA8', '#FF847C']
        },

        // Create the data table.
        data: {
            columns: [
                ['Budget', 109, 16, 53, 130.5],
                ['Q2 Perf', 21, 3, 1, 79]
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        },
        grid: {
            y: {
                show: true
            }
        },
        axis:{
            x:{
                type: 'category',
                categories:['Major Projects', 'CRV Projects', 'FAC Readiness', 'Asset Integrity']
            }
        }
    });

    // Instantiate and draw our chart, passing in some options.
    setTimeout(function () {
        columnChart.load({
            columns: [
                ['Q4 Perf. Forecast', 82, 12, 40, 120]
            ]
        });
    }, 1000);

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        columnChart.resize();
    });
}

function loadChartOne() {
    Chart.defaults.derivedLine = Chart.defaults.line;
    var draw = Chart.controllers.line.prototype.draw;
    var custom = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            var ctx = this.chart.chart.ctx;
            var _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = '#d8d8d8';
                ctx.shadowBlur = 30;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 20;
                _stroke.apply(this, arguments);
                ctx.restore();
            }
        }
    });

    Chart.controllers.derivedLine = custom;


    var ctx2 = document.querySelector("#lastYearRevenue").getContext('2d');
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            labels:{
                boxWidth: 10
            },
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: false,
            text: ''
        }
    };
    var lastYearRevenueChart = new Chart(ctx2, {
        type: 'derivedLine',
        data: {
            labels: ["Maj. Projects", "CRV", "FAC Readiness", "Asset"],
            datasets: [{
                data: [109, 16, 53, 130.5],
                borderWidth: 4,
                borderColor: '#FF4961',
                backgroundColor: '#FF4961',
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#FF4961",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#FF4961",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
                label: 'Budget'
            }, {
                data: [21, 3, 1, 79],
                borderWidth: 4,
                borderColor: '#1E9FF2',
                backgroundColor: '#1E9FF2',
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#1E9FF2",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#1E9FF2",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
                label: 'Q2 Perf'
            },
                {
                    data: [82, 12, 40, 120],
                    borderWidth: 4,
                    borderColor: '#28D094',
                    backgroundColor: '#28D094',
                    pointBackgroundColor: "#FFF",
                    pointBorderColor: "#28D094",
                    pointHoverBackgroundColor: "#FFF",
                    pointHoverBorderColor: "#28D094",
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    fill: false,
                    label: 'Q4 Perf Forecast'
                }]
        },
        options: chartOptions,
        responsive: true,
        maintainAspectRatio: false
    });

    // var ctx3 = document.querySelector("#okpai").getContext('2d');
    // var okpaiChart = new Chart(ctx3, {
    //     type: 'bar',
    //     data: {
    //         labels: ['BGT', 'FCSTD SPEND', 'Q2 PERF.'],
    //         datasets: [{
    //             data: [403.9, 242.3, 103.4],
    //             backgroundColor: ['#FF4961', '#28D094', '#1E9FF2']
    //         }]
    //     },
    //     options: {
    //         title: {
    //             display: false
    //         },
    //         legend: {
    //             display: false
    //         },
    //         scales: {
    //             xAxes: [{
    //                 display: true,
    //                 gridLines: {
    //                     color: "#f3f3f3",
    //                     drawTicks: false,
    //                 },
    //
    //             }],
    //             yAxes: [{
    //                 display: true,
    //                 gridLines: {
    //                     color: "#ffffff",
    //                     drawTicks: false,
    //                 },
    //             }]
    //         }
    //     },
    //     responsive: true,
    //     maintainAspectRatio: false
    // });
}

function loadOkpaiChart() {
    Highcharts.chart('okpai', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
                ''
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: '$M'
            }
        }, {
            title: {
                text: ''
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'BGT',
            color: '#d3d3d3',
            data: [403.9],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.25,
            pointPlacement: -0.05
        }, {
            name: 'FCSTD SPEND',
            color: '#1E9FF2',
            data: [242.3],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.35,
            pointPlacement: -0.05
        }, {
            name: 'Q2 PERF.',
            color: '#ef6c00',
            data: [103.4],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.45,
            pointPlacement: -0.05
        }]
    });
}

function loadCapexChart() {
    var ctx = $("#capex-chart");

    // Chart Options
    var chartOptions = {
        title:{
            display:false,
            text:""
        },
        legend:{
            display: true,
            position: 'bottom'
        },
        tooltips: {
            mode: 'label'
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        scales: {
            xAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }]
        }
    };

    // Chart Data
    var chartData = {
        labels: ["Planned YTD Spend ", "Actual Spend ", "Oct YTD Spend Projs ", "Nov YTD Projs ", "Dec YTD Spend Projs "],
        datasets: [{
            label: "Kwale",
            data: [11.9, 8.8, 15, 25, 35],
            backgroundColor: "#196dc1",
            // hoverBackgroundColor: "rgba(81,117,224,.8)",
            borderColor: "transparent"
        }, {
            label: "Akri",
            data: [6, 0.2, 2, 3, 4],
            backgroundColor: "#3b8ad9",
            // hoverBackgroundColor: "rgba(22,211,154,.8)",
            borderColor: "transparent"
        },
            {
                label: "Ebocha",
                data: [10, 8, 11, 15, 18],
                backgroundColor: "#7bc0f7",
                // hoverBackgroundColor: "rgba(249,142,118,.8)",
                borderColor: "transparent"
        },
            {
                label: "Samabri",
                data: [1.1, 0, 0.5, 0.8, 1.1],
                backgroundColor: "#f18226",
                // hoverBackgroundColor: "rgba(249,142,118,.8)",
                borderColor: "transparent"
        },
            {
                label: "Idu",
                data: [0, 0, 0, 0, 0],
                backgroundColor: "#fa9d00",
                // hoverBackgroundColor: "rgba(249,142,118,.8)",
                borderColor: "transparent"
        },
            {
                label: "Brass Fire",
                data: [2.8, 1.7, 2, 2.5, 2.8],
                backgroundColor: "#ffdb69",
                // hoverBackgroundColor: "rgba(249,142,118,.8)",
                borderColor: "transparent"
        },
            {
                label: "Brass BOP",
                data: [2, 0, 0, 0, 0],
                backgroundColor: "#61737b",
                // hoverBackgroundColor: "rgba(249,142,118,.8)",
                borderColor: "transparent"
        },
            {
                label: "Brass Tank",
                data: [7, 0, 3.5, 5, 7],
                backgroundColor: "#a6b3b3",
                // hoverBackgroundColor: "rgba(249,142,118,.8)",
                borderColor: "transparent"
        }]
    };

    var config = {
        type: 'horizontalBar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
}


function loadUAPChart() {
    var ctx = $("#uap-chart");

    // Chart Options
    var chartOptions = {
        title:{
            display:false,
            text:""
        },
        legend:{
            display: true,
            labels:{
                boxWidth: 15
            },
        },
        tooltips: {
            mode: 'label'
        },
        elements: {
            rectangle: {
                borderWidth: 2,
                borderColor: 'rgb(0, 255, 0)',
                borderSkipped: 'left'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        scales: {
            xAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }]
        }
    };

    // Chart Data
    var chartData = {
        labels: ["121 ", "130 ", "132 ", "141 ", "4120 "],
        datasets: [{
            label: "Budget",
            data: [500, 1200, 650, 11100, 3000],
            backgroundColor: "#FF4961",
            // hoverBackgroundColor: "rgba(81,117,224,.8)",
            borderColor: "transparent"
        }, {
            label: "Spend",
            data: [0, 300, 0, 200, 2100],
            backgroundColor: "#1E9FF2",
            // hoverBackgroundColor: "rgba(22,211,154,.8)",
            borderColor: "transparent"
        }]
    };

    var config = {
        type: 'horizontalBar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
}