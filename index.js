if (document.querySelector('video')) {
    addVideoControls()
} else {
    console.log('No Video')
}

function addVideoControls() {
    const videoTag = document.querySelector('video')
    document.addEventListener('keydown', (event) => {
        // console.log(event.key);
        if (event.key === 'd') {
            videoTag.playbackRate += .05;
            // console.log("d was press")
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x';
        } else if (event.key === 's') {
            videoTag.playbackRate -= .05;
            // console.log("s was press")
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x';
        } else if (event.key === 'r') {
            videoTag.playbackRate = 1;
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2);
        } else if (event.key === 'a') {
            videoTag.play();
        } else if (event.key === 'f') {
            videoTag.pause();
        } 
    })
    createVideoControlButtons(videoTag)
}

function setCss() {
    let buttonCss = `
        position: relative;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 4em;
        color: white;
        font-weight: 900;
        cursor: pointer;
    `
    let skipButtonsCss = `
        position: relative;
        margin: 0px;
        padding: 0px;
        height: 100%;
        width: 34px;
        color: white;
        font-weight: 900;
        cursor: pointer;
        font-size: 12px;
    `

    let labelCss = `
        color: #29303b;
        padding: 4px 6px;
        cursor: pointer;
        font-weight: 600;
        background-color: #f7f8fa;
        border-radius: 4px;
        font-size: 0.95rem;
        text-align: center;
    `
    let newStyleLabelCss = `
        color: rgb(41, 48, 59);
        padding: 3px 6px;
        cursor: pointer;
        font-weight: 600;
        background-color: rgb(247, 248, 250);
        border-radius: 4px;
        font-size: 0.95rem;
        text-align: center;
        position: relative;
        top: -1px;
    `
    return([buttonCss, skipButtonsCss, labelCss, newStyleLabelCss])
}

function createVideoControlButtons(videoTag) {
    let vjsControlBar = document.querySelector('.vjs-control-bar')
    
    let myPersonalVideoControls = document.createElement('div')
    myPersonalVideoControls.classList.add('my-personal-video-controls')
    
    let speedDownButton = document.createElement('button')
    // let speedDownTextNode = document.createTextNode('\\/')
    let speedDownTextNode = document.createTextNode('<<')
    speedDownButton.appendChild(speedDownTextNode)
    speedDownButton.classList.add('my-speed-control')
    speedDownButton.id = 'speed-down'
    myPersonalVideoControls.appendChild(speedDownButton)

    let speedLabel = document.createElement('lable')
    let speedLabelTextNode = document.createTextNode('1.00')
    speedLabel.appendChild(speedLabelTextNode)
    speedLabel.classList.add('my-speed-label')
    speedLabel.id = 'speed'
    myPersonalVideoControls.appendChild(speedLabel)
    
    let speedUpButton = document.createElement('button')
    // let speedUpTextNode = document.createTextNode('/\\')
    let speedUpTextNode = document.createTextNode('>>')
    speedUpButton.appendChild(speedUpTextNode)
    speedUpButton.classList.add('my-speed-control')
    speedUpButton.id = 'speed-up'
    myPersonalVideoControls.appendChild(speedUpButton)

    
    vjsControlBar.appendChild(myPersonalVideoControls)
    vjsControlBar.insertBefore(myPersonalVideoControls, vjsControlBar.childNodes[1])
  

    let cssArr = setCss()
    

    let mylabel = document.querySelector('.my-speed-label');
    mylabel.style = cssArr[3];
    mylabel.addEventListener('click', event => {
        videoTag.playbackRate = 1.00;
        mylabel.innerHTML = videoTag.playbackRate.toFixed(2);
    })

    document.addEventListener('keydown', (event) => {
        // console.log(event.key);
        if (event.key === 'd') {
            // videoTag.playbackRate += .05;
            // console.log("d was press")
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x';
        } else if (event.key === 's') {
            // videoTag.playbackRate -= .05;
            // console.log("s was press")
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x';
        } else if (event.key === 'r') {
            // videoTag.playbackRate = 1;
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2);
        } 
    })

    // mylabel.addEventListener('mouseenter', event => {
    //     mylabel.style.color = '#ff4d4d';
    // })

    // mylabel.addEventListener('onmouseleave', event => {
    //     mylabel.style.color = 'green';
    // })

    let buttons = document.querySelectorAll('.my-speed-control')
    buttons.forEach(button => {
        button.style = cssArr[1];
        button.addEventListener('click', event => {
            if (event.target.id == 'speed-up') {
            // console.log('speed up')
            // videoTag.playbackRate += .05
            videoTag.currentTime += 10
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x'
            } else if (event.target.id == 'speed-down') {
            // console.log('slow down')
            // videoTag.playbackRate -= .05
            videoTag.currentTime -= 10
            mylabel.innerHTML = videoTag.playbackRate.toFixed(2) + ' x'
            }
        })
    })



    

}