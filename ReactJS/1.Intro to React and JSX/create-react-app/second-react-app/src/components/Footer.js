export default function Footer() {
  return (
    <div class="container-fluid footer">
      <div class="row contact">
        <div class="col-md-6 contact-form">
          <h3 class="content-ct">
            <span class="ti-email"></span> Contact Form
          </h3>
          <form class="form-horizontal" data-toggle="validator" role="form">
            <div class="form-group">
              <label for="name" class="col-sm-3 control-label">
                Name<sup>*</sup>
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="John Doe"
                  required
                />
                <div class="help-block with-errors pull-right"></div>
                <span class="form-control-feedback" aria-hidden="true"></span>
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-3 control-label">
                Email<sup>*</sup>
              </label>
              <div class="col-sm-9">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@youremail.com"
                  required
                />
                <div class="help-block with-errors pull-right"></div>
                <span class="form-control-feedback" aria-hidden="true"></span>
              </div>
            </div>
            <div class="form-group">
              <label for="message" class="col-sm-3 control-label">
                Your Message<sup>*</sup>
              </label>
              <div class="col-sm-9">
                <textarea
                  id="message"
                  class="form-control"
                  rows="3"
                  required
                ></textarea>
                <div class="help-block with-errors pull-right"></div>
                <span class="form-control-feedback" aria-hidden="true"></span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-3 col-sm-9">
                <button
                  type="submit"
                  id="submit"
                  name="submit"
                  class="btn btn-yellow pull-right"
                >
                  Send <span class="ti-arrow-right"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-4 col-md-offset-1 content-ct">
          <h3>
            <span class="ti-twitter"></span> Twitter Feed
          </h3>
          <p>
            Lorem <a href="#">#Ipsum</a> is a dummy text used as a text filler
            in designs. This is just a dummy text. via{" "}
            <a href="#">@designerdada</a>{" "}
          </p>
          <hr />
          <p>
            Lorem Ipsum is a <a href="#">#dummy</a> text used as a text filler
            in designs. This is just a dummy text. via{" "}
            <a href="#">@designerdada</a>{" "}
          </p>
          <hr />
          <p>
            Lorem Ipsum is a <a href="#">#dummy</a> text used as a text filler
            in designs. This is just a dummy text. via{" "}
            <a href="#">@designerdada</a>{" "}
          </p>
        </div>
      </div>
      <div class="row footer-credit">
        <div class="col-md-6 col-sm-6">
          <p>
            &copy; 2015,{" "}
            <a href="http://www.designerdada.com">DesignerDada.com</a> | All
            rights reserved.
          </p>
        </div>
        <div class="col-md-6 col-sm-6">
          <ul class="footer-menu">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Condition</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
