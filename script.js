const words = ["Web Developer", "Cloud Learner", "Programmer"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

currentWord = words[i];

if(isDeleting){
document.querySelector(".typing").textContent =
currentWord.substring(0,j--);
}else{
document.querySelector(".typing").textContent =
currentWord.substring(0,j++);
}

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1000);
}

else if(isDeleting && j === 0){
isDeleting = false;
i++;
if(i === words.length){
i = 0;
}
}

setTimeout(type,100);

}

type();