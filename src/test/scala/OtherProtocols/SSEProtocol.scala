package OtherProtocols

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import scala.concurrent.duration.*
import javax.sound.sampled.AudioFormat.Encoding
import scala.language.postfixOps


class SSEProtocol extends Simulation  {

  val mycheck1= sse.checkMessage("checkid").check(jsonPath("$.id").find.saveAs("id"))
  val mycheck2= sse.checkMessage("checkdata").check(jsonPath("$.data").find.saveAs("data"))

  val httpConf = http.baseUrl("http://demo.howopensource.com")
    .acceptHeader("text/event-stream")
    .inferHtmlResources()
    .doNotTrackHeader("1")
    .userAgentHeader("Gatling2")
    .upgradeInsecureRequestsHeader("1")

  val scn = scenario("sse scenario")
    .exec(sse("sse_request").connect("/sse/stocks.php")
    .await(50)(sse.checkMessage("check_connect").check(regex(".*.*").exists)))
    

    .pause(5)
    .repeat(5){
    exec(sse("setcheck").setCheck.await(50)(mycheck1,mycheck2))
    .exec(session => {
      println(session("id").as[String])
      println(session("data").as[String])
      session
    })
    }
    .exec(sse("sse_close").close)

  //setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
  //http://demo.howopensource.com/sse/stocks.php

  //Start with 5 users,Increase 5 user every 10 second,Increased load run for 30 seconds,
  // Repeat until maximum 25 user,
  // Run the test for 10 minutes.

  setUp(scn.inject(
    atOnceUsers(5)
    ,nothingFor(30seconds) ,rampUsers(5)during(30seconds)
    ,nothingFor(30seconds) ,rampUsers(5)during(30seconds)
    ,nothingFor(30seconds) ,rampUsers(5)during(30seconds)
    ,nothingFor(30seconds) ,rampUsers(5)during(30seconds)
  )).protocols(httpConf).maxDuration(300seconds)

}
