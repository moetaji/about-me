'use strict'
 let welcomeMsg
  welcomeMsg=prompt('hello what is your name')
   //console.log(welcomeMsg);
    alert('hello '+welcomeMsg);
    let age
    
       age=prompt('do you think im 25 years old yes/no ')
       age=age.toLocaleLowerCase();
        //console.log(age);
          if (age==='yes'||age==='y') {
           //console.log(age);
              alert('you are correct');    
            }
            else{
             alert("sorry y are wrong")
                } 
                 let favortDrink
                  
                   favortDrink=prompt('do you think i like hot drinks yes/no')
                    favortDrink=favortDrink.toLocaleLowerCase();
                      //console.log(favortDrink);
                       if (favortDrink==='yes'||favortDrink==='y') {
                         alert('you are right i do love hot drinks')
    
                    }                      
                        else {
                         alert('unfortunately i do love hot drinks')
                         }
                          let smoker
                            smoker=prompt('do you think i smoke yes/no')
                             smoker=smoker.toLocaleLowerCase();
                              if (smoker==='yes'||smoker==='y') {
                               alert(' yes i do smoke')
                              }  
                               else {
                                alert('i do smoke sometime')

                             }
                              let tall
                               tall=prompt('do u think im tall yes/no')
                                if (tall==='yes'||tall==='y') {
                                 alert('that is right im tall person')
                                
                                }
                                else{
                                 alert('well iam tall person')
                               }
                                alert("thank you for your time "+welcomeMsg)
       
  