class SectionNetworks extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<section class="section-networks" id="networks">
			<div class="container">
				<div class="row gy-5 gy-md-0">
					<div class="col-md-4">
						<h2>Our Networks</h2>
						<p>
							Companies are trusted us <br />
							more than just a trip
						</p>
					</div>
					<div class="col-md-8 text-center align-self-center">
						<img
							src="../public/images/logos_partner.png"
							alt="Logo Partner"
							class="img__partner"
						/>
					</div>
				</div>
			</div>
		</section>
		`;
  }
}

customElements.define('section-networks', SectionNetworks);
