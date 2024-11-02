const config = document.forms.buttonConfig;
const button = document.querySelector('#model-button');
let isDragging = false;

function changeText(value) {
    if(value) {
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

config.addEventListener('pointerdown', () => {
    isDragging = true;
});

config.addEventListener('pointerup', () => {
    isDragging = false;
});

config.text.addEventListener('keyup', (event) => {
    const value = event.target.value
    changeText(value);
});

['pointermove', 'click'].forEach((action) => {
    config.width.addEventListener(action, (event) => {

        if(isDragging || action === 'click') {
            changeWidth(event.target.value);
        }
    });
});

['pointermove', 'click'].forEach((action) => {
    config.height.addEventListener(action, (event) => {
        
        if(isDragging || action === 'click') {
            changeHeight(event.target.value);
        }
    });
});

['pointermove', 'click'].forEach((action) => {
    config.borderRadius.addEventListener(action, (event) => {
    
        if(isDragging || action === 'click') {
            changeBorderRadius(event.target.value);
        }
    });
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