console.log('js collegato');

const startButton = document.querySelector('button');

startButton.addEventListener('click', function () {
    console.log('startButton', startButton, typeof startButton);

    const griglia = document.getElementById('pratofiorito');

    const diffSelect = document.getElementById('difficulty');
    // console.log(diffSelect.value);

    // let cellsNumber = parseInt(diffSelect.value);
    let cellsNumber = 100

    const bombs = [];
    while (bombs.length < 16) {
        const randomNumber = generateRandomNumber(1, cellsNumber);

        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
    console.log('bombs', bombs, typeof bombs);

    griglia.innerHTML = '';

    for (let i = 1; i <= cellsNumber; i++) {
        const newCell = document.createElement('div');
        newCell.innerHTML = i;
        newCell.addEventListener('click', function() {
            const cellNumber = parseInt(this.innerText);
            if (bombs.includes(cellNumber)) {
                this.classList.add('bomb');
            } else {
                this.classList.add('notbomb');
            }
            console.log(this.innerHTML);
        });
        griglia.append(newCell);
    }
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}