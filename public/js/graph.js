var cal = new CalHeatMap();


var cardioData = [
    {
        date: 1665619200,
        time_spent: 0,
        category_id: 3,
        feeling_id: 1,
        user_id: 1
    },
    {
        date: 1665705600,
        time_spent: 10,
        category_id: 3,
        feeling_id: 1,
        user_id: 6
    },
    {
        date: 1665792000,
        time_spent: 0,
        category_id: 3,
        feeling_id: 1,
        user_id: 2
    },
    {
        date: 1665878400,
        time_spent: 30,
        category_id: 3,
        feeling_id: 1,
        user_id: 3
    },
    {
        date: 1665964800,
        time_spent: 30,
        category_id: 3,
        feeling_id: 1,
        user_id: 3
    },
    {
        date: 1666051200,
        time_spent: 30,
        category_id: 3,
        feeling_id: 1,
        user_id: 6
    },
    {
        date: 1666137600,
        time_spent: 30,
        category_id: 3,
        feeling_id: 1,
        user_id: 1
    },
]

var parser = function(data) {
    var stats = {};
    for (var d in data) {
        stats[data[d].date] = data[d].time_spent;
    }
    return stats;
};



cal.init({
    data: cardioData,
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
});
