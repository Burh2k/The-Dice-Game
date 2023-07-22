function roll() {
    var num1 = Math.random();
    var num2 = Math.random();
    num1 = Math.floor(num1 * 6) + 1;
    num2 = Math.floor(num2 * 6) + 1;
    var pic1 = document.getElementById('img1');
    var pic2 = document.getElementById('img2');
    var text = document.getElementById('heading');
    pic1.setAttribute('src', 'images/dice' + num1 + '.png');
    pic2.setAttribute('src', 'images/dice' + num2 + '.png');
    if (num1 > num2) {
        text.textContent = 'Player 1 Wins';
    }
    else if (num2 > num1) {
        text.textContent = 'Player 2 Wins';
    }
    else {
        text.textContent = 'Its a Tie';
    }
}