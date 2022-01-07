class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top">
			<div class="container">
				<a href="home.html" class="navbar-brand">NOMADS.</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navb"
					aria-controls="navb"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navb">
					<ul class="navbar-nav ms-auto me-3">
						<li class="nav-item mx-md-2">
							<a href="home.html" class="nav-link active">Home</a>
						</li>
						<li class="nav-item mx-md-2">
							<a href="#popular" class="nav-link">Travel Package</a>
						</li>
						<li class="nav-item mx-md-2 dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Services
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="#">Service 1</a></li>
								<li><a class="dropdown-item" href="#">Service 2</a></li>
								<li>
									<a class="dropdown-item" href="#">Service 3</a>
								</li>
							</ul>
						</li>
						<li class="nav-item mx-md-2">
							<a href="#testimonialHeading" class="nav-link">Testimonial</a>
						</li>
					</ul>

					<!-- Mobile Button -->
					<form action="login.html" class="form-inline d-sm-block d-md-none">
						<button class="btn btn-login my-2 my-sm-0">Login</button>
					</form>

					<!-- Desktop Button -->
					<form action="login.html" class="form-inline my-2 my-lg-0 d-none d-md-block">
						<button class="btn btn-login btn-navbar-end my-2 my-sm-0 px-4">
							Login
						</button>
					</form>
				</div>
			</div>
		</nav>
		`;
  }
}

customElements.define('app-bar', AppBar);
