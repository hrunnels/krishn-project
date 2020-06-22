var answersList = ['horse','ranch','howdy','sand','heat','sweat','partner','mighty','hung','rifle','draw']
let alphabet = ['a','b', 'c', 'd','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let alphabet2=[]
let answer = '';
let guesses = 11;
let mistakes = 0;
let guessed = [];
let correctletters = [];
var answerArray = [];


function randomanswer(){
    answer = answersList[Math.floor(Math.random()*answersList.length)];
}
randomanswer();


/* The document lines*/
document.getElementById('guesses').innerHTML = guesses;

/* The answer lines*/
const answerbank = Array.from(answer);
const answerbank2 = Array.from(answer);



//function letters() {
//    while (answerbank2>0) {
//    if (answerbank2.includes(event.key)){
//        for (j=0; j<answerArray.length;j++ ){
//            if (answerbank[j] = event.key)
//            {answerArray[j] == event.key
//                document.getElementById('guessedwords').innerHTML = answerArray;}

 
//        }
//    }
    
//}
//}

for (i = 0; i < answer.length; i++) {
    answerArray[i] = " __ "
}

function fillinwords() {

   
    document.getElementById('guessedwords').innerHTML = answerArray;

    if (alphabet.includes(event.key)) {
        
        guesses=guesses-1
        var index=alphabet.indexOf(event.key)
        alphabet.splice(index,1)
        alphabet2.push(event.key)
        document.getElementById('guesses').innerHTML = guesses;
        }
        
        else if(alphabet2.includes(event.key)){
            //pass
        }
        else {
            alert('invalid letter')
        }
/* correct letter*/
    if (answerbank2.includes(event.key)){
        correctletters.push(event.key);
        document.getElementById('correctguesses').innerHTML = correctletters;
        for (j = 0; j < answerArray.length; j++) {
            if (answerbank[j] == event.key) {
                answerArray[j] = event.key
                var index = answerbank2.indexOf(event.key)
                answerbank2.splice(index, 1)
                document.getElementById('guessedwords').innerHTML = answerArray;
            }


        }
    }
/* used letter*/
    else if(correctletters.includes(event.key)|| guessed.includes(event.key)){
        //pass
    }
/* incorrect letter*/
    else {
        guessed.push(event.key);
        document.getElementById('incorrectguesses').innerHTML = guessed;
    }

/* win/lose commands*/

    if (answerbank2==0){
        alert('CONGRATULATIONS!')
        window.location.reload()
    }

    if (guesses==0){
        alert('Sorry the correct word was '+ answer) 
        alert('Try again...')
        location.reload()
    }
    
}




alert('The Answer is '+ answer)
fillinwords()

