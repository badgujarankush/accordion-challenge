const questions = document.querySelectorAll('.question');


const fun = ()=>{
    questions.forEach(question=>{
        question.addEventListener('click',()=>{
            question.classList.toggle('active');
            const answerBody = question.nextElementSibling;
            if(question.classList.contains('active')){
                answerBody.style.maxHeight = answerBody.scrollHeight + 'px';
            }
            else{
                answerBody.style.maxHeight = 0;
            }
            
        })
    });
    
};

fun();