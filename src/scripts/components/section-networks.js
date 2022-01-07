class SectionNetworks extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<section class="section-networks" id="networks">
			<div class="container">
				<div class="row gy-5 gy-md-0">
					<div class="col-md-4 text-center text-md-start">
						<h2>Our Networks</h2>
						<p>
							Companies are trusted us <br />
							more than just a trip
						</p>
					</div>
					<div class="col-md-8 text-center align-self-center">
						<div class="sponsor-container">
							<div class="sponsor-content">
								<img src="../../public/images/sponsors-1.png" alt="" class="sponsor-img">
							</div>
							<div class="sponsor-content">
								<img src="../../public/images/sponsors-2.png" alt="" class="sponsor-img">
							</div>
							<div class="sponsor-content">
								<img src="../../public/images/sponsors-3.png" alt="" class="sponsor-img">
							</div>
							<div class="sponsor-content">
								<img src="../../public/images/sponsors-4.png" alt="" class="sponsor-img">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		`;
  }
}

customElements.define('section-networks', SectionNetworks);
