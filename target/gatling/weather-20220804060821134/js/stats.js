var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "2",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "283",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "92"
    },
    "meanResponseTime": {
        "total": "188",
        "ok": "283",
        "ko": "92"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "188",
        "ok": "283",
        "ko": "92"
    },
    "percentiles2": {
        "total": "283",
        "ok": "283",
        "ko": "92"
    },
    "percentiles3": {
        "total": "283",
        "ok": "283",
        "ko": "92"
    },
    "percentiles4": {
        "total": "283",
        "ok": "283",
        "ko": "92"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
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
    "count": 2,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "2",
        "ko": "2"
    }
},
contents: {
"req_weather-aab92": {
        type: "REQUEST",
        name: "weather",
path: "weather",
pathFormatted: "req_weather-aab92",
stats: {
    "name": "weather",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles2": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles3": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "percentiles4": {
        "total": "283",
        "ok": "283",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}
    },"req_getsearchid-7a221": {
        type: "REQUEST",
        name: "getsearchid",
path: "getsearchid",
pathFormatted: "req_getsearchid-7a221",
stats: {
    "name": "getsearchid",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "92",
        "ok": "-",
        "ko": "92"
    },
    "maxResponseTime": {
        "total": "92",
        "ok": "-",
        "ko": "92"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "-",
        "ko": "92"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "92",
        "ok": "-",
        "ko": "92"
    },
    "percentiles2": {
        "total": "92",
        "ok": "-",
        "ko": "92"
    },
    "percentiles3": {
        "total": "92",
        "ok": "-",
        "ko": "92"
    },
    "percentiles4": {
        "total": "92",
        "ok": "-",
        "ko": "92"
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
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "-",
        "ko": "2"
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
