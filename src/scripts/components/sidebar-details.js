class SidebarDetails extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<div class="card card-details card-right">
			<h2>Members are going</h2>
			<div class="members my-2">
				<img src="../public/images/member-1.png" class="member-images me-1" />
				<img src="../public/images/member-2.png" class="member-images me-1" />
				<img src="../public/images/member-3.png" class="member-images me-1" />
				<img src="../public/images/member-4.png" class="member-images me-1" />
				<img src="../public/images/member-dst.png" class="member-images me-1" />
			</div>
			<hr />
			<h3>Trip Informations</h3>
			<table class="trip-informations">
				<tr>
					<th width="50%">Date of Departure</th>
					<td width="50%" class="text-end">02 Feb, 2022</td>
				</tr>
				<tr>
					<th width="50%">Duration</th>
					<td width="50%" class="text-end">3D 4N</td>
				</tr>
				<tr>
					<th width="50%">Type</th>
					<td width="50%" class="text-end">Open Trip</td>
				</tr>
				<tr>
					<th width="50%">Price</th>
					<td width="50%" class="text-end">$2000 / person</td>
				</tr>
			</table>
		</div>
		`;
  }
}

customElements.define('sidebar-details', SidebarDetails);
