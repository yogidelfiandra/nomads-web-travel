class SectionNewsletter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<section class="section-newsletter" id="newsletter">
			<div class="container">
				<div class="row mx-0">
					<div class="col text-center section-newsletter-content">
						<h2>
							Subscribe Our <br />
							Newsletter
						</h2>
						<p>Subscribe to our newsletter and get a special 30% discount.</p>
						<form>
							<input type="email" placeholder="Email Address" required />
							<button type="submit" class="btn btn-subscribe px-4 py-2">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
		`;
  }
}

customElements.define('section-newsletter', SectionNewsletter);
