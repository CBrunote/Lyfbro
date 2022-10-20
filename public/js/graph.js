var cardioMap = new CalHeatMap();
var strengthMap = new CalHeatMap();
var mindfulnessMap = new CalHeatMap();

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
    var requestUrl = `/api/cardio/${userID}`
    return fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
};

async function getStrength(){
    var requestUrl = `/api/strength/${userID}`
    return fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
};

async function getMindfulness(){
    var requestUrl = `/api/mindfulness/${userID}`
    return fetch(requestUrl)
        .then (function (response) {
            return response.json();
        })
};

async function createCardioGraph() {
    cardioMap.init({
        data: await getCardio(),
        afterLoadData: parser,
        itemSelector: "#cardio-heatmap",
        itemName: ["minute", "minutes"],
        datatype: "json",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2022, 9, 13),
        cellSize: 35,
        cellRadius: 3,
        cellPadding: 5,
        range: 1,
        subDomainTextFormat: "%d",
        animationDuration: 800,
        previousSelector: "#previousSelector-a-previous",
        nextSelector: "#previousSelector-a-next",
        label: {
            position: "top",
        },
        legendColors: {
            min: "#6EE7B7",
            max: "#064E3B",
            empty: "white"
        },
        legend: [1, 10, 20, 30],
        legendCellSize: 15,
        legendHorizontalPosition: "right",
        tooltip: true,
        weekStartOnMonday: false,
        itemNamespace: "cardio"
    })
};

async function createStrengthGraph() {
    strengthMap.init({
        data: await getStrength(),
        afterLoadData: parser,
        itemSelector: "#strength-heatmap",
        itemName: ["minute", "minutes"],
        datatype: "json",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2022, 9, 13),
        cellSize: 35,
        cellRadius: 3,
        cellPadding: 5,
        range: 1,
        subDomainTextFormat: "%d",
        animationDuration: 800,
        previousSelector: "#example-h-PreviousDomain-selector",
        nextSelector: "#example-h-NextDomain-selector",
        label: {
            position: "top",
        },
        legendColors: {
            min: "#F87171",
            max: "#7F1D1D",
            empty: "white"
        },
        legend: [1, 10, 20, 30],
        legendCellSize: 15,
        legendHorizontalPosition: "right",
        tooltip: true,
        weekStartOnMonday: false,
        itemNamespace: "strength"
    })
};

async function createMindfulnessGraph() {
    mindfulnessMap.init({
        data: await getMindfulness(),
        afterLoadData: parser,
        itemSelector: "#mindfulness-heatmap",
        itemName: ["minute", "minutes"],
        datatype: "json",
        domain: "month",
        subDomain: "x_day",
        start: new Date(2022, 9, 13),
        cellSize: 35,
        cellRadius: 3,
        cellPadding: 5,
        range: 1,
        subDomainTextFormat: "%d",
        animationDuration: 800,
        previousSelector: "#example-h-PreviousDomain-selector",
        nextSelector: "#example-h-NextDomain-selector",
        label: {
            position: "top",
        },
        legendColors: {
            min: "#D8B4FE",
            max: "#581C87",
            empty: "white",
        },
        legend: [1, 10, 20, 30],
        legendCellSize: 15,
        legendHorizontalPosition: "right",
        tooltip: true,
        weekStartOnMonday: false,
        itemNamespace: "mindfulness",
    })
};

createCardioGraph()
createMindfulnessGraph()
createStrengthGraph()