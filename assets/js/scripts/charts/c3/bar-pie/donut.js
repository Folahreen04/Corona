/*=========================================================================================
    File Name: donut.js
    Description: c3 donut chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Donut chart
// ------------------------------
$(window).on("load", function () {


});

function loadChartTwo() {
    // Callback that creates and populates a data table, instantiates the donut chart, passes in the data and draws it.
    var donutChart = c3.generate({
        bindto: '#donut-chart',
        color: {
            pattern: ['#212666', '#427abf', '#666EE8', '#9C27B0']
        },

        // Create the data table.
        data: {
            columns: [
                ["Asset", 130.5],
                ["Maj. Projects", 109],
            ],
            type: 'donut',
            // onclick: function (d, i) { console.log("onclick", d, i); },
            // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "$308.5M",
            label: {
                format: function (value, ratio, id) {
                    return '$' + value;
                }
            }
        }
    });

    // Instantiate and draw our chart, passing in some options.
    setTimeout(function () {
        donutChart.load({
            columns: [

                ["FAC Readiness", 53],
                ["CRV", 16],
            ]
        });
    }, 1500);

    // setTimeout(function () {
    //     donutChart.unload({
    //         ids: 'data1'
    //     });
    //     donutChart.unload({
    //         ids: 'data2'
    //     });
    // }, 2500);

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function () {
        donutChart.resize();
    });
}

function loadBudgetSpiral() {
    var names = ['Asset', 'Major Projects', 'CRV', 'FAC Readiness'];
    var data = [((106.3/460) * 100).toFixed(0), ((192.5/460) * 100).toFixed(0), ((79/460) * 100).toFixed(0), ((81.9/460) * 100).toFixed(0), 56, 100];
    var labels = ['106.3', '192.5', '79', '81.9'];
    var dataSet = anychart.data.set(data);
    var palette = anychart.palettes.distinctColors().items(['#64b5f6', '#1976d2', '#ef6c00', '#ffd54f', '#455a64', '#96a6a6', '#dd2c00', '#00838f', '#00bfa5', '#ffa000']);

    var makeBarWithBar = function(gauge, radius, i, width, without_stroke) {
        var stroke = '1 #e5e4e4';
        if (without_stroke) {
            stroke = null;
            gauge.label(i)
                .text(names[i] + ', <span style="">$' + labels[i] + 'M</span>') // color: #7c868e
                .useHtml(true);
            gauge.label(i)
                .hAlign('center')
                .vAlign('middle')
                .anchor('right-center')
                .padding(0, 10)
                .height(width / 2 + '%')
                .offsetY(radius + '%')
                .offsetX(0);
        }

        gauge.bar(i).dataIndex(i)
            .radius(radius)
            .width(width)
            .fill(palette.itemAt(i))
            .stroke(null)
            .zIndex(5);
        gauge.bar(i + 100).dataIndex(5)
            .radius(radius)
            .width(width)
            .fill('#F5F4F4')
            .stroke(stroke)
            .zIndex(4);

        return gauge.bar(i)
    };

    anychart.onDocumentReady(function() {
        var gauge = anychart.gauges.circular();
        gauge.data(dataSet);
        gauge.fill('#fff')
            .stroke(null)
            .padding(0)
            .margin(100)
            .startAngle(0)
            .sweepAngle(270);

        var axis = gauge.axis().radius(100).width(1).fill(null);
        axis.scale()
            .minimum(0)
            .maximum(100)
            .ticks({
                interval: 1
            })
            .minorTicks({
                interval: 1
            });
        axis.labels().enabled(false);
        axis.ticks().enabled(false);
        axis.minorTicks().enabled(false);
        makeBarWithBar(gauge, 80, 0, 17, true);
        makeBarWithBar(gauge, 60, 1, 17, true);
        makeBarWithBar(gauge, 40, 2, 17, true);
        makeBarWithBar(gauge, 20, 3, 17, true);

        gauge.margin(50);

        gauge.container('donut-chart');
        gauge.draw();
    });
}

function loadProjectDonut() {
    var donutChart = c3.generate({
        bindto: '#project-donut',
        color: {
            pattern: ['#196dc1', '#3b8ad9', '#7bc0f7', '#f18226', '#fa9d00', '#ffdb69', '#61737b', '#a6b3b3']
        },
        data: {
            columns: [
                ["Kwale", 5],
                ["Akri", 15],
                ["Ebocha", 20],
            ],
            type: 'donut',
        },
        donut: {
            title: "$79.5M",
            label: {
                format: function (value, ratio, id) {
                    return '';
                }
            }
        },
        legend: {
            show: false
        }
    });

    // Instantiate and draw our chart, passing in some options.
    setTimeout(function () {
        donutChart.load({
            columns: [

                ["Samabri", 2],
                ["Idu", 27],
                ["Brass Fire", 10],
                ["Brass BOP", 6],
                ["Brass Tank", 15],
            ]
        });
    }, 1500);

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function () {
        donutChart.resize();
    });
}