import iphoneImg from "../../Images/iphone-img.jpg";
import iphone14Img from "../../Images/iphone14Img.jpg";
import chevronRight from "../../Images/chevronRight.svg";

function Home() {
  return (
    <div>
      {/*  section 3- iphone 14 pro banner */}
      <div className="section-3-banner text-center">
        <h1 className="title-1">iPhone 14 Pro</h1>
        <h2 className="title-2">Pro. Beyond.</h2>
        <button className="button-1">With superfast 5G*</button>
        <div className="image-container">
          <a
            className="learn-more-buy-links"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Learn more
            <img className="chevron-right-img" src={chevronRight} alt="" />
          </a>

          {/* learn more modal */}
          <div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      iPhone Offer With Banks Credit Cards
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h5>For EMI Tranactions</h5>
                    <h5>
                      Save up to $800 on iPhone 14 with carrier deals at Apple.
                      Get the latest iPhone for less.8
                    </h5>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="learn-more-buy-links"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#BuyModal"
          >
            Buy
            <img className="chevron-right-img" src={chevronRight} alt="" />
          </a>
          {/* Buy modal */}
          <div>
            <div
              class="modal fade"
              id="BuyModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Buy iPhone now and pay later
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h6>For EMI Tranactions</h6>
                    <p>
                      Pay 0% APR over 24 months with Apple Card.† Choose Apple
                      Card Monthly Installments when you check out.
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={iphoneImg}
          className="section-3-image"
          alt="iPhone 14 pro image"
        />
      </div>
      {/* section 4- iphone 14 banner */}
      <div class="section-4-banner text-center">
        <h1 class="title-1">iPhone 14</h1>
        <h2 class="title-2">Big and bigger</h2>
        <button class="button-1">With superfast 5G*</button>
        <div className="image-container">
          <a class="learn-more-buy-links" href="#">
            Learn more
            <img class="chevron-right-img" src={chevronRight} alt="" />
          </a>

          <a class="learn-more-buy-links" href="#">
            Buy
            <img class="chevron-right-img" src={chevronRight} alt="" />
          </a>
        </div>
        <img
          src={iphone14Img}
          class="section-4-image"
          alt="iPhone 14 pro image"
        />
      </div>
    </div>
  );
}

export default Home;
