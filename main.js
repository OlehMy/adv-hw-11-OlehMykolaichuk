const key = document.querySelectorAll('.key');
const piano = document.querySelectorAll('.piano');
const keyCode = [];

function getKayCode() {
    for (let index = 0; index < key.length; index++) {
        keyCode.push(key[index].innerHTML);
    };
};
getKayCode();

document.addEventListener('keydown', function(e) {
    for (let index = 0; index < keyCode.length; index++) {
        if (e.code == `Key${keyCode[index]}`) {
            piano[index].currentTime = 0;
            piano[index].play();
            key[index].classList.add('key_down');
        };
    };
});

document.addEventListener('keyup', function(e) {
    for (let index = 0; index < keyCode.length; index++) {
        if (e.code == `Key${keyCode[index]}`) {
            key[index].classList.remove('key_down');
        };
    };
});