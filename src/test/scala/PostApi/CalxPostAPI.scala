package PostApi

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class CalxPostAPI extends Simulation {

  val httpProtocol = http.baseUrl("http://api.mathjs.org").header("content-type","application/json")

  def randString=Random.alphanumeric.take(4).mkString

  //val csvfeeder = csv("src/test/resources/data/calxjson.csv").circular
  val linkshorten = csv("data/calxjson.csv").circular

  val scn = scenario ("calculate")
    .feed(linkshorten)
    //.feed(csvfeeder)
    .exec(http("function").post("/v4/")
      .body(StringBody("""{"expr":["a = 1.2 * (2 + 4.5)","a / 2","5.08 cm in inch","sin(45 deg) ^ 2","9 / 3 + 2i","b = [-1, 2; 3, 1]","det(b)"],"precision": 14}""")).asJson

      //.body(ElFileBody("data/ELfile.json")).asJson
      //.body(StringBody("""{"expr":["a = 1.2 * (2 + 4.5)","a / 2","5.08 cm in inch","sin(45 deg) ^ 2","9 / 3 + 2i","b = [-1, 2; 3, 1]","det(b)"],"precision": 14}""")).asJson
      //.body(RawFileBody("bodies/myjson.json"))
    .check(/*jsonPath("$.expr").findAll.saveAs("expr")),*/bodyString.saveAs("myjson")))
  //$.expr


  //.body(ElFileBody("#{payloadPath}"))
    .exec(session => {
      println(session("myjson").as[String])
      session
    })
  setUp(scn.inject(atOnceUsers(4))).protocols(httpProtocol)
}
