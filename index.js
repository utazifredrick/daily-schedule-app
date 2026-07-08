const input = document.getElementById("input-content");
const sizeInput = document.getElementById("input-size");
const button = document.getElementById("create-qr-code");
const qrCodeContainer = document.getElementById("qr-code");

if (button) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const value = input.value.trim() || "https://example.com";
    const size = parseInt(sizeInput.value, 10) || 200;

    console.log("clicked", value);

    qrCodeContainer.innerHTML = "";
    new QRCode(qrCodeContainer, {
      text: value,
      width: size,
      height: size,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  });
}
