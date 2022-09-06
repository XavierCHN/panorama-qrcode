function CreateQRCode(data, container, width) {
	container.RemoveAndDeleteChildren();
	container.style.flowChildren = "none";
	let qrcode = new QRCode(-1, 0);
	qrcode.addData(data);
	qrcode.make();
	let size = qrcode.getModuleCount();
	let pix_size = width / size;
	container.style.backgroundColor = '#fff';
	for (let row = 0; row < size; ++row) {
		for (let col = 0; col < size; ++col) {
			if (!qrcode.isDark(row, col)) continue;
			let pix = $.CreatePanel("Panel", container, "");
			pix.style.marginLeft = col * pix_size + `px`;
			pix.style.marginTop = row * pix_size + `px`;
			let rect_width = pix_size;
			while (col + 1 < size && qrcode.isDark(row, col + 1)) {
				rect_width += pix_size;
				col++;
			}
			pix.style.width = rect_width + "px";
			pix.style.height = pix_size + "px";
			pix.style.backgroundColor = "#000";
		}
	}
}

