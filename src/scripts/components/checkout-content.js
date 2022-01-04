class CheckoutContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<div class="card card-checkout">
			<h1>Who is Going?</h1>
			<p class="mb-2">Trip to Ubud, Bali, Indonesia</p>
			<div class="attendee table-responsive my-3">
				<table class="table text-center table-borderless">
					<thead>
						<tr>
							<td>Picture</td>
							<td>Name</td>
							<td>Nationality</td>
							<td>VISA</td>
							<td>Passport</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<img src="../../public/images/testimonial-1.png" height="60">
							</td>
							<td class="align-middle">Yogi Delfiandra</td>
							<td class="align-middle">IDN</td>
							<td class="align-middle">30 Days</td>
							<td class="align-middle">Active</td>
							<td class="align-middle">
								<a href="#">
									<img src="../../public/icons/ic_close.svg" height="24">
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<img src="../../public/images/testimonial-2.png" height="60">
							</td>
							<td class="align-middle">Tiana Ekstrom Bothman</td>
							<td class="align-middle">AUS</td>
							<td class="align-middle">N/A</td>
							<td class="align-middle">Active</td>
							<td class="align-middle">
								<a href="#">
									<img src="../../public/icons/ic_close.svg" height="24">
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="member mt-3">
				<h2 class="mb-3">Add Member</h2>
				<form class="row gx-2 gy-3 align-items-center">
					<div class="col-sm-3">
						<label for="inputUsername" class="visually-hidden">Name</label>
						<input type="text" class="form-control" id="inputUsername" placeholder="Username" required>
					</div>
					<div class="col-sm-3">
						<label for="inputVisa" class="visually-hidden">Visa</label>
						<select id="inputVisa" class="form-select">
							<option value="VISA" selected disabled>VISA</option>
							<option value="30Days">30 Days</option>
							<option value="N/A">N/A</option>
						</select>
					</div>
					<div class="col-sm-4">
						<label for="doePassport" class="visually-hidden">DOE Passport</label>
						<input type="date" id="doePassport" class="form-control" required>
					</div>
					<div class="col-auto">
						<button type="submit" class="btn btn-add-now">Add Now</button>
					</div>
				</form>
				<h3 class="mt-3 mb-0">Note</h3>
				<p class="disclaimer mt-1 mb-0">
					You are only able to invite member that has registered in Nomads.
				</p>
			</div>
		</div>
		`;
  }
}

customElements.define('checkout-content', CheckoutContent);
