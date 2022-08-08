var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1317",
        "ok": "1317",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "801",
        "ok": "801",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "413",
        "ok": "413",
        "ko": "-"
    },
    "percentiles1": {
        "total": "984",
        "ok": "984",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1029",
        "ok": "1029",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1303",
        "ok": "1303",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.2",
        "ok": "1.2",
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
        "total": "3",
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "975",
        "ok": "975",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles1": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles2": {
        "total": "607",
        "ok": "607",
        "ko": "-"
    },
    "percentiles3": {
        "total": "901",
        "ok": "901",
        "ko": "-"
    },
    "percentiles4": {
        "total": "960",
        "ok": "960",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 67
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 33
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
        "total": "0.6",
        "ok": "0.6",
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
        "ok": "3",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "992",
        "ok": "992",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1317",
        "ok": "1317",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1117",
        "ok": "1117",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1041",
        "ok": "1041",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1179",
        "ok": "1179",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1289",
        "ok": "1289",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1311",
        "ok": "1311",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 67
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.6",
        "ok": "0.6",
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
