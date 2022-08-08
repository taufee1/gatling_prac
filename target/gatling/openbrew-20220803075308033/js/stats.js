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
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "457",
        "ok": "457",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "228",
        "ok": "228",
        "ko": "-"
    },
    "percentiles1": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "percentiles2": {
        "total": "579",
        "ok": "579",
        "ko": "-"
    },
    "percentiles3": {
        "total": "833",
        "ok": "833",
        "ko": "-"
    },
    "percentiles4": {
        "total": "862",
        "ok": "862",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 17,
    "percentage": 85
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 15
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
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "586",
        "ok": "586",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "percentiles1": {
        "total": "473",
        "ok": "473",
        "ko": "-"
    },
    "percentiles2": {
        "total": "572",
        "ok": "572",
        "ko": "-"
    },
    "percentiles3": {
        "total": "586",
        "ok": "586",
        "ko": "-"
    },
    "percentiles4": {
        "total": "586",
        "ok": "586",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
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
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "869",
        "ok": "869",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "285",
        "ok": "285",
        "ko": "-"
    },
    "percentiles1": {
        "total": "498",
        "ok": "498",
        "ko": "-"
    },
    "percentiles2": {
        "total": "755",
        "ok": "755",
        "ko": "-"
    },
    "percentiles3": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "percentiles4": {
        "total": "866",
        "ok": "866",
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
