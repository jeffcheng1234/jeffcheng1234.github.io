
function setFrame(expClass) {
    console.log(expClass);
    let frames = document.getElementsByClassName('experience--container');
    console.log(frames)
    let descriptions = document.getElementsByClassName('experience--body');
    console.log(descriptions)
    for (let i = 0; i < frames.length; i++) {
        if (frames[i].classList.contains(expClass)) {
            frames[i].classList.remove('hidden');
            console.log(`added ${frames[i]}`)
        } else {
            frames[i].classList.add('hidden');
            console.log(`removed ${frames[i]}`)
        }
        if (descriptions[i].classList.contains(expClass)) {
            descriptions[i].classList.remove('hidden');
        } else {
            descriptions[i].classList.add('hidden');
        }
    }
}

function study_cat(){
    setFrame('exp--study_cat');
}
function csm(){
    setFrame('exp--csm');
}
function project_taiwan(){
    setFrame('exp--project_taiwan');
}
function lab_assistant(){
    setFrame('exp--lab_assistant');
}
function tsa(){
    setFrame('exp--tsa');
}
document.getElementById('button--study_cat').onclick = study_cat;
document.getElementById('button--csm').onclick = csm;
document.getElementById('button--project_taiwan').onclick = project_taiwan;
document.getElementById('button--lab_assistant').onclick = lab_assistant;
document.getElementById('button--tsa').onclick = tsa;

