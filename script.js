document.addEventListener('DOMContentLoaded', function () {
    const colorContainer = document.getElementById('color-container');
    const generateButton = document.getElementById('generate-button');
    const numColors = 18;

    generateButton.addEventListener('click', generateColors);

    generateColors();

    function generateColors() {
        colorContainer.innerHTML = '';

        for (let i = 0; i < numColors; i++) {
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorContainer.appendChild(colorBox);

            const color = getRandomColor();  //Crea al azar un codigo hexadecimal con la funcion y hace que el fondo del div, sea de dicho color.
            colorBox.style.backgroundColor = color;
            colorBox.addEventListener('mouseover', () => { //Lo que va a decir en el texto, es el codigo hexadecimal
                colorBox.textContent = color;
            });
            colorBox.addEventListener('mouseout', () => { //Cuando se hace hover, se saca el codigo hexadecimal
                colorBox.textContent = '';
            });
            colorBox.addEventListener('click', () => { //Cuando se hace click sobre el color, se copia automaticamente el codigo hexadecimal
                copyToClipboard(color);
            });
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }
});
