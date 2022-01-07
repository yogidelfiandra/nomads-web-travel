class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<footer class="section-footer mb-4 border-top">
      <div class="container pt-5 pb-5">
        <div class="row justify-content-center">
          <div class="footer-container">
            <div class="footer-content">
              <div class="footer-data">
                <h4 class="navbar-brand">NOMADS.</h4>
								<p>
									Travel you choose the <br> destination, we offer you the <br> experience.
								</p>
								<div class="social-media">
									<a href="https://www.facebook.com/" target="_blank" class="footer-social">
										<i class="bi bi-facebook"></i>
									</a>
									<a href="https://www.instagram.com/yogidelfiandra/" target="_blank" class="footer-social">
										<i class="bi bi-instagram"></i>
									</a>
									<a href="https://www.youtube.com/" target="_blank" class="footer-social">
										<i class="bi bi-youtube"></i>
									</a>
									<a href="https://github.com/yogidelfiandra" target="_blank" class="footer-social">
										<i class="bi bi-github"></i>
									</a>
								</div>
              </div>
              <div class="footer-data">
                <h4>About</h4>
                <ul class="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">New & Blog</a></li>
                </ul>
              </div>
              <div class="footer-data">
                <h4>Company</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Media</a></li>
                  <li><a href="#">Become a member</a></li>
                </ul>
              </div>
              <div class="footer-data">
                <h4>Support</h4>
                <ul class="list-unstyled">
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Support Center</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row border-top text-center justify-content-center pt-4">
          <div class="col-auto d-none d-sm-block copyright">
            &#169; 2022 Nomads. Created by <a href="https://www.instagram.com/kodinghack/" target="_blank">kodingHack</a>
          </div>
					<div class="col-auto d-block d-sm-none copyright">
            &#169; 2022 Nomads <br> Created by <a href="https://www.instagram.com/kodinghack/" target="_blank">kodingHack</a>
          </div>
        </div>
      </div>
    </footer>
		`;
  }
}

customElements.define('footer-bar', FooterBar);
