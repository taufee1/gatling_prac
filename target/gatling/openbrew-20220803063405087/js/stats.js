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
        "total": "430",
        "ok": "554",
        "ko": "430"
    },
    "maxResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "791"
    },
    "meanResponseTime": {
        "total": "688",
        "ok": "819",
        "ko": "556"
    },
    "standardDeviation": {
        "total": "233",
        "ok": "214",
        "ko": "167"
    },
    "percentiles1": {
        "total": "673",
        "ok": "825",
        "ko": "446"
    },
    "percentiles2": {
        "total": "817",
        "ok": "952",
        "ko": "619"
    },
    "percentiles3": {
        "total": "1016",
        "ok": "1054",
        "ko": "757"
    },
    "percentiles4": {
        "total": "1066",
        "ok": "1074",
        "ko": "784"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 33
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
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1079",
        "ok": "1079",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "819",
        "ok": "819",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "percentiles1": {
        "total": "825",
        "ok": "825",
        "ko": "-"
    },
    "percentiles2": {
        "total": "952",
        "ok": "952",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1054",
        "ok": "1054",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1074",
        "ok": "1074",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 67
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
        "total": "430",
        "ok": "-",
        "ko": "430"
    },
    "maxResponseTime": {
        "total": "791",
        "ok": "-",
        "ko": "791"
    },
    "meanResponseTime": {
        "total": "556",
        "ok": "-",
        "ko": "556"
    },
    "standardDeviation": {
        "total": "167",
        "ok": "-",
        "ko": "167"
    },
    "percentiles1": {
        "total": "446",
        "ok": "-",
        "ko": "446"
    },
    "percentiles2": {
        "total": "619",
        "ok": "-",
        "ko": "619"
    },
    "percentiles3": {
        "total": "757",
        "ok": "-",
        "ko": "757"
    },
    "percentiles4": {
        "total": "784",
        "ok": "-",
        "ko": "784"
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
