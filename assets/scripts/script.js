
function setFrame(expClass) {
    let frames = document.getElementsByClassName('experience--container');
    let descriptions = document.getElementsByClassName('experience--body');
    for (let i = 0; i < frames.length; i++) {
        if (frames[i].classList.contains(expClass)) {
            frames[i].classList.remove('hidden');
        } else {
            frames[i].classList.add('hidden');
        }
        if (descriptions[i].classList.contains(expClass)) {
            descriptions[i].classList.remove('hidden');
        } else {
            descriptions[i].classList.add('hidden');
        }
    }
}

function showClicked(buttonID) {
    let buttons = document.getElementsByClassName('experience--button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].firstElementChild.style.backgroundColor = '#EA9F4B';
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].children[1].style.fontWeight = 400;
    }
    let pressed = document.getElementById(buttonID);
    pressed.firstElementChild.style.backgroundColor = '#6B461B';
    pressed.children[1].style.fontWeight = "bold";

    
}
function study_cat(){
    setFrame('exp--study_cat');
    showClicked('button--study_cat');
}
function csm(){
    setFrame('exp--csm');
    showClicked('button--csm');
}
function project_taiwan(){
    setFrame('exp--project_taiwan');
    showClicked('button--project_taiwan');
}
function lab_assistant(){
    setFrame('exp--lab_assistant');
    showClicked('button--lab_assistant');
}
function tsa(){
    setFrame('exp--tsa');
    showClicked('button--tsa');
}
document.getElementById('button--study_cat').onclick = study_cat;
document.getElementById('button--csm').onclick = csm;
document.getElementById('button--project_taiwan').onclick = project_taiwan;
document.getElementById('button--lab_assistant').onclick = lab_assistant;
document.getElementById('button--tsa').onclick = tsa;

