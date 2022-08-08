var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "3",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "241",
        "ok": "241",
        "ko": "425"
    },
    "maxResponseTime": {
        "total": "796",
        "ok": "532",
        "ko": "796"
    },
    "meanResponseTime": {
        "total": "503",
        "ok": "340",
        "ko": "666"
    },
    "standardDeviation": {
        "total": "225",
        "ok": "136",
        "ko": "171"
    },
    "percentiles1": {
        "total": "479",
        "ok": "247",
        "ko": "778"
    },
    "percentiles2": {
        "total": "717",
        "ok": "390",
        "ko": "787"
    },
    "percentiles3": {
        "total": "792",
        "ok": "504",
        "ko": "794"
    },
    "percentiles4": {
        "total": "795",
        "ok": "526",
        "ko": "796"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 50
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
    "count": 3,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.5",
        "ok": "0.75",
        "ko": "0.75"
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
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "241",
        "ok": "241",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "532",
        "ok": "532",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "340",
        "ok": "340",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "percentiles1": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles2": {
        "total": "390",
        "ok": "390",
        "ko": "-"
    },
    "percentiles3": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "percentiles4": {
        "total": "526",
        "ok": "526",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.75",
        "ok": "0.75",
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
        "total": "3",
        "ok": "0",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "425",
        "ok": "-",
        "ko": "425"
    },
    "maxResponseTime": {
        "total": "796",
        "ok": "-",
        "ko": "796"
    },
    "meanResponseTime": {
        "total": "666",
        "ok": "-",
        "ko": "666"
    },
    "standardDeviation": {
        "total": "171",
        "ok": "-",
        "ko": "171"
    },
    "percentiles1": {
        "total": "778",
        "ok": "-",
        "ko": "778"
    },
    "percentiles2": {
        "total": "787",
        "ok": "-",
        "ko": "787"
    },
    "percentiles3": {
        "total": "794",
        "ok": "-",
        "ko": "794"
    },
    "percentiles4": {
        "total": "796",
        "ok": "-",
        "ko": "796"
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
    "count": 3,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.75",
        "ok": "-",
        "ko": "0.75"
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
