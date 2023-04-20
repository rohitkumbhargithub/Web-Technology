const question = [
    {
        'que' : 'Which is not scrpting langauage',
        'a' : 'HTML',
        'b' : 'javaScript',
        'c' : 'python',
        'd' : 'nodeJS',
        'correct': 'a'
    },
    {
        'que' : 'HTML stand for',
        'a' : 'Hyper Markup Langauage',
        'b' : 'High markup langauage',
        'c' : 'Hello markup langauage',
        'd' : 'HyperText Markup Langauage',
        'correct': 'd'
    },
    {
        'que' : '10 + (20 * 2)',
        'a' : '40',
        'b' : '70',
        'c' : '50',
        'd' : '10',
        'correct': 'c'
    }
    
]

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById('quesBox')
const optionInputs = document.querySelectorAll('.options')
const loadquestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = question[index]
    console.log(data)
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}



const submitQuiz = () =>{
    const data = question[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
        if(input.checked){
            answer = input.value;
        }
    }
    )
    return answer;
}


const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <h2>Thank You Playing Quiz</h2>
    <h2>${right} / ${total} are correct</h2>
    `
}
loadquestion();