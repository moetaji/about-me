    "use strict";

    let welcomeMsg
    welcomeMsg = prompt('hello what is your name')
    //console.log(welcomeMsg);
    alert('hello ' + welcomeMsg);
    let score=0;
    function qone() {
      
    
    let age
    age = prompt('do you think im 25 years old yes/no ')
    age = age.toLocaleLowerCase();
    //console.log(age);
    if (age === 'yes' || age === 'y') {
      score=++
    //console.log(age);
    alert('you are correct');
    
    }
    else {
    alert("sorry y are wrong")
    }return age
  }
  qone()


    function Qtwo(){
    let favortDrink

      favortDrink = prompt('do you think i like hot drinks yes/no')
      favortDrink = favortDrink.toLocaleLowerCase();
      //console.log(favortDrink);
      if (favortDrink === 'yes' || favortDrink === 'y') {
        score=++
      alert('you are right i do love hot drinks')
    }
    else {
    alert('unfortunately i do love hot drinks')
    }return favortDrink
  }
  Qtwo()

    function Qthree(){
    let smoker
    smoker = prompt('do you think i smoke yes/no')
    smoker = smoker.toLocaleLowerCase();
    if (smoker === 'yes' || smoker === 'y') {
      score=++
      alert(' yes i do smoke')
    }
    else {
    alert('i do smoke sometime')

    }return smoker
  }Qthree()

    function Qfour(){
    let tall
    tall = prompt('do u think im tall yes/no')
    if (tall === 'yes' || tall === 'y') {
      score=++
      alert('that is right im tall person')

    }
    else {
    alert('well iam tall person')
    }return tall 
  }Qfour()
  
    function Qfive(){
    let luckyNumber = ('')
    for (let i = 0; i < 4; i++) {
      luckyNumber = prompt('can you gusse my number from 1 to 10')
      if (luckyNumber <7)
      {alert('to low')
    }
    else if(luckyNumber >7){
      alert('to high')
      
    }
    else if(luckyNumber==7){
      score++
      alert('you gusse it')

    }
  
  }return luckyNumber
}
 Qfive()

 function Qsix(){
let animals=prompt("Do I love animals?")
animals=animals.toLowerCase
if(animals==='yes' || animals==='y'){
  alert("yes , you right")
  score++

} else if(animals==="no" || animals==="n"){
  alert("no, you are wrong")
}
else{
  alert('please answer yes/y or no/n without space')
}return animals
} Qsix() 

    function Qseven(){
    let music
    let list =['rock','pop','rap'];
    for(let i=0;i<6;){
      music=prompt('can you gusse what type of music i listen to?');
      let correct=0;
      for(let t=0;t<list.length;t++){
        if(list[t].toLowerCase()===music.toLowerCase()){
          score=+
          alert('that is right');
        correct=1;
        break;
      }
    }
    if (correct===1){
      break;
    }
    else if(!music.toString()){
      alert('type somthing');}
      else{
        alert('try another time');
      }

      alert('attemt number'+ ++i)
      
    }

    alert('correct answers '+list);
    return music
  } Qseven()
    alert('result= '+score +'of 7' )
    alert("thank you for your time here " + welcomeMsg);
   // hello