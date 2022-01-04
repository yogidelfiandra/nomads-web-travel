class SidebarCheckout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<div class="card card-checkout card-right">
			<h2 class="mb-3">Checkout Informations</h2>
			<table class="trip-informations">
				<tr>
					<th width="50%">Members</th>
					<td width="50%" class="text-end">2 Person</td>
				</tr>
				<tr>
					<th width="50%">Additional VISA</th>
					<td width="50%" class="text-end">$ 190,00</td>
				</tr>
				<tr>
					<th width="50%">Trip Price</th>
					<td width="50%" class="text-end">$ 80,00 / person</td>
				</tr>
				<tr>
					<th width="50%">Sub Total</th>
					<td width="50%" class="text-end">$ 280,00</td>
				</tr>
				<tr>
					<th width="50%">Total (+Unique Code)</th>
					<td width="50%" class="text-end text-total">
						<span class="text-blue">$ 279,</span><span class="text-orange">33</span>
					</td>
				</tr>
			</table>
			<hr>
			<h2>Payment Instructions</h2>
			<p class="payment-instruction">
				Please complete your payment before to <br> continue the wonderful trip
			</p>
			<div class="bank">
				<div class="bank-item pb-3">
					<img src="../../public/icons/ic_card.png" alt="" class="bank-image">
					<div class="description">
						<h3>PT Nomads ID</h3>
						<p>
							0881 8829 8800 <br> Bank Central Asia
						</p>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="bank-item pb-3">
					<img src="../../public/icons/ic_card.png" alt="" class="bank-image">
					<div class="description">
						<h3>PT Nomads ID</h3>
						<p>
							0899 8501 7888 <br> Bank HSBC
						</p>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
		`;
  }
}

customElements.define('sidebar-checkout', SidebarCheckout);
