const config = document.forms.buttonConfig;
const button = document.querySelector('#model-button');

fetch('./scripts/data/font-size.json').then((response) => response.json())
    .then((data) => {
        data.forEach((font) => {
            const option = document.createElement('option');
            option.innerText = font;
            config.fontFamily.appendChild(option);
        })
    }
);

function updateButtonSize() {
    config.width.value = button.clientWidth;
    config.height.value = button.clientHeight;
}

config.text.addEventListener('keyup', ({target: {value}}) => {
    button.innerText = value || 'Resultado aqui!'
});

config.width.addEventListener('input', ({target: {value}}) => {
    button.style.width = value + 'px';
});

config.height.addEventListener('input', ({target: {value}}) => {
    button.style.height = value + 'px';
});

config.borderRadius.addEventListener('input', ({target: {value}}) => {
    button.style.borderRadius = value + 'px';
});

config.backgroundColor.addEventListener('input', ({target: {value}}) => {
    button.style.backgroundColor = value;
});

config.color.addEventListener('input', ({target: {value}}) => {
    button.style.color = value;
})

config.fontSize.addEventListener('input', ({target: {value}}) => {
    button.style.fontSize = value + 'em';
    updateButtonSize();
});

config.fontFamily.addEventListener('change', ({target: {value}}) => {
    button.style.fontFamily = value + ', sans-serif';
    updateButtonSize();
});