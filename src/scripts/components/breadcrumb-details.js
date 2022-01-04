class BreadcrumbDetails extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><a href="home.html">Home</a></li>
				<li class="breadcrumb-item active" aria-current="page">
					Details
				</li>
			</ol>
		</nav>
		`;
  }
}

customElements.define('breadcrumb-details', BreadcrumbDetails);
