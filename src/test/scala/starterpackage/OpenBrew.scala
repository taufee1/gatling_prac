package starterpackage

import io.gatling.core.Predef.{bodyString, *}
import io.gatling.http.Predef.*

import scala.concurrent.duration.*


class OpenBrew extends Simulation {

  val httpProtocol=http.baseUrl("https://api.openbrewerydb.org")

  val csvfeeder_obdb= csv("src/test/resources/data/obdb-id.csv").eager.circular

  val scn = scenario("find_breweries")
    .exec(http("all_breweries").get("/breweries")
    .check(bodyString.saveAs("ResponseBody1")))

    .pause(2)


    .feed(csvfeeder_obdb)
    .exec(http("id").get("/breweries/${obdb-id}")
      .check(status.is(200),responseTimeInMillis.lte(1600),bodyString.saveAs("ResponseBody")/*,bodyString.saveAs("BODY")*/))

    .exec { session =>
      println(session("ResponseBody").as[String])
      session }

    /*.exec(session => {
      val response = session("BODY").as[String]
      println(s"Response body: \n$response")
      session
    })
    def jsonPath = exec(http("BODY")
      .get("/breweries/${obdb-id}")
      .check(bodyString.saveAs("RESPONSE_DATA")))

    .exec(session => {
    println("Some Restful Service Response Body:")
    println(session("RESPONSE_DATA").as[String])
    session
  })*/
  setUp(scn.inject(atOnceUsers(5))).protocols(httpProtocol)

    }
