const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const sizeLabel = document.getElementById('selected-size');
const subjectLabel = document.getElementById('selected-subject');
const dropBoxSize = document.getElementById('dropbox-options-size');
const dropBoxSubject = document.getElementById('dropbox-options-subject');
const sizeOptions = document.querySelectorAll('.opt-size');
const subjectOptions = document.querySelectorAll('.opt-subject');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById("submit");
const expandDownSubject = document.getElementById('expand-down-subject');
const expandDownSize = document.getElementById('expand-down-size');
const chevronSize = document.getElementById('chevron-size');
const chevronSubject = document.getElementById('chevron-subject');

/* Abrir Opciones */
expandDownSubject.addEventListener('click', ()=>{
    chevronSubject.classList.toggle('active');
    dropBoxSubject.classList.toggle('active');
    subjectOptions.forEach(subject => {
        subject.addEventListener('click', () => {
            subjectLabel.textContent = subject.textContent;
            dropBoxSubject.classList.remove('active');
            chevronSubject.classList.remove('active');
        });
    });
});
expandDownSize.addEventListener('click', ()=>{
    chevronSize.classList.toggle('active');
    dropBoxSize.classList.toggle('active');
    sizeOptions.forEach(size => {
        size.addEventListener('click', () => {
            sizeLabel.textContent = size.textContent;
            dropBoxSize.classList.remove('active');
            chevronSize.classList.remove('active');
        });
    });
});

/* Resetear Form */
