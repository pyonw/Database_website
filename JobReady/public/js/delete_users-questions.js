// Citation for the following page:
// Date: 12/05/2022
// Adapted from: 
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
function deleteUsersQuestions(users_questions_id) {
    // Put our data we want to send in a javascript object
    if (confirm("Are you sure you want to delete?") == false) {
      return
    }
    
    let data = {
        users_questions_id: users_questions_id
    };
    
    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/delete-users-questions-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 204) {

            // Add the new data to the table
            deleteRow(users_questions_id);
        }
        else if (xhttp.readyState == 4 && xhttp.status != 204) {
            console.log("There was an error with the input.")
        }
    }
    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
}

function deleteRow(users_questions_id){

    let table = document.getElementById("users-questions-table");
    for (let i = 0, row; row = table.rows[i]; i++) {
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       if (table.rows[i].getAttribute("data-value") == users_questions_id) {
            table.deleteRow(i);
            deleteDropDownMenu(users_questions_id);
            break;
       }
    }
}


function deleteDropDownMenu(users_questions_id){
  let selectMenu = document.getElementById("mySelect");
  for (let i = 0; i < selectMenu.length; i++){
    if (Number(selectMenu.options[i].value) === Number(users_questions_id)){
      selectMenu[i].remove();
      break;
    } 

  }
}