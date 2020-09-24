function CreateQRCode(data, container) {
    container.RemoveAndDeleteChildren();
    container.style.flowChildren = "down";
    let qrcode = new QRCode(-1, 0);
    qrcode.addData(data);
    qrcode.make();
    let size = qrcode.getModuleCount();
    let pix_size = Math.floor(container.actuallayoutwidth / size);
    for (let row = 0; row < size; ++row) {
        let row_container = $.CreatePanel("Panel", container, "");
        row_container.style.flowChildren = "right";
        for (let col = 0; col < size; ++col) {
            let pix = $.CreatePanel("Panel", row_container, "");
            pix.style.width = pix_size + "px";
            pix.style.height = pix_size + "px";
            pix.style.backgroundColor = qrcode.isDark(row, col)
                ? "#000000"
                : "#ffffff";
        }
    }
}
