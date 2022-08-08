var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "268",
        "ok": "268",
        "ko": "299"
    },
    "maxResponseTime": {
        "total": "1236",
        "ok": "1236",
        "ko": "834"
    },
    "meanResponseTime": {
        "total": "619",
        "ok": "664",
        "ko": "574"
    },
    "standardDeviation": {
        "total": "307",
        "ok": "384",
        "ko": "191"
    },
    "percentiles1": {
        "total": "531",
        "ok": "596",
        "ko": "466"
    },
    "percentiles2": {
        "total": "802",
        "ok": "1061",
        "ko": "789"
    },
    "percentiles3": {
        "total": "1180",
        "ok": "1209",
        "ko": "818"
    },
    "percentiles4": {
        "total": "1225",
        "ok": "1231",
        "ko": "831"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 15
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "2.5",
        "ko": "2.5"
    }
},
contents: {
"req_all-breweries-d72c1": {
        type: "REQUEST",
        name: "all_breweries",
path: "all_breweries",
pathFormatted: "req_all-breweries-d72c1",
stats: {
    "name": "all_breweries",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "268",
        "ok": "268",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1236",
        "ok": "1236",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "664",
        "ok": "664",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "384",
        "ok": "384",
        "ko": "-"
    },
    "percentiles1": {
        "total": "596",
        "ok": "596",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1061",
        "ok": "1061",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1209",
        "ok": "1209",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6,
    "percentage": 60
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "2.5",
        "ko": "-"
    }
}
    },"req_id-b80bb": {
        type: "REQUEST",
        name: "id",
path: "id",
pathFormatted: "req_id-b80bb",
stats: {
    "name": "id",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "299",
        "ok": "-",
        "ko": "299"
    },
    "maxResponseTime": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "meanResponseTime": {
        "total": "574",
        "ok": "-",
        "ko": "574"
    },
    "standardDeviation": {
        "total": "191",
        "ok": "-",
        "ko": "191"
    },
    "percentiles1": {
        "total": "466",
        "ok": "-",
        "ko": "466"
    },
    "percentiles2": {
        "total": "789",
        "ok": "-",
        "ko": "789"
    },
    "percentiles3": {
        "total": "818",
        "ok": "-",
        "ko": "818"
    },
    "percentiles4": {
        "total": "831",
        "ok": "-",
        "ko": "831"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.5",
        "ok": "-",
        "ko": "2.5"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
