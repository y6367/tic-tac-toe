const section = document.querySelectorAll('.section')
const win = document.querySelector('.win')
const reset = document.querySelector('.reset')
let temp = 0
let gameboard = ['', '', '',
                 '', '', '',
                 '', '', '']
let gameIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let userGame = []
let computerGame = []

reset.addEventListener('click', () => {
    location.reload()
})

section.forEach((spot) => {
    spot.dataset.index = temp
    spot.addEventListener('click', () => {
        spot.innerHTML = 'X'
        gameboard[spot.dataset.index] = 'x'
        gameIndexes[spot.dataset.index] = ''
        userGame.push(Number(spot.dataset.index))
        userGame.sort((a, b) => a - b)
        if (calculateWin(userGame)) {
            win.innerHTML = 'User Wins'
        }
        console.log(userGame)

        while (true) {
            let check = Math.floor(Math.random() * (8 + 1))
            if (gameIndexes[check] != '') {
                gameIndexes[check] = ''
                gameboard[check] = 'o'

                computerGame.push(Number(check))
                computerGame.sort((a, b) => a - b)
                if (calculateWin(computerGame)) {
                    win.innerHTML = 'Computer Wins'
                }
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

function calculateWin(play) {
    for (let i = 0; i < play.length; i++) {
        if ((play[i] === 0) && ((play.includes(1) && play.includes(2)) || (play.includes(3) && play.includes(6)) || (play.includes(4) && play.includes(8)))) {
            return(true)
        } else if ((play[i] === 1) && (play.includes(4) && play.includes(7))) {
            return(true)
        } else if ((play[i] === 2) && ((play.includes(4) && play.includes(6)) || (play.includes(5) && play.includes(8)))) {
            return(true)
        } else if ((play[i] === 3) && (play.includes(4) && play.includes(5))) {
            return(true) 
        } else if ((play[i] === 6) && (play.includes(7) && play.includes(8))) {
            return(true)
        } else {
            return(false)
        }
    }
}
