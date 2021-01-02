const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let words=['MIGRATION','ENVIRONMENT','MICROSCOPE','TEMPERATURE','ELEPHANT','CONTINENT','EXPERIMENT','NUCLEUS','MOLECULE','PLATINUM','SKELETON','METAMORPHOSIS','ECLIPSE','PHOTOSYNTHESIS','ASTEROID','ELECTRONICS','GLACIER','PRESSURE','COMMUNICATION','EVOLUTION'];

const createNewWords = () => {
    let ranNumber = Math.floor(Math.random() * words.length);
    let newTempWords = words[ranNumber];
    return newTempWords;
}

const scrambleWords = (arr) =>{
    for (let i = arr.length-1;i>0;i--){
      let temp = arr[i];
      let j = Math.floor(Math.random()*(i+1));
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play = true; 
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords=scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the Word : ${randWords}`;
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            play = false;
            msg.innerHTML = `Awesome it's correct.It is ${newWords}`;
            btn.innerHTML = "Next";
            guess.classList.toggle('hidden');
        }else{
            msg.innerHTML = `OOPS!,you got this one wrong :( ${randWords}`;
            play= false;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');

        }
    }
})