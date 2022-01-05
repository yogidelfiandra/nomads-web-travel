class PopularContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<section class="section-popular" id="popular">
			<div class="container">
				<div class="row">
					<div class="col text-center section-popular-heading">
						<h2>Top Destination</h2>
						<p>
							Something that you never try <br />
							before in this world
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="section-popular-content" id="popularContent">
			<div class="container">
				<div class="section-popular-travel row justify-content-center">
					<div class="col-sm-6 col-md-4 col-lg-3">
						<div
							class="card-travel text-center d-flex flex-column"
							style="background-image: url('../public/images/popular-1.jpg')" data-aos="fade-up" data-aos-duration="1000"
						>
							<div class="travel-country">TURKEY</div>
							<div class="travel-location">CAPPADOCIA</div>
							<div class="travel-button mt-auto">
								<a href="details.html" class="btn btn-travel-details px-4">
									View Details
								</a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<div
							class="card-travel text-center d-flex flex-column"
							style="background-image: url('../public/images/popular-2.jpg')" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
						>
							<div class="travel-country">MEXICO</div>
							<div class="travel-location">TULUM</div>
							<div class="travel-button mt-auto">
								<a href="details.html" class="btn btn-travel-details px-4">
									View Details
								</a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<div
							class="card-travel text-center d-flex flex-column"
							style="background-image: url('../public/images/popular-3.jpg')"
							data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
						>
							<div class="travel-country">INDONESIA</div>
							<div class="travel-location">NUSA PENIDA</div>
							<div class="travel-button mt-auto">
								<a href="details.html" class="btn btn-travel-details px-4">
									View Details
								</a>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-lg-3">
						<div
							class="card-travel text-center d-flex flex-column"
							style="background-image: url('../public/images/popular-4.jpg')"
							data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900"
						>
							<div class="travel-country">PHILIPPINES</div>
							<div class="travel-location">SIARGAO ISLAND</div>
							<div class="travel-button mt-auto">
								<a href="details.html" class="btn btn-travel-details px-4">
									View Details
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		`;
  }
}

customElements.define('popular-content', PopularContent);
