class SectionTestimonial extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<section class="section-testimonial-heading" id="testimonialHeading">
			<div class="container">
				<div class="row">
					<div class="col text-center">
						<h2>They Are Loving Us</h2>
						<p>
							Moments were giving them <br />
							the best experience
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="section-testimonial-content" id="testimonialContent">
			<div class="container">
				<div class="section-popular-travel row justify-content-center">
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="card card-testimonial text-center">
							<div class="testimonial-content">
								<img
									width="120"
									src="../public/images/testimonial-1.png"
									alt="user"
									class="mb-4 rounded-circle"
								/>
								<h3 class="mb-4">Yogi Delfiandra</h3>
								<p class="testimonial">
									“ It was glorious and I could not stop to say wohooo for
									every single moment Dankeeeeee “
								</p>
							</div>
							<hr />
							<p class="trip-to mt-2">Trip to Ubud</p>
						</div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="card card-testimonial text-center">
							<div class="testimonial-content">
								<img
									width="120"
									src="../public/images/testimonial-2.png"
									alt="user"
									class="mb-4 rounded-circle"
								/>
								<h3 class="mb-4">Tiana Ekstrom Bothman</h3>
								<p class="testimonial">
									“ The trip was amazing and I saw something beautiful in that
									Island that makes me want to learn more “
								</p>
							</div>
							<hr />
							<p class="trip-to mt-2">Trip to Nusa Penida</p>
						</div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-4">
						<div class="card card-testimonial text-center">
							<div class="testimonial-content">
								<img
									width="120"
									src="../public/images/testimonial-3.png"
									alt="user"
									class="mb-4 rounded-circle"
								/>
								<h3 class="mb-4">Ashlynn Saris</h3>
								<p class="testimonial">
									“ I loved it when the waves was shaking harder — I was
									scared too “
								</p>
							</div>
							<hr />
							<p class="trip-to mt-2">Trip to Karimun Jawa</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 text-center">
						<a href="#" class="btn btn-need-help px-4 mt-5 mx-1">
							I Need Help
						</a>
						<a href="#popular" class="btn btn-get-started px-4 mt-5 mx-1">
							Get Started
						</a>
					</div>
				</div>
			</div>
		</section>
		`;
  }
}

customElements.define('section-testimonial', SectionTestimonial);
