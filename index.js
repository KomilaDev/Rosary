let test = document.querySelector('#test')
let focus = document.querySelector('.focus')
let resk = document.querySelector('.reset')

function go() {
    test.innerHTML = parseInt(test.innerHTML) + 1;
    focus.style.cssText = 'box-shadow: 0px 0px 16px rgba(384, 280, 176, 0.5); background-color: crimson;';
}
function reset() {
    test.innerHTML = 0
    resk.style.cssText = 'box-shadow: 0px 0px 16px rgba(384, 280, 176, 0.5);';
}