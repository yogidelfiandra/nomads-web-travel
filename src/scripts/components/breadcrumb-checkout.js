class BreadcrumbCheckout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="home.html">Home</a></li>
				<li class="breadcrumb-item"><a href="detail.html">Details</a></li>
				<li class="breadcrumb-item active" aria-current="page">
					Checkout
				</li>
			</ol>
		</nav>
		`;
  }
}

customElements.define('breadcrumb-checkout', BreadcrumbCheckout);
