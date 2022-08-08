package OtherProtocols

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random


class WebSocketEvents extends Simulation  {

  val httpProtocol = http.baseUrl("wss://echo.websocket.events/").wsBaseUrl("wss://echo.websocket.events/")
      .header("Connection","Upgrade")
      .header("Sec-Websocket-Accept","cFqgAKOdJtO696vpxOmKStuvnyE=")
      .header("Upgrade","websocket")
      .header("Via","vegur")

  val scn = scenario("testwebscoket").pause(2)
    //.exec(http("firstewq").get("/"))

    .exec(ws("opensocket").connect("/.ws")
      .onConnected(exec(ws("sendmessage").sendText("hello")).pause(2)
          .exec(ws("send2ndmessage").sendText("I am taufee")
            .await(20)(ws.checkTextMessage("check1").check(regex(".*taufee.*").saveAs("mymessages")))
          )))
    .exec(session=>
    {
      println("hello"+ session("mymessages").as[String])
      session
    }
    )

    .exec(ws("closeconnection").close)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}
