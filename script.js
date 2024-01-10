const section = document.querySelectorAll('.section')
let temp = 0
section.forEach((spot) => {
    spot.dataset.index = temp
    spot.addEventListener('click', () => {
        spot.innerHTML = 'X'
        gameboard[spot.dataset.index] = 'x'
        gameIndexes[spot.dataset.index] = ''

        while (true) {
            let check = Math.floor(Math.random() * (8 + 1))
            if (gameIndexes[check] != '' && gameIndexes[check] != '') {
                gameIndexes[check] = ''
                gameboard[check] = 'o'
                let tempSpot = document.querySelector(`.${CSS.escape(check)}`);
                tempSpot.innerHTML = 'O'
                break;
            }
        }
        console.log(gameboard)
    })
    console.log(spot.dataset.index)
    temp++
})


let gameboard = ['', '', '',
                 '', '', '',
                 '', '', '']
let gameIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function addUser(index) {
    
}