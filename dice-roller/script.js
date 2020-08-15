const diceSet = document.querySelector('.container');
const result = document.querySelector('.answer-box');

//html template to show the roll
const generateTemplate = diceRoll => {
    const html = `<p>Your roll is: ${diceRoll}</p>`;
    result.innerHTML = html;
};

//functionality for rolling dice
diceSet.addEventListener('click', e => {
    e.preventDefault();  
    const rollValue = parseInt(e.target.value);
    let diceRoll = (Math.floor(Math.random ()*(rollValue)+1));
    generateTemplate(diceRoll);
});

//animating the roll 
// let output = 0;
//     const timer = setInterval(() => { //setInterval fires the code multiple times
//         result.querySelector('span').textContent = `${output}%`;
//         if(output === score){
//             clearInterval(timer); //stops the setInterval
//         } else {
//             output++;
//         }
//     }, 10);