const colorPicker = document.querySelector('input');
const button = document.querySelector('button');

// Generates a new ball on button click
button.addEventListener('click', (e) => {
    const newBall = document.createElement('div');
    newBall.classList.add('ball');
    document.body.appendChild(newBall);
    
});


// Changes ball color to match color of input
colorPicker.addEventListener('change', (e) => {
    ball.setAttribute('style', 'background-color: ' + colorPicker.value);
});