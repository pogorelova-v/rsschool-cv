const about = document.getElementById('about');
const contacts = document.getElementById('contacts');
const skills = document.getElementById('skills');
const language = document.getElementById('language');

const aboutBlock = document.getElementById('aboutBlock');
const contactsBlock = document.getElementById('contactsBlock');
const skillsBlock = document.getElementById('skillsBlock');
const languageBlock = document.getElementById('languageBlock');

let arrEl = [about, contacts, skills, language];
let arrBl = [aboutBlock, contactsBlock, skillsBlock, languageBlock, ];
arrEl = Array.from(arrEl);
arrBl = Array.from(arrBl);

const project = document.getElementById('project');
const examples = document.getElementById('examples');
const projectBlock = document.getElementById('projectBlock');
const examplesBlock = document.getElementById('examplesBlock');

let arrElW = [project, examples];
let arrBlW = [projectBlock, examplesBlock];

arrElW = Array.from(arrElW);
arrBlW = Array.from(arrBlW);


arrEl.forEach(element => {
    element.addEventListener('click', () => {
        for (let i = 0; i < arrEl.length; i++) {
            arrBl[i].classList.remove('blockActive');
        }
        let num = arrEl.indexOf(element);
        arrBl[num].classList.add('blockActive');
    });
});

arrElW.forEach(element => {
    element.addEventListener('click', () => {
        for (let i = 0; i < arrElW.length; i++) {
            arrBlW[i].classList.remove('blockActiveW');
        }
        let num = arrElW.indexOf(element);
        arrBlW[num].classList.add('blockActiveW');
    });
});