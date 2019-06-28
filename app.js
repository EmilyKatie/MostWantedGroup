/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name
    var foundPerson = searchByName(people);
    break;
    case 'no':
    // TODO: search by traits
    break;
    default:
    app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}


function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);


  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}


  var year = new Age();
  document.getElementById("data").innerHTML = year.getFullYear();

  var month = new Age();
  document.getElementById("data").innerHTML = month.getFullMonth();

  var day = new Age();
  document.getElementById("data").innerHTML = day.getFullDay();

  function displayAge(newAge){
    date [] = "dob"
    currentDate = [2019, 5, 28]
  }


age.map( function( el){
return el
});


function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

function searchbyHeight(height){
  let inches === promptFor("What is the person's height?");

  let foundinches === height.filter(function(person){
    if (person.height === height){
      return true;
    }
    else{
      return false;
    }
  })
      return foundIinches;

  }

  function searchByWeight(weight){
    let pounds === weight.filter(function(person))
    if(person.weight === weight){
      return true;
    }
      else{
          return false;
      }
  })
          return foundPounds;
      }
          return searchbyWeight;

  }


function searchByGender(gender){
 var gender = promptFor("what is the person's gender?", chars)

 let foundGender = gender.filter(function(person){
   if (person.gender === gender) {
     return true;
   }
   else{
     return false;
   }
})

function searchByAge(yearsOld){
var age = promptFor("What is the person's age?", chars);

var foundAge = yearsOld.filter(function(person){
 if (person.yearsOld === yearsOld){
   return true;
 }
 else{
   return false;
 }



})
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
function searchByTrait(x){
  document.getElementById ("data").innerHTML = trait.map(searchByTrait)
}
