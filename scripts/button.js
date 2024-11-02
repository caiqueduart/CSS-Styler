const config = document.forms.buttonConfig;
const button = document.querySelector('#model-button');

function changeText(value) {
    if (value) {
        button.innerText = value;
    } else {
        this.button.innerText = 'Resultado aqui!'
    }
}

function changeColor(value) {
    button.style.color = value;
}

function changeWidth(value) {
    button.style.width = value + 'px';
}

function changeHeight(value) {
    button.style.height = value + 'px';
}

function changeFontFamily(value) {
    button.style.fontFamily = value + ', sans-serif';
}

function changeBackgorundColor(value) {
    button.style.backgroundColor = value;
}

function changeBorderRadius(value) {
    button.style.borderRadius = value + 'px';
}

config.text.addEventListener('keyup', (event) => {
    changeText(event.target.value);
});

config.width.addEventListener('input', (event) => {
    changeWidth(event.target.value);
});

config.height.addEventListener('input', (event) => {
    changeHeight(event.target.value);
});

config.borderRadius.addEventListener('input', (event) => {
    changeBorderRadius(event.target.value);
});

config.backgroundColor.addEventListener('input', (event) => {
    changeBackgorundColor(event.target.value);
});

config.color.addEventListener('input', (event) => {
    changeColor(event.target.value)
})

config.fontFamily.addEventListener('change', (event) => {
    changeFontFamily(event.target.value);
});