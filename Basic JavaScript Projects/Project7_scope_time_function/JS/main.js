//Global variable
var x = 10;

//This if else function displays a different result if user input is above or below 10
function money_function() {

    // user_input is a local variable.
    var user_input = Number(document.getElementById("user_input_box").value);

    if (user_input >= x) {
        document.write("You have enough money");

    } else {
        document.write("You don't have enough money");
    }
}

//Time_function as mentioned to be included in the assignment
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
//Function with an error

function money_function_2() {

    //wrong ID 
    console.log(document.getElementById("money_function_1"));
    var user_input = Number (document.getElementById("money_function_1").value);

    //Classic syntax error, wrong capitalization
    if (User_Input >= x) {
        document.writee("You have enough money");

    } else {
        document.write("You don't have enough money");
    }
}