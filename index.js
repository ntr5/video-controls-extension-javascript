if (document.querySelector('video')) {
    addVideoControls()
} else {
    console.log('No Video')
}

function addVideoControls() {
    const videoTag = document.querySelector('video')
    document.addEventListener('keydown', (event) => {
        console.log(event.key);
        if (event.key === 'd') {
            console.log('speed up')
            videoTag.playbackRate += .10
        } else if (event.key === 's') {
            console.log('slow down')
            videoTag.playbackRate -= .10
        } else if (event.key === 'r') {
            console.log('normal speed')
            videoTag.playbackRate = 1
        }
    })
    createVideoControlButtons(videoTag)
}

function createVideoControlButtons(videoTag) {
    const videoContainer = document.querySelector('.video-container')
    
    let myPersonalVideoControls = document.createElement('div')
    myPersonalVideoControls.classList.add('my-personal-video-controls')
    
    let speedDownButton = document.createElement('button')
    let speedDownTextNode = document.createTextNode('Speed Down')
    speedDownButton.appendChild(speedDownTextNode)
    speedDownButton.classList.add('my-speed-control')
    speedDownButton.id = 'speed-down'
    myPersonalVideoControls.appendChild(speedDownButton)
    
    let speedUpButton = document.createElement('button')
    let speedUpTextNode = document.createTextNode('Speed Up')
    speedUpButton.appendChild(speedUpTextNode)
    speedUpButton.classList.add('my-speed-control')
    speedUpButton.id = 'speed-up'
    myPersonalVideoControls.appendChild(speedUpButton)
    
    videoContainer.appendChild(myPersonalVideoControls)
    
    myPersonalVideoControls.style.position = "fixed"
    myPersonalVideoControls.style.top = "70px"
    myPersonalVideoControls.style.left = "100px"
    
    let cssTemplate = `
        padding: 10px;
        margin: 10px;
        color: white;
        background-color: #45B0E5;
        border-radius: 4px;
        font-weight: 900;
        cursor: pointer;
    `

    let buttons = document.querySelectorAll('.my-speed-control')
    buttons.forEach(button => {
        button.style = cssTemplate
        button.addEventListener('click', (event) => {
            if (event.target.id == 'speed-up') {
            console.log('speed up')
            videoTag.playbackRate += .10
            } else if (event.target.id == 'speed-down') {
            console.log('slow down')
            videoTag.playbackRate -= .10
            }
        } )
    })
}