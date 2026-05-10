const signIn =document.getElementById('sign-in')
const signUp =document.getElementById('sign-up')
const form =document.getElementById('form')
const banner =document.getElementById('banner')

signIn.addEventListener('click', ()=>{
    form.classList.remove('toggle')
    banner.classList.remove('toggle')
})
signUp.addEventListener('click', ()=>{
    form.classList.add('toggle')
    banner.classList.add('toggle')
})


function toggleForms() {
    document.querySelector('.login').classList.toggle('hidden');
    document.querySelector('.register').classList.toggle('hidden');
}