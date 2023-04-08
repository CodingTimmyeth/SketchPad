// Variables for the Color Configuration
const container = document.getElementById('container')
const eraserBtn = document.getElementById('Eraser')
const blackBtn = document.getElementById('black')

for(i = 0; i < 64; i++){
    const newDiv = document.createElement('div')
    newDiv.classList.add('cubics')
    container.append(newDiv)

    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'red'
    })

    blackBtn.addEventListener('click', () => {
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'black'
        })
    })

    eraserBtn.addEventListener('click', () => {
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'white'
        })
    })
}

// Variables for the layout grid
