    "use strict";

    let welcomeMsg
    welcomeMsg = prompt('hello what is your name')
    //console.log(welcomeMsg);
    alert('hello ' + welcomeMsg);
    let score=0;
    let age
    age = prompt('do you think im 25 years old yes/no ')
    age = age.toLocaleLowerCase();
    //console.log(age);
    if (age === 'yes' || age === 'y') {
    //console.log(age);
    alert('you are correct');
    score=+1
    
    }
    else {
    alert("sorry y are wrong")
    }
    let favortDrink

      favortDrink = prompt('do you think i like hot drinks yes/no')
      favortDrink = favortDrink.toLocaleLowerCase();
      //console.log(favortDrink);
      if (favortDrink === 'yes' || favortDrink === 'y') {
      alert('you are right i do love hot drinks')
      score=+1
    }
    else {
    alert('unfortunately i do love hot drinks')
    }
    let smoker
    smoker = prompt('do you think i smoke yes/no')
    smoker = smoker.toLocaleLowerCase();
    if (smoker === 'yes' || smoker === 'y') {
      alert(' yes i do smoke')
      score=+1
    }
    else {
    alert('i do smoke sometime')

    }
    let tall
    tall = prompt('do u think im tall yes/no')
    if (tall === 'yes' || tall === 'y') {
      alert('that is right im tall person')
      score=+1

    }
    else {
    alert('well iam tall person')
    }
    
    
    let luckyNumber = prompt('can you gusse my number from 1 to 10')
    for (let i = 0; i < 4; i++) {
      if (luckyNumber <7)
      {alert('to low')
      luckyNumber=prompt('try again')
    }
    else if(luckyNumber >7){
      alert('to high')
      luckyNumber=prompt('try again')
    }
    else if(luckyNumber==7){
      score=+
      alert('you gusse it')
    }
  }
    
    let music
    let list =['rock','pop','rap'];
    for(let i=0;i<6;){
      music=prompt('can you gusse what type of music i listen to?');
      score=+1
      let correct=0;
    for(let t=0;t<list.length;t++){
      if(list[t].toLowerCase()===music.toLowerCase()){
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
    alert('result= '+score +'of 7' )
    alert("thank you for your time " + welcomeMsg);