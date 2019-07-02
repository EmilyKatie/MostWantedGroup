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
    let searchByTraits= searchByTraits(people);
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
    return app (people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch (displayOption){
    case "info":
    let foundinfo = getInfo(people);
    // TODO: get person's info
    break;
    case "family":
    let findFamily = findFamily(people);
    // TODO: get person's family
    break;
    case "descendants":
    let getDescendants = getDescendants(people);

    // TODO: get person's descendants
    break;
    case "restart":
    let app = app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu (person, people); // ask again
  }
}

function searchByName (people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
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
function displayPeople (people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}


function findAge(people, person) {
  let yearsOld = promptFor("What is the person's age?", chars);
  let today = new Date();
  let personDob = dob[i] ;
}
  for (let i = people.length - 1; i >= 0; i--){
    birthDate =Dob[i];
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getFullMonth() - birthDate.getFullMonth();

    if (person.yearsOld === yearsOld && person.dob === dob){
      return true;
    }
    else{
      return false;
    }
  }
alert (birthDate);

function searchByGender (people) {
  let gender = promptFor("What is the person's gender?", chars);

  let foundGender = gender.filter(function(person) {
    if (person.gender === gender) {
      return true;
    }
    else{
      return false;
    }
  })
}

function searchByHeight (people) {
      let height = promptFor("What is the person's height?", chars);
      let foundHeight= height.filter(function(person){
        if(person.height === height){
          return true;
        }
        else{
          return false;
      }
    })
  }

function searchByWeight (people) {
  let weight = promptFor("What is the person's weight?");
  let foundWeight= weight.filter(function(person){
    if(person.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
}

function searchByTrait (trait) {
  let age = promptFor("What is the person's age?", chars);
  alert(age);
  let height = promptFor("What is the person's height?", chars);
  alert(height);
  let weight = promptFor("What is the person's weight?", chars);
  alert(weight);
  let gender = promptFor("What is the person's gender?", chars);
  alert(gender);
}

function displayPerson (person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

function getSiblings (people){
  let findSiblings = people.filter(function(_siblings))
}
    for (let i = 0; i < findSiblings.length; i++){
      findSiblings.push;
      alert(people.map(function(_sister,_brother){

    return getSiblings(people, findSiblings.family[i]){
}

function getDescendants (people, child){
  let findChildren = people.filter(function(child){
    for (let i = 0; i < child.parents.length; i++){
      if(person.id === child.parents[i].id){
        return true;
      }
      else{
        return false;
      }
      alert(findChildren.map(function(el){
        namestring += el.firstName + " " + el.lastName + "\n";
        alert("Children");
      }));
    }
  })
}
  function foundChildren (people, child){
  let foundChildren = []
   for( let i = 0; i < foundChildren.length; i++){
     foundChildren.push
       return getDescendants (people, foundChildren.parents[i].id);
   }
}

  x = data
  let nameString = ""
    alert(foundChildren(function(el){
      nameString += el.firstName + " " + el.lastName + "\n";
      alert("Grandchild");
    }));

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
