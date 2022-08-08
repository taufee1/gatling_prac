package com.gatling

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SSE extends Simulation {

	val httpProtocol = http
		.baseUrl("http://demo.howopensource.com")

	val scn = scenario("SSE")
		.exec(http("request_0")
			.get("/sse/"))
			

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}