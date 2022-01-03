class SectionStats extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<div class="container">
			<section class="section-stats row justify-content-center" id="stats">
				<div class="col-3 col-md-2 text-center stats-detail">
					<h2>20K</h2>
					<p>Members</p>
				</div>
				<div class="col-3 col-md-2 text-center stats-detail">
					<h2>12</h2>
					<p>Contries</p>
				</div>
				<div class="col-3 col-md-2 text-center stats-detail">
					<h2>3K</h2>
					<p>Hotels</p>
				</div>
				<div class="col-3 col-md-2 text-center stats-detail">
					<h2>72</h2>
					<p>Partners</p>
				</div>
			</section>
		</div>
		`;
  }
}

customElements.define('section-stats', SectionStats);
