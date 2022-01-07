class NavbarCheckout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbars-fixed-top shadow-sm">
			<div class="container">
				<div class="navbar-nav m-auto me-sm-0 ">
					<a href="home.html" class="navbar-brand">NOMADS.</a>
				</div>
				<ul class="navbar-nav me-auto d-none d-sm-block">
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
