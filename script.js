const section = document.querySelectorAll('.section')
let temp = 0
let gameboard = ['', '', '',
                 '', '', '',
                 '', '', '']
let gameIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let userGame = []
let computerGame = []

section.forEach((spot) => {
    spot.dataset.index = temp
    spot.addEventListener('click', () => {
        spot.innerHTML = 'X'
        gameboard[spot.dataset.index] = 'x'
        gameIndexes[spot.dataset.index] = ''
        userGame.push(Number(spot.dataset.index))
        userGame.sort((a, b) => a - b)
        console.log(userGame)

        while (true) {
            let check = Math.floor(Math.random() * (8 + 1))
            if (gameIndexes[check] != '') {
                gameIndexes[check] = ''
                gameboard[check] = 'o'

                computerGame.push(Number(check))
                computerGame.sort((a, b) => a - b)
                console.log(computerGame)
                let tempSpot = document.querySelector(`.${CSS.escape(check)}`);
                tempSpot.innerHTML = 'O'
                break
            }
            const allFull = gameIndexes.every(item => item === '')
            if (allFull) {
                break
            }
        }

        console.log(gameboard)
    })
    console.log(spot.dataset.index)
    temp++
})
