function changecolor() {
    const colorInput = document.querySelector('Input').value;
    const header = document.querySelector('h1');
    header.style.color = colorInput;
}