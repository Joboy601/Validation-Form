
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form')
const pattern = {
    fullName :/^[a-z ]+$/i ,
    userId :/^([a-z-]{2,5})([\d]{2,4})$/i,
    password : /^[\w\.\?\-%]{8,}$/i,
    zipcode : /^[\d]{6}$/,
    NIN : /^[\d]{11}$/,
    Mobile: /^(^\+23481|^\+23480|^\+23490|\+23491)[\d]{8}$/i,
    Genotype:/^(AA|AS|SS)$/,
    Email:/^([a-z\.-_\d]+)@([a-z-]+)\.([a-z]{2,8})([\.a-z]{2,8})?$/,
    city: /^[a-z]{4,}$/i
}


const patternCheck = function (field,regex) {
    if(regex.test(field.value)) {
         field.className = 'valid';
    } else{
        field.className = 'invalid'
    }
}




inputs.forEach((input)=>{
   input.addEventListener('keyup',(e)=>{
   patternCheck(e.target,pattern[e.target.attributes.name.value ])
   })
})

form.addEventListener('submit',(e)=>{
e.preventDefault();
window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
   });
   setTimeout(()=>{
    document.querySelector('form').style.display='none';
    document.querySelector('.submitted').style.display='block';
    document.querySelector('header').style.display='none';
    document.querySelector('body').classList.add('opaque');
   },1000)
  
})