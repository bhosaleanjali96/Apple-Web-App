function Footer() {
  return (
    <div className="container-fluid main-footer-container">
      <div className="row row-cols-sm-1 row-cols-md-1 container-fluid footer">
        <div className="container">
          <p className="text-muted footer-para">
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.
          </p>
          <p className="text-muted footer-para">
            2. Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series
            3 or later paired with iPhone 6s or later. New subscribers only.
            $9.99/month after trial. Plan automatically renews until cancelled.
            Terms apply.
          </p>
          <p className="text-muted footer-para">
            A subscription is required for Apple Fitness+.
          </p>
          <p className="text-muted footer-para">
            Apple Fitness+ requires an iPhone 8 or later with iOS 16.1.
          </p>
          <p className="text-muted footer-para">
            Apple Fitness+ requires an Apple Watch Series 3 or later. Available
            when paired with iPhone 6s or later with iOS 14.3 or later.
          </p>
          <p className="text-muted footer-para">
            Fitness app on Apple TV requires tvOS 14.3 or later.
          </p>
          <p className="text-muted footer-para">
            Fitness app on iPad requires iPadOS 14.3 or later.
          </p>
          <p className="text-muted footer-para">
            To get the newest features, make sure your devices are running the
            latest software version.
          </p>
          <p className="text-muted footer-para">
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings -
            General - Software Update. Tap Download and Install.
          </p>
          <p className="text-muted footer-para">
            Available for qualifying applicants in the United States.
          </p>
          <p className="text-muted footer-para">
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </p>
          <p className="text-muted footer-para">
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </p>
        </div>
      </div>
      <hr />
      <div className="container-fluid p-2 mt-1 mb-1 d-flex justify-content-between">
        <div className="text-dark row footer-row">
          <div className="col-md-2 col-sm-6">
            <ul className="list-unstyled footer-list">
              <li className="footer-list-header">Shop and Learn</li>
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>

              <li className="footer-list-header">Apple Wallet</li>
              <li> Wallet Apple</li>
              <li>Apple Card</li>
              <li>Apple Pay</li>
              <li>Apple Cash</li>
            </ul>
          </div>

          <div className="col-md-2 col-sm-6">
            <ul className="list-unstyled footer-list">
              <li className="footer-list-header">Account</li>
              <li>Manage Your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
              <li className="footer-list-header">Entertainment</li>
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li> Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2">
            <ul className="list-unstyled footer-list">
              <li className="footer-list-header">Apple Store</li>
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple Camp</li>
              <li>Apple Store App</li>
              <li>Certified Refurbished</li>
              <li>Financing</li>
              <li>Apple Trade In</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
          <div className="col-md-2  col-sm-2">
            <ul className="list-unstyled footer-list">
              <li className="footer-list-header">For Business</li>
              <li>Apple and Business</li>
              <li>Shop for Business</li>
              <li className="footer-list-header">For Education</li>
              <li>Apple and Education</li>
              <li>Shop for K-12</li>
              <li>Shop for College</li>
              <li className="footer-list-header">For Healthcare</li>
              <li>Apple in Healthcare</li>
              <li>Health on Apple Watch</li>
              <li>Health Records on iPhone</li>
              <li className="footer-list-header">For Government</li>
              <li>Shop for Government</li>
              <li>Shop for Veterans and Military</li>
            </ul>
          </div>
          <div className="col-md-3  mt-sm-2">
            <ul className="list-unstyled footer-list">
              <li className="footer-list-header">Apple Values</li>
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Inclusion and Diversity</li>
              <li>Privacy</li>
              <li>Racial Equity and Justice</li>
              <li>Supplier Responsibility</li>
              <li className="footer-list-header">About Apple</li>
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
        {/* modal for About Us */}
        <div
          class="modal fade"
          id="exampleAboutModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <h3 className="fw-bold footer-heading text-primary">
                    About Bonvoyage
                  </h3>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p className="footer-para">
                  We are a leading online travel company in India providing a
                  'best in class' customer experience with the goal to be
                  'India's Travel Planner'. Through our website, our mobile
                  applications and our other associated platforms, leisure and
                  business travelers can explore, research, compare prices and
                  book a wide range of services catering to their travel needs.
                  Since our inception in 2006, more than 7 million customers
                  have used one or more of our comprehensive travel-related
                  services, which include domestic and international air
                  ticketing, hotel bookings, homestays, holiday packages
                  ,activities and ancillary services. With over 103,000 hotels
                  contracted across India, we are India's largest platform for
                  domestic hotels. A strong and "trusted" travel brand of India,
                  our strengths include a large and loyal customer base, a
                  multi-channel platform for leisure and business travelers, a
                  robust mobile eco-system for a spectrum of travelers and
                  suppliers, a strong technology platform designed to deliver a
                  high level of scalability and innovation and a seasoned senior
                  management team comprising of industry executives with deep
                  roots in the travel industry in India and abroad.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for terms */}
        <div
          class="modal fade"
          id="examplePrivacyModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <h3 className="fw-bold footer-heading text-primary">
                    Privacy Policy
                  </h3>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p className="footer-para">
                  Bonvoyage Online Private Limited, including all legal entities
                  under the Bonvoyage group , respects your (customers -
                  hereafter referred as "you" or "user") privacy and values our
                  relationship with our business partners, clients, third
                  parties having contractual relationship with Yatra (hereafter
                  referred to as "third party" or "service provider"), and any
                  party who purchases/intend to purchase/inquire about any
                  product(s) and/or service(s) made available by Bonvoyage
                  through any of Bonvayge' s customer interface channels
                  including Website, mobile site, mobile app & offline channels
                  including call centers and offices (collectively referred
                  herein as "Sales Channels"). We are committed to protecting
                  your personally identifiable information (hereafter referred
                  as "information" or "personal information" or "personal data"
                  or "special category of personal data") by handling it
                  responsibly and safeguarding it using appropriate technical
                  and organizational measures. We want to assure you that we
                  follow appropriate standards when it comes to protecting your
                  privacy on our Sales Channel. This policy outlines the types
                  of personal information collected on our Website, how this
                  data is used/processed and safeguarded as well as how users
                  may exercise their rights with respect to personal
                  information. This Privacy Policy applies to Bonvoyage.com,
                  Bonvoyage company pages, communications and services
                  ("Services"), including off-site Services, such as our email
                  services, customer care and support services and the "Contact
                  us"; "Apply with Bonvoyage" and "Share on" plugins on our
                  digital properties. By using or accessing the Website or other
                  Sales Channels, the user hereby agrees with the terms of this
                  Privacy Policy and the contents herein.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for terms */}
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
                  <h3 className="fw-bold footer-heading text-primary">
                    Terms & Conditions
                  </h3>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p className="footer-para">
                  If we change or cancel your holiday We do plan the
                  arrangements in advance. It is unlikely that we will have to
                  make any changes to your travel arrangements. Occasionally, we
                  may have to make changes and we reserve the right to do so at
                  any time. If there are any changes, we will advise you of them
                  at the earliest possible date. We also reserve the right under
                  any circumstances to cancel your travel arrangements by
                  assigning reasons to you. If we are unable to provide the
                  booked travel arrangements due to reasons beyond our control
                  (e.g. bad weather):We shall first try to offer alternative
                  dates for the tour if the tour hasn't already commenced. If
                  the tour has already commenced, then we shall refund the
                  booking price/fee charged to you on a pro-rata basis depending
                  on the portion of the tour utilized by you. All cost incurred
                  due to amendment will be borne by you. If you have a complaint
                  If you face any problem during your holiday, please inform the
                  relevant supplier (e.g. your hotelier, transporter etc.)
                  and/or our representative immediately who will endeavour to
                  set things right. If your complaint is not resolved locally,
                  please follow this up within 28 days of your return home by
                  writing to us, with your booking reference and all other
                  relevant information. However, please be advised that while we
                  are happy to assist you in the redressal of your complaint, if
                  any, we will be able to extend only our best efforts in
                  managing/coordinating your complaint with the respective
                  service provider. All third party service providers are
                  independent contractors who are at no time under our control
                  or supervision. All booking vouchers and tickets will be
                  provided 3 days before departure.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="footer-para">
          More ways to shop:{" "}
          <a href="#" className="footer-link">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="footer-link">
            other retailer
          </a>
          near you. Or call 1-800-MY-APPLE.
        </p>
      </div>
      <hr />
      <div>
        <p className="footer-para footer-copy-right">
          Copyright © 2023 Apple Inc. All rights reserved.{" "}
          <p className="footer-sm-screen">
            <span className="footer-span-privacy">Privacy </span> |{" "}
            <span className="footer-span">Policy</span> |{" "}
            <span className="footer-span">Terms of Use</span> |{" "}
            <span className="footer-span">Sales and Refunds</span> |{" "}
            <span className="footer-span">Legal</span> |{" "}
            <span className="footer-span">Site Map</span>
            <span className="footer-span-us">United States</span>
          </p>
          
        </p>
      </div>
    </div>
  );
}

export default Footer;
