package OpenWeather

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class Weather extends Simulation {

  var firstId=""
  var secondId=""

  val httpProtocol = http.baseUrl("http://api.openweathermap.org")

  val appid = "96277d36af4544aea743f78cb0291752"

  val csvfeeder= csv("src/test/resources/data/city.csv").circular

  val scn = scenario("REQUEST").feed(csvfeeder)
    .exec(http("weather").get("/data/2.5/weather?q=${city} &appid=96277d36af4544aea743f78cb0291752")
    .check(jsonPath("$.sys..id").findAll.saveAs("search_ids"),(bodyString.saveAs("myjson"))))
//.check(bodyString.saveAs("myResponse"))

    //.check(jsonPath().find.saveAs("myresponse")))
      //.check(status.in(200,201,301),responseTimeInMillis.lte(1600),substring("temp").exists))
    .exec ( session =>
      {
        val search_ids=session("search_ids").as[Vector[String]]
        firstId =search_ids(0)
        secondId=search_ids(1)

        println(session("myjson").as[String])
        println(firstId)
        println(secondId)
        println(search_ids)

      session.set("search_ids", search_ids)
    })

    .exec(http("getsearchid").get("/${search_ids}"))
  /*def jsonPath = exec(http("BODY")
    .get("/data/2.5/weather?q=${city} &appid=96277d36af4544aea743f78cb0291752")
    .check(bodyString.saveAs("RESPONSE_DATA")))

    .exec(session => {
      println("Some Restful Service Response Body:")
      println(session("RESPONSE_DATA").as[String])
      session
    })
    .exec{session=>
      val response1 = session("myresponse").as[String]

      println(response1)
      session
    }*/


    setUp(scn.inject(atOnceUsers(2))).protocols(httpProtocol)
}
//http://api.openweathermap.org/data/2.5/weather?q=Delhi%20&appid=96277d36af4544aea743f78cb0291752