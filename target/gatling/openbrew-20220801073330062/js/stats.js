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
        "total": "258",
        "ok": "258",
        "ko": "802"
    },
    "maxResponseTime": {
        "total": "1390",
        "ok": "280",
        "ko": "1390"
    },
    "meanResponseTime": {
        "total": "632",
        "ok": "265",
        "ko": "999"
    },
    "standardDeviation": {
        "total": "416",
        "ok": "10",
        "ko": "276"
    },
    "percentiles1": {
        "total": "541",
        "ok": "258",
        "ko": "806"
    },
    "percentiles2": {
        "total": "805",
        "ok": "269",
        "ko": "1098"
    },
    "percentiles3": {
        "total": "1244",
        "ok": "278",
        "ko": "1332"
    },
    "percentiles4": {
        "total": "1361",
        "ok": "280",
        "ko": "1378"
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
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles1": {
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "percentiles2": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles3": {
        "total": "278",
        "ok": "278",
        "ko": "-"
    },
    "percentiles4": {
        "total": "280",
        "ok": "280",
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
        "total": "802",
        "ok": "-",
        "ko": "802"
    },
    "maxResponseTime": {
        "total": "1390",
        "ok": "-",
        "ko": "1390"
    },
    "meanResponseTime": {
        "total": "999",
        "ok": "-",
        "ko": "999"
    },
    "standardDeviation": {
        "total": "276",
        "ok": "-",
        "ko": "276"
    },
    "percentiles1": {
        "total": "806",
        "ok": "-",
        "ko": "806"
    },
    "percentiles2": {
        "total": "1098",
        "ok": "-",
        "ko": "1098"
    },
    "percentiles3": {
        "total": "1332",
        "ok": "-",
        "ko": "1332"
    },
    "percentiles4": {
        "total": "1378",
        "ok": "-",
        "ko": "1378"
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
