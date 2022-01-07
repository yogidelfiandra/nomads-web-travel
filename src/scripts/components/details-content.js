class DetailsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<div class="card card-details" data-aos="zoom-in-up" data-aos-duration="2000">
			<h1>Nusa Penida</h1>
			<p>Republic of Indonesia Raya</p>
			<div class="gallery">
				<div class="xzoom-container">
					<img src="../public/images/details-1.jpg" class="xzoom" width="100%"
						id="xzoom-default" xoriginal="../public/images/details-1.jpg" style="width: 100%" />
				</div>
				<div class="xzoom-thumbs">
					<a href="../public/images/details-1.jpg">
						<img src="../public/images/details-1.jpg" class="xzoom-gallery"
							width="128" xpreview="../public/images/details-1.jpg" />
					</a>
					<a href="../public/images/details-2.jpg">
						<img src="../public/images/details-2.jpg" class="xzoom-gallery"
							width="128" xpreview="../public/images/details-2.jpg" />
					</a>
					<a href="../public/images/details-3.jpg">
						<img src="../public/images/details-3.jpg" class="xzoom-gallery"
							width="128" xpreview="../public/images/details-3.jpg" />
					</a>
					<a href="../public/images/details-4.jpg">
						<img src="../public/images/details-4.jpg" class="xzoom-gallery"
							width="128" xpreview="../public/images/details-4.jpg" />
					</a>
					<a href="../public/images/details-5.jpg">
						<img src="../public/images/details-5.jpg" class="xzoom-gallery"
							width="128" xpreview="../public/images/details-5.jpg" />
					</a>
				</div>
			</div>
			<h2>About Travel</h2>
			<p>
				Nusa Penida is an island southeast of Indonesia's island Bali
				and a district of Klungkung Regency that includes the
				neighbouring small island of Nusa Lembongan. The Badung Strait
				separates the island and Bali. The interior of Nusa Penida is
				hilly with a maximum altitude of 524 metres. It is drier than
				the nearby island of Bali.
			</p>
			<p>
				Bali and a district of Klungkung Regency that includes the
				neighbouring small island of Nusa Lembongan. The Badung Strait
				separates the island and Bali.
			</p>
			<div class="features row justify-content-center">
				<div class="col-4 col-md-4">
					<img src="../public/icons/ic_event.png" class="features-image" />
					<div class="description">
						<h3>Featured Event</h3>
						<p>Tari Kecak</p>
					</div>
				</div>
				<div class="col-4 col-md-4 border-start">
					<img src="../public/icons/ic_language.png" class="features-image" />
					<div class="description">
						<h3>Language</h3>
						<p>Bahasa Indonesia</p>
					</div>
				</div>
				<div class="col-4 col-md-4 border-start">
					<img src="../public/icons/ic_food.png" class="features-image" />
					<div class="description">
						<h3>Local Foods</h3>
						<p>Local Foods</p>
					</div>
				</div>
			</div>
		</div>
		`;
  }
}

customElements.define('details-content', DetailsContent);
