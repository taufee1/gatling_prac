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
        "total": "300",
        "ok": "300",
        "ko": "426"
    },
    "maxResponseTime": {
        "total": "880",
        "ok": "822",
        "ko": "880"
    },
    "meanResponseTime": {
        "total": "568",
        "ok": "440",
        "ko": "696"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "170",
        "ko": "191"
    },
    "percentiles1": {
        "total": "539",
        "ok": "329",
        "ko": "824"
    },
    "percentiles2": {
        "total": "823",
        "ok": "562",
        "ko": "855"
    },
    "percentiles3": {
        "total": "873",
        "ok": "711",
        "ko": "877"
    },
    "percentiles4": {
        "total": "879",
        "ok": "800",
        "ko": "879"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
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
        "total": "300",
        "ok": "300",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "440",
        "ok": "440",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "170",
        "ko": "-"
    },
    "percentiles1": {
        "total": "329",
        "ok": "329",
        "ko": "-"
    },
    "percentiles2": {
        "total": "562",
        "ok": "562",
        "ko": "-"
    },
    "percentiles3": {
        "total": "711",
        "ok": "711",
        "ko": "-"
    },
    "percentiles4": {
        "total": "800",
        "ok": "800",
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
        "total": "426",
        "ok": "-",
        "ko": "426"
    },
    "maxResponseTime": {
        "total": "880",
        "ok": "-",
        "ko": "880"
    },
    "meanResponseTime": {
        "total": "696",
        "ok": "-",
        "ko": "696"
    },
    "standardDeviation": {
        "total": "191",
        "ok": "-",
        "ko": "191"
    },
    "percentiles1": {
        "total": "824",
        "ok": "-",
        "ko": "824"
    },
    "percentiles2": {
        "total": "855",
        "ok": "-",
        "ko": "855"
    },
    "percentiles3": {
        "total": "877",
        "ok": "-",
        "ko": "877"
    },
    "percentiles4": {
        "total": "879",
        "ok": "-",
        "ko": "879"
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
