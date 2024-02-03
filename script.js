let user = document.getElementById('inner_div1');
let comp = document.getElementById('inner_div2');
let user_result = document.getElementById('span1');
let comp_result = document.getElementById('span2');
let result = document.getElementById('h1');
let paper = document.getElementById('icon1');
let scissor = document.getElementById('icon2');
let stone = document.getElementById('icon3');

let user_result1 = 0;
let comp_result1 = 0;
let paper1 = 0;
let scissor1 = 1;
let stone1 = 2;
// combination paper paper,s,stone, Sc,P,Sc,St,
// draw p p sc sc s s
// lose p sc sc s s p
// win  p st sc p st sc
paper.addEventListener('click', pressPaper);
scissor.addEventListener('click', pressScissor);
stone.addEventListener('click', pressStone);
function comp1() {
    let comp_result = (Math.floor(Math.random() * 3));
    return comp_result
}
function pressPaper() {
    let random = comp1();
    compare(paper1, random)
}
function pressScissor() {
    let random = comp1();
    compare(scissor1, random);
}
function pressStone() {
    let random = comp1();
    compare(stone1, random);
}
function compare(userInput, systemInput) {
    let userTitle = getTitle(userInput) + "(user)".fontsize(6).sub()
    let systemTitle = getTitle(systemInput) + "(Comp)".fontsize(6).sub()
    let title = "";

    if ((userInput == paper1 && systemInput == stone1)
        || (userInput == scissor1 && systemInput == paper1)
        || (userInput == stone1 && systemInput == scissor1)) {
        user_result1++;
        user_result.innerHTML = user_result1;
        title = userTitle + " beats " + systemTitle + ". " + "you win"
        borderColor('win', userInput);
        document.getElementById('outer_div').style.borderColor = 'green';
    } else if ((userInput == paper1 && systemInput == scissor1)
        || (userInput == scissor1 && systemInput == stone1)
        || (userInput == stone1 && systemInput == paper1)) {
        comp_result1++;
        comp_result.innerHTML = comp_result1;
        title = userTitle + " lose " + systemTitle + ". " + " you lose"
        borderColor('lose', userInput);
        document.getElementById('outer_div').style.borderColor = 'red';
    } else if (userInput == systemInput) {
        title = userTitle + " equal " + systemTitle + ". " + "it draws"
        borderColor('draw', userInput);
        document.getElementById('outer_div').style.borderColor = 'darkgrey';
    }
    result.innerHTML = title
}
function getTitle(input) {
    if (input == stone1) {
        return "Stone"
    } else if (input == scissor1) {
        return "Scissor"
    } else {
        return "Paper"
    }
}
function borderColor(result, userInput) {
    if (userInput == paper1) {
        paperBox(result);
    } else if (userInput == scissor1) {
        scissorBox(result);
    } else {
        stoneBox(result);
    }
    function paperBox(result) {
        scissor.style.borderColor = 'white';
        stone.style.borderColor = 'white';
        if (result == 'win') {
            paper.style.borderColor = 'green';
        } else if (result == 'lose') {
            paper.style.borderColor = 'red';
        } else {
            paper.style.borderColor = 'darkgrey';
        }
    }
    function scissorBox(result) {
        paper.style.borderColor = 'white';
        stone.style.borderColor = 'white';
        if (result == 'win') {
            scissor.style.borderColor = 'green';
        } else if (result == 'lose') {
            scissor.style.borderColor = 'red';
        } else {
            scissor.style.borderColor = 'darkgrey';
        }
    }
    function stoneBox(result) {
        paper.style.borderColor = 'white';
        scissor.style.borderColor = 'white';
        if (result == 'win') {
            stone.style.borderColor = 'green';
        } else if (result == 'lose') {
            stone.style.borderColor = 'red';
        } else {
            stone.style.borderColor = 'darkgrey';
        }
    }
}