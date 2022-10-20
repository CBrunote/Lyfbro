var cal = new CalHeatMap();
var userData = JSON.parse(localStorage.getItem("User"))
var userID = userData.id

console.log(userData)
console.log(userID)


var parser = function(data) {
    var stats = {};
    for (var d in data) {
        stats[data[d].date] = data[d].time_spent;
    }
    return stats;
};

async function getCardio(){
    var requestUrl = `https://lyfbro99.herokuapp.com/api/cardio/${userID}`
    return fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
};

async function getStrength(){
    var requestUrl = `https://lyfbro99.herokuapp.com/api/strength/${userID}`
    return fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
};

async function getMindfulness(){
    var requestUrl = `https://lyfbro99.herokuapp.com/api/mindfulness/${userID}`
    return fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
};

async function createCardioGraph() {
    cal.init({
        data: await getCardio(),
        afterLoadData: parser,
        itemSelector: "#cardio-heatmap",
        itemName: ["minute", "minutes"],
        datatype: "json",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2022, 9, 13),
        cellSize: 20,
        cellRadius: 3,
        cellPadding: 5,
        range: 1,
        subDomainTextFormat: "%d",
        domainMargin: 20,
        animationDuration: 800,
        domainDynamicDimension: false,
        previousSelector: "#example-h-PreviousDomain-selector",
        nextSelector: "#example-h-NextDomain-selector",
        label: {
            position: "center",
            width: 110
        },
        legendColors: {
            min: "#6EE7B7",
            max: "#064E3B",
            empty: "white"
        },
        legend: [1, 10, 20, 30],
        legendCellSize: 10,
        legendHorizontalPosition: "right",
        tooltip: false,
        weekStartOnMonday: false,
    })
};

async function createStrengthGraph() {
    cal.init({
        data: await getStrength(),
        afterLoadData: parser,
        itemSelector: "#strength-heatmap",
        itemName: ["minute", "minutes"],
        datatype: "json",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2022, 9, 13),
        cellSize: 20,
        cellRadius: 3,
        cellPadding: 5,
        range: 1,
        subDomainTextFormat: "%d",
        domainMargin: 20,
        animationDuration: 800,
        domainDynamicDimension: false,
        previousSelector: "#example-h-PreviousDomain-selector",
        nextSelector: "#example-h-NextDomain-selector",
        label: {
            position: "center",
            width: 110
        },
        legendColors: {
            min: "#F87171",
            max: "#7F1D1D",
            empty: "white"
        },
        legend: [1, 10, 20, 30],
        legendCellSize: 10,
        legendHorizontalPosition: "right",
        tooltip: false,
        weekStartOnMonday: false,
    })
};

async function createMindfulnessGraph() {
    cal.init({
        data: await getMindfulness(),
        afterLoadData: parser,
        itemSelector: "#mindfulness-heatmap",
        itemName: ["minute", "minutes"],
        datatype: "json",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2022, 9, 13),
        cellSize: 20,
        cellRadius: 3,
        cellPadding: 5,
        range: 1,
        subDomainTextFormat: "%d",
        domainMargin: 20,
        animationDuration: 800,
        domainDynamicDimension: false,
        previousSelector: "#example-h-PreviousDomain-selector",
        nextSelector: "#example-h-NextDomain-selector",
        label: {
            position: "center",
            width: 110
        },
        legendColors: {
            min: "#D8B4FE",
            max: "#581C87",
            base: "#efefef"
        },
        legend: [1, 10, 20, 30],
        legendCellSize: 10,
        legendHorizontalPosition: "right",
        tooltip: false,
        weekStartOnMonday: false,
    })
};

createCardioGraph()
createMindfulnessGraph()
createStrengthGraph()