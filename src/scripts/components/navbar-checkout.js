class NavbarCheckout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbars-fixed-top">
			<div class="container">
				<div class="navbar-nav ms-auto me-auto me-sm-auto me-lg-0 me-md-auto">
					<a href="home.html" class="navbar-brand">NOMADS.</a>
				</div>
				<ul class="navbar-nav me-auto d-none d-lg-block">
					<li>
						<span class="text-muted border-start">
							&nbsp; Beyond the explorer of the world
						</span>
					</li>
				</ul>
			</div>
		</nav>
		`;
  }
}

customElements.define('navbar-checkout', NavbarCheckout);
