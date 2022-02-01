import React, { useState, useEffect } from "react";
import "./Models.css";
import { Carousel } from "react-bootstrap";
import SpeedIcon from "@mui/icons-material/Speed";
import CloudIcon from "@mui/icons-material/Cloud";
import WifiIcon from "@mui/icons-material/Wifi";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HorizontalInfo from "../../components/Info/Horizontal/HorizontalInfo";
import Verticalinfo from "../../components/Info/Vertical/Verticalinfo";
import ExperienceModel from "../../components/ExperienceModel/ExperienceModel";

function Models() {
  const [image, setImage] = useState("");
  const [intImage, setIntImage] = useState("");
  const [TyImage, setTyImage] = useState("");
  const [productImage, setProductImage] = useState({
    one: "",
    two: "",
    sx: "",
    ty: "",
    experience: "",
  });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [miles, setMiles] = useState("");
  const [z60, setZ60] = useState("");
  const [speed, setSpeed] = useState("");
  const [hp, setHp] = useState("");

  const [xs, setXs] = useState(true);
  const [Toy, setToy] = useState(false);
  const [animation, setAnimation] = useState(false);

  const prop = window.location.pathname.split("/")[2];
  const model = prop.toUpperCase;
  const height = window.innerHeight;

  function handleAnimateScrollCar() {
    if (
      window.pageYOffset > height - 200 &&
      window.pageYOffset < 2 * height - 200
    ) {
      setAnimation(true);
      console.log(animation);
      if (
        !(window.pageYOffset > height - 200) &&
        !(window.pageYOffset < 2 * height - 200)
      ) {
        setAnimation(false);
        console.log(animation);
      }
    } else {
      setAnimation(false);
    }
  }

  function handleProps() {
    if (prop === "s") {
      setImage(
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/06af56e3-91c4-4bad-8d2e-0a24f64ec2a8/bvlatuR/std/2880x1800/MS-Exterior-Hero-Desktop"
      );
      setIntImage(
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
      );
      setProductImage({
        experience:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/1c9e3fa8-7eba-4d75-bf00-03a3dbdd6d06/bvlatuR/std/1660x920/MS-Order-Hero-Desktop",
      });

      setTitle("Model S");
      setDesc("Plaid");

      setMiles("396 mi");
      setZ60("1.99 s");
      setSpeed("200 mph");
      setHp("1,020 hp");
    } else if (prop === "x") {
      setImage(
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop"
      );
      setIntImage(
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/177c0faf-b852-47ea-a218-394368e15a20/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
      );
      setProductImage({
        sx: "https://tesla-cdn.thron.com/delivery/public/image/tesla/06e710a1-0428-45e9-8945-580e80d77b55/bvlatuR/std/2880x1800/MS-Performance-Hero-Desktop",
        experience:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/f63a4f07-09f2-486b-b92f-bafdbcd2e4d3/bvlatuR/std/1660x920/MX-Order-Hero-Desktop",
      });

      setTitle("Model X");
      setDesc("Plaid");

      setMiles("396 mi");
      setZ60("1.99 s");
      setSpeed("200 mph");
      setHp("1,020 hp");
    } else if (prop === "3") {
      setImage(
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-tesla-model-3-mmp-1-1640025520.jpg"
      );
      setTyImage("https://1reddrop.com/wp-content/uploads/2018/09/hero.png");
      setProductImage({
        one: "https://tesla-cdn.thron.com/delivery/public/image/tesla/3489a82e-b19c-457a-86a4-7ea9ac91aa1c/bvlatuR/std/1920x1080/lhd-performance-hero-desktop",
        two: "https://tesla-cdn.thron.com/delivery/public/image/tesla/02b9fe62-2569-4fc8-bfa1-a8f8cdd9d48e/bvlatuR/std/1440x900/lhd-awd-hero-desktop",
        experience:
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/457dd9fa-6e32-43b1-a6cf-9b3d76e9e181/bvlatuR/std/2232x720/global-order-hero",
      });

      setTitle("Model 3");
      setDesc("Plaid");

      setMiles("396 mi");
      setZ60("1.99 s");
      setSpeed("200 mph");
      setHp("1,020 hp");

      setXs(false);
      setToy(false);
    } else if (prop === "y") {
      setImage(
        "https://g.acdn.no/obscura/API/dynamic/r1/nadp/tr_2000_2000_s_f/0000/2020/03/12/3423935772/1/original/17505040.jpg?chk=D521E3"
      );
      setTyImage(
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/542d14c3-5711-4655-a18a-92508f4cb322/bvlatuR/std/960x540/safety-design-5-airbags-poster"
      );
      setProductImage({
        one: "",
        two: "https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2",
        experience:
          "https://www.tesla.com/sites/default/files/drupal8/modely/ModelY_Order_Hero.jpg",
      });

      setTitle("Model Y");
      setDesc("Plaid");

      setMiles("396 mi");
      setZ60("1.99 s");
      setSpeed("200 mph");
      setHp("1,020 hp");

      setXs(false);
      setToy(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleAnimateScrollCar);
  }, [height]);

  useEffect(() => {
    handleProps();
  }, [image]);
  return (
    <div>
      <section
        className="modelTheader"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="titleModel"
          style={{ color: prop === "y" ? "white" : "#393c41" }}
        >
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div className="descModel">
          <div className="miles">
            <h1>{miles}</h1>
          </div>
          <div className="mph">
            <h1>{z60}</h1>
          </div>
          <div className="topS">
            <h1>{speed}</h1>
          </div>
          <div className="peakP">
            <h1>{hp}</h1>
          </div>
          <div className="orderNow">
            <button>Order Now</button>
          </div>
        </div>
      </section>
      {xs ? (
        <>
          <div
            className="interior"
            style={{ backgroundImage: `url(${intImage})` }}
          >
            <div className="interiorHeader">
              <h1>All new Interior</h1>
            </div>
          </div>
          <div className="partThree">
            <div className="carousel">
              <Carousel className="car" variant="light">
                <Carousel.Item>
                  <img
                    className="width"
                    src="https://shared.cdn.smp.schibsted.com/v2/images/7587c3fd-447d-40a0-939b-c0a874c2f07b?fit=crop&format=auto&h=914&w=1827&s=e74443532b76940d9fc0a2f9cfdf859a433f1570"
                    alt=""
                  />
                  <Carousel.Caption className="caption">
                    <h1>Cinematic Display</h1>
                    <p>
                      With 2200x1300 resolution, ultra bright, true colors and
                      exceptional responsiveness, the new center display is the
                      best screen to watch anywhere.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="width"
                    src="https://www.vibilagare.se/public/styles/facebook/public/2021-07/tesla%20yoke%20ratt.jpg?h=b62210cb&itok=9YulYHjQ"
                    alt=""
                  />
                  <Carousel.Caption className="caption">
                    <h1>Focus on Driving</h1>
                    <p>
                      The ultimate focus on driving: no stalks, no shifting.
                      Model S is the best car to drive, and the best car to be
                      driven in.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="width"
                    src="https://www.teslarati.com/wp-content/uploads/2021/01/Model-S-refresh-2021-Q4-2020-Tesla-2-c.jpg"
                    alt=""
                  />
                  <Carousel.Caption className="caption">
                    <h1>Redesigned Second Row</h1>
                    <p>
                      Seating for three adults, with extra legroom, headroom and
                      a stowable armrest with integrated storage and wireless
                      charging.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="width"
                    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/06699e35-5a96-4dc8-a690-e32b4acb4572/bvlatuR/std/2442x1124/MX-Interior-Carousel-C-Desktop"
                    alt=""
                  />
                  <Carousel.Caption className="caption">
                    <h1>Perfect Environment</h1>
                    <p>
                      Clean, powerful yet invisible cabin conditioning. Tri-zone
                      temperature controls, ventilated front seats and HEPA
                      filtration come standard.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="gallery">
            <div className="info">
              <div className="left">
                <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9865e92b-731c-4f1a-9430-e984ee0001ca/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop" />
              </div>
              <div className="right">
                <h1>Gaming anywhere</h1>
              </div>
            </div>
          </div>
          <section className="info">
            <div className="left">
              <h1>Stay Connected</h1>
            </div>
            <div className="right">
              <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/08d2e941-2be2-4e1a-bed9-924ac30fb115/bvlatuR/std/1040x584/MS-Interior-Grid-B-Desktop" />
            </div>
          </section>
          <section className="info">
            <div className="left">
              <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dcfc40cb-6b46-4be7-b173-be10e0c9143c/bvlatuR/std/1040x584/MS-Interior-Grid-C-Desktop" />
            </div>
            <div className="right">
              <h1>Your best audio system</h1>
            </div>
          </section>
          <section className="info">
            <div className="left">
              <h1>Real Storage</h1>
            </div>
            <div className="right">
              <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop" />
            </div>
          </section>
          <section
            className="stats"
            style={{
              backgroundImage: `url(${productImage.sx})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <span>
              <span>
                <SpeedIcon />
              </span>
              <span style={{ fontSize: "30px" }}>3.1 s</span>
              <p>
                Quickest acceleration—from zero to 60 mph* in as little as 3.1
                seconds
              </p>
            </span>
            <span>
              <h2>162 mph</h2>
              <p>
                Improved handdling and aerodynamics allow for a top speed of 162
                mph
              </p>
            </span>
            <span>
              <h2>AWD</h2>
              <p>
                Dual Motor All-Wheel Drive instantly controls traction and
                torque, in all weather conditions
              </p>
            </span>
          </section>
        </>
      ) : (
        <>
          <section className={Toy ? "statInfoY" : "statInfo3"}>
            <div className="statLeft">
              <img src={TyImage} />
              <div className={animation ? "ip" : null}>
                <p>Impact protection</p>
              </div>
              <div className={animation ? "rs" : null}>
                <p>Rigid Structure</p>
              </div>
              <div className={animation ? "lcg" : null}>
                <p>Very Low Rollover Risk</p>
              </div>
            </div>
            <div className="statRight">
              <span style={{ lineHeight: "1.5em" }}>
                <span style={{ fontSize: "20px", fontStyle: "oblique" }}>
                  Safety
                </span>
                <br />
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                  Built for Safety
                </span>
              </span>
              <span>
                <p style={{ marginTop: "20px", fontSize: "18px" }}>
                  Safety is the most important part of every Tesla. We design
                  our vehicles to
                  <a style={{ borderBottom: "1px solid black" }}>
                    {" "}
                    exceed safety standards
                  </a>
                </p>
              </span>
              <span>
                <span style={{ fontWeight: "bold" }}>5-star Rating</span>
                <br />
                <p style={{ marginTop: "20px", fontSize: "18px" }}>
                  Model
                  <span style={{ textTransform: "uppercase" }}> {prop} </span>
                  achieved NHTSA 5-star safety ratings in every category and
                  subcategory.
                </p>
              </span>
              <span>
                <span style={{ fontWeight: "bold" }}>Top Safety Pick+</span>
                <br />
                <span>
                  Model
                  <span style={{ textTransform: "uppercase" }}> {prop} </span>
                </span>
                received the IIHS Top Safety Pick+ award, with top ratings in
                all crashworthiness and front crash prevention categories.
              </span>
              <div className="statRightButton">
                <a className="statButton">Order Now</a>
              </div>
            </div>
          </section>

          <section
            style={{
              position: "relative",
              background: Toy ? "white" : `url(${productImage.one})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              height: "100vh",
              width: "100vw",
            }}
          >
            <span className={Toy ? "prodInfoy" : "prodInfo"}>
              {Toy ? (
                <>
                  <div>
                    <span
                      className="prodInfo-per"
                      style={{ lineHeight: "2em" }}
                    >
                      <span style={{ fontSize: "20px" }}>Utility</span>
                      <br />
                      <span style={{ fontSize: "40px" }}>
                        A place for Everything
                      </span>
                      <div
                        className="statRightButton"
                        style={{ marginTop: "50px" }}
                      >
                        <a className="statButton">Order Now</a>
                      </div>
                    </span>
                    <span className="prodInfo-perText">
                      <p>
                        Tesla All-Wheel Drive has two independent motors for
                        improved redundancy, each with only one moving part for
                        minimal maintenance and maximum durability. Unlike
                        traditional all-wheel drive systems, they digitally
                        control torque to the front and rear wheels for far
                        better handling and traction control.
                      </p>
                    </span>
                  </div>
                  <span className="imageProd">
                    <img
                      style={{ width: "65vw" }}
                      src="https://tesla-cdn.thron.com/delivery/public/image/tesla/9e4a894d-e1ea-4c66-99f5-9881f3482ddc/bvlatuR/std/1920x1080/Model-Y-Utility-Desktop-NA-KR"
                    />
                  </span>
                  <span></span>
                </>
              ) : (
                <>
                  <span>
                    <span>
                      <SpeedIcon />
                    </span>
                    <span style={{ fontSize: "30px" }}>3.1 s</span>
                    <p>
                      Quickest acceleration—from zero to 60 mph* in as little as
                      3.1 seconds
                    </p>
                  </span>
                  <span>
                    <h2>162 mph</h2>
                    <p>
                      Improved handdling and aerodynamics allow for a top speed
                      of 162 mph
                    </p>
                  </span>
                  <span>
                    <h2>AWD</h2>
                    <p>
                      Dual Motor All-Wheel Drive instantly controls traction and
                      torque, in all weather conditions
                    </p>
                  </span>
                </>
              )}
            </span>

            <div className={Toy ? "awdY" : "performance"}>
              <span>
                {Toy ? (
                  <p></p>
                ) : (
                  <>
                    <HorizontalInfo
                      title="Performance"
                      infoTitle="Quickest acceleration"
                      text="Model 3 comes with the option of dual motor all-wheel
                        drive, 20” Überturbine Wheels and Performance Brakes for
                        total control in all weather conditions. A carbon fiber
                        spoiler improves stability at high speeds, all allowing
                        Model 3 to accelerate from 0-60 mph* in as little as 3.1
                        seconds."
                    />
                  </>
                )}
              </span>
            </div>
          </section>

          <section
            style={{
              position: "relative",
              backgroundImage: `url(${productImage.two})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              height: "100vh",
              width: "100vw",
            }}
          >
            <span className="prodInfo">
              {Toy ? (
                <>
                  <span>
                    <h2>2</h2>
                    <p>
                      Independent motors digitally control torque to the front
                      and rear wheels
                    </p>
                  </span>
                  <span>
                    <h2>
                      <span>
                        <SpeedIcon />
                      </span>
                      <span style={{ fontSize: "30px" }}>3.1 s</span>
                    </h2>
                    <p>
                      Quickest acceleration—from zero to 60 mph* in as little as
                      3.5 seconds
                    </p>
                  </span>
                  <span>
                    <h2>
                      <CloudIcon />
                    </h2>
                    <p>
                      Unparalleled traction and control, in all weather
                      conditions
                    </p>
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <h2>2</h2>
                    <p>
                      Independent motors digitally control torque to the front
                      and rear wheels
                    </p>
                  </span>
                  <span>
                    <h2>10 ms</h2>
                    <p>
                      Dual motors respond to changing conditions in as little as
                      10 milliseconds
                    </p>
                  </span>
                  <span>
                    <h2>
                      <CloudIcon />
                    </h2>
                    <p>
                      Unparalleled traction and control, in all weather
                      conditions
                    </p>
                  </span>
                </>
              )}
            </span>

            <div className={Toy ? "awdY" : "performance"}>
              <span>
                {Toy ? (
                  <>
                    <HorizontalInfo
                      title="All-Wheel Drive"
                      infoTitle="Dual Motor"
                      text="Tesla All-Wheel Drive has two independent motors for
                      improved redundancy, each with only one moving part for
                      minimal maintenance and maximum durability. Unlike
                      traditional all-wheel drive systems, they digitally
                      control torque to the front and rear wheels for far
                      better handling and traction control."
                    />
                  </>
                ) : (
                  <>
                    <HorizontalInfo
                      title="All-Wheel drive"
                      infoTitle="Dual Motor"
                      text="Tesla All-Wheel Drive has two independent motors for
                        improved redundancy, each with only one moving part for
                        minimal maintenance and maximum durability. Unlike
                        traditional all-wheel drive systems, they digitally
                        control torque to the front and rear wheels for far
                        better handling and traction control."
                    />
                  </>
                )}
              </span>
            </div>
          </section>
          <section className="rangeY3">
            {Toy ? (
              <>
                <span
                  className="range"
                  style={{ width: "100vw", height: "100vh" }}
                >
                  <span className="videoLeft">
                    <video height={height} controls autoPlay loop muted>
                      <source src="https://tesla-cdn.thron.com/static/WVNSU3_Range_Desktop.mp4-2000_WJLESL.mp4?xseo=" />
                    </video>
                  </span>
                  <Verticalinfo
                    title="Range"
                    infoTitle="Go anywhere"
                    text=" Model Y is fully electric, so you never need to visit
                          a gas station again. If you charge overnight at home,
                          you can wake up to a full battery every morning. And
                          when you’re on the road, it’s easy to plug in along
                          the way—at any public station or with the Tesla
                          charging network. We currently have over 30,000
                          Superchargers worldwide, with six new locations
                          opening every week."
                  />
                </span>
              </>
            ) : (
              <>
                <span
                  className="range"
                  style={{ width: "100vw", height: "100vh" }}
                >
                  <span className="videoLeft">
                    <picture>
                      <source
                        srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/902cb2b4-3466-4286-bcdc-d1570856a77e/bvlatuR/std/960x1130/lhd-range-hero-mobile"
                        media="(max-width: 599px) and (orientation: portrait)"
                      />
                      <source
                        srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2b118a7-7e86-4e8f-b7af-092f3e64d847/bvlatuR/std/1254x1080/lhd-range-hero-desktop"
                        media="(max-width: 899px) and (orientation: portrait)"
                      />
                      <source
                        srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2b118a7-7e86-4e8f-b7af-092f3e64d847/bvlatuR/std/1254x1080/lhd-range-hero-desktop"
                        media="(min-width: 600px) and (orientation: portrait)"
                      />
                      <source
                        srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2b118a7-7e86-4e8f-b7af-092f3e64d847/bvlatuR/std/1254x1080/lhd-range-hero-desktop"
                        media="(min-width: 900px) and (orientation: landscape)"
                      />
                      <img
                        src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2b118a7-7e86-4e8f-b7af-092f3e64d847/bvlatuR/std/1254x1080/lhd-range-hero-desktop"
                        style={{
                          width: "78vw",
                          height: "110vh",
                        }}
                      />
                    </picture>
                  </span>
                  <Verticalinfo
                    title="Range"
                    infoTitle="Go anywhere"
                    text="Model Y is fully electric, so you never need to visit
                          a gas station again. If you charge overnight at home,
                          you can wake up to a full battery every morning. And
                          when you’re on the road, it’s easy to plug in along
                          the way—at any public station or with the Tesla
                          charging network. We currently have over 30,000
                          Superchargers worldwide, with six new locations
                          opening every week."
                  />
                </span>
              </>
            )}
          </section>
          <section className="autoPilot">
            <span className="autoPilotRight">
              <span>
                <h2>360°</h2>
                <p>
                  Rear, side and forward-facing cameras provide maximum
                  visibility
                </p>
              </span>
              <span>
                <h2>250m</h2>
                <p>Powerful visual processing at up to 250 meters of</p>
              </span>
              <span>
                <h2>Ultrasonic Sensors</h2>
                <p>
                  Detect nearby cars, prevent potential collisions and assist
                  with parking
                </p>
              </span>
            </span>
            <span className="autopPilotVideo">
              <video
                height={height}
                width="100%"
                controls
                autoPlay
                loop
                muted
                className="video"
              >
                <source src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo=" />
              </video>
            </span>
            <span>
              <HorizontalInfo
                title="Autopilot"
                infoTitle="Future of driving"
                text="Autopilot's advanced safety and convenience features are
                    designed to assist you with the most burdensome parts of
                    driving."
              />
            </span>
          </section>
          <section className="y3Interior">
            <span className="autoPilotLeft">
              <span>
                <h2>15 inch</h2>
                <p>A touchscreen display designed to improve over time</p>
              </span>
              <span>
                <h2>
                  <WifiIcon fontSize="large" />
                </h2>
                <p>
                  Over-the-air software updates introduce new features,
                  functionality and performance
                </p>
              </span>
              <span>
                <h2>
                  <WbSunnyIcon fontSize="large" />
                </h2>
                <p>
                  An expansive Glass Roof provides more headroom and UV
                  protection
                </p>
              </span>
            </span>
            <picture
              data-loaded="true"
              iesrc="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
            >
              <source
                media="(max-width: 599px) and (orientation: portrait)"
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
              />
              <source
                media="(max-width: 899px) and (orientation: portrait)"
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
              />
              <source
                media="(min-width: 600px) and (orientation: portrait)"
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/3e7921d7-252e-4fb8-97c1-c3d2d4c52ba5/bvlatuR/std/1536x2048/Model-Y-Interior-Hero-Mobile-NA-KR"
              />
              <source
                media="(min-width: 900px) and (orientation: landscape)"
                srcSet="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
              />
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8288d520-cd1a-468d-89eb-e73cfde99355/bvlatuR/std/2880x1800/Model-Y-Interior-Hero-Desktop-NA-KR"
                style={{ width: "100vw", height: "100vh" }}
              />
            </picture>
            <span style={{ width: "100vw" }}>
              <HorizontalInfo
                title="Interior"
                infoTitle="Built Around the Driver"
                text="With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky."
              />
            </span>
          </section>
        </>
      )}
      <ExperienceModel model={prop} image={productImage.experience} />
    </div>
  );
}

export default Models;
