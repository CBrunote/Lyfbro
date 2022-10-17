var cal = new CalHeatMap();

async function getCardio(){
    var requestUrl = 'http://localhost:3001/api/cardio/'
    return fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
};

var parser = function(data) {
    var stats = {};
    for (var d in data) {
        stats[data[d].date] = data[d].time_spent;
    }
    return stats;
};

async function createCardioGraph() {
    cal.init({
        data: await getCardio(),
        afterLoadData: parser,
        itemSelector: "#cal-heatmap",
        datatype: "json",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2022, 9, 13),
        cellSize: 15,
        cellRadius: 3,
        cellPadding: 5,
        range: 1,
        domainMargin: 20,
        animationDuration: 800,
        domainDynamicDimension: false,
        previousSelector: "#example-h-PreviousDomain-selector",
        nextSelector: "#example-h-NextDomain-selector",
        label: {
            position: "left",
            offset: {
                x: 20,
                y: 35
            },
            width: 110
        },
        legend: [00, 10, 20, 30]
    })
};

createCardioGraph()