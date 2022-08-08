var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "925",
        "ok": "925",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "percentiles1": {
        "total": "491",
        "ok": "491",
        "ko": "-"
    },
    "percentiles2": {
        "total": "651",
        "ok": "651",
        "ko": "-"
    },
    "percentiles3": {
        "total": "917",
        "ok": "917",
        "ko": "-"
    },
    "percentiles4": {
        "total": "923",
        "ok": "923",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 20
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
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
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "925",
        "ok": "925",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "640",
        "ok": "640",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "percentiles1": {
        "total": "648",
        "ok": "648",
        "ko": "-"
    },
    "percentiles2": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "percentiles3": {
        "total": "921",
        "ok": "921",
        "ko": "-"
    },
    "percentiles4": {
        "total": "924",
        "ok": "924",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
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
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "813",
        "ok": "813",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "184",
        "ok": "184",
        "ko": "-"
    },
    "percentiles1": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "percentiles2": {
        "total": "478",
        "ok": "478",
        "ko": "-"
    },
    "percentiles3": {
        "total": "671",
        "ok": "671",
        "ko": "-"
    },
    "percentiles4": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
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
