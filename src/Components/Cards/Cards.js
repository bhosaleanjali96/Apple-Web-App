import chevronRight from "../../Images/chevronRight.svg";
import macBook from "../../Images/macBook.jpeg";

function Cards() {
  return (
    <div>
      {/* section-5-card  */}
      <div className="container-fluid section-5-card">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <div className="col">
            {/* card-0  */}
            <div className="card ">
              <h1 className="title-1">MacBook Pro</h1>
              <h2 className="title-2">Supercharged by M2 Pro and M2 Max</h2>
              <div>
                <a className="card-link" href="#"  >
                  Learn more
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>


                <a className="card-link" href="#">
                  Buy
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>
              </div>

              <img
                className="card-img"
                src={macBook}
                alt=""
                className="w-100"
                style={{ height: "300px", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="col">
            {/* card-1  */}
            <div className="card mt-3 card-1">
              <h1 className="title-1">
                <a className="card-apple-logo" href="#">
                  <i className="fab fa-apple"></i>
                </a>
                Watch
              </h1>
              <h2 className="ultra-text">ULTRA</h2>
              <h2 className="title-2">Adventure awaits.</h2>
              <div>
                <a className="card-link" href="#">
                  Learn more
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>

                <a className="card-link" href="#">
                  Buy
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>
              </div>

              <div className="card-img">
                <img
                  // className="card-img"
                  src="https://www.apple.com/in/apple-watch-ultra/images/overview/hero/hero_watch_ultra__cbu8ymf4a8xe_large_2x.jpg"
                  alt=""
                  className="w-100"
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            {/*  card-2  */}
            <div className="card mt-3 card-position">
              <h1 className="title-1">HomePod</h1>
              <h2 className="title-2">Profound sound.</h2>
              <div>
                <a className="card-link" href="#">
                  Learn more
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>

                <a className="card-link" href="#">
                  Buy
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>
              </div>

              <div>
                <img
                  src="https://www.apple.com/in/homepod-2nd-generation/images/overview/homekit__e4awkkuaslua_large_2x.jpg"
                  alt=""
                  className="w-100"
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            {/*  card-3  */}
            <div className="card mt-3">
              <h1 className="title-1">iPad Pro</h1>
              <h2 className="title-2">Supercharged by M2</h2>
              <div>
                <a className="card-link" href="#">
                  Learn more
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>

                <a className="card-link" href="#">
                  Buy
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>
              </div>

              <div className="card-img">
                <img
                  className="card-img"
                  src="https://www.apple.com/v/ipad-pro/al/images/overview/cameras/cameras_lidar_2__e7w8a6mhdze6_large_2x.jpg"
                  alt=""
                  className="w-100"
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            {/*  card-4  */}
            <div className="card mt-3">
              <h1 className="title-card-4">
                <a className="card-4-apple-logo" href="#">
                  <i className="fab fa-apple"></i>
                </a>
                WATCH
              </h1>
              <h2 className="series-8-text">SERIES 8</h2>
              <h2 className="title-2">A healthy leap ahead.</h2>
              <div>
                <a className="card-link" href="#">
                  Learn more
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>

                <a className="card-link" href="#">
                  Buy
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>
              </div>

              <div className="card-img">
                <img
                  className="card-img"
                  src="https://www.apple.com/in/apple-watch-series-8/images/overview/connected/connected_apple_pay__d22xygz7ces2_large_2x.jpg"
                  alt=""
                  className="w-100"
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          <div className="col">
            {/*  card-5  */}
            <div className="card mt-3 card-1">
              <h1 className="title-1">iPad</h1>
              <h2 className="title-2">Lovable. Drawable. Magical.</h2>
              <div>
                <a className="card-link" href="#">
                  Learn more
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>

                <a className="card-link" href="#">
                  Buy
                  <img
                    className="chevron-right-img"
                    src={chevronRight}
                    alt=""
                  />
                </a>
              </div>

              <div className="card-img">
                <img
                  className="card-img"
                  src="https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_large_2x.jpg"
                  alt=""
                  className="w-100"
                  style={{ height: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  section-5 end  */}
    </div>
  );
}

export default Cards;
