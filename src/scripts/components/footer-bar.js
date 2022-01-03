class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<footer class="section-footer mt-5 mb-4 border-top">
      <div class="container pt-5 pb-5">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-sm-6 col-lg-3">
                <h4>FEATURES</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Social Media Kit</a></li>
                  <li><a href="#">Affiliate</a></li>
                </ul>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <h4>ACCOUNT</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Refund</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Rewards</a></li>
                </ul>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <h4>Company</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Media</a></li>
                </ul>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <h4>GET CONNECT</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Riau</a></li>
                  <li><a href="#">Indonesia</a></li>
                  <li><a href="#">0822 - 3223 - 8008</a></li>
                  <li><a href="#">admin@nomads.id</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row border-top text-center justify-content-center pt-4">
          <div class="col-auto d-none d-sm-block copyright">
            2021 Copyright Nomads • Created by kodingHack
          </div>
					<div class="col-auto d-block d-sm-none copyright">
            2021 Copyright Nomads <br> Created by kodingHack
          </div>
        </div>
      </div>
    </footer>
		`;
  }
}

customElements.define('footer-bar', FooterBar);
