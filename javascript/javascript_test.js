/*  
-------------------------------
Tyler's Javascript test script
-------------------------------
*/



{
	document.write("<h1>Javascript Test</h1>");
	document.write("<h2>Output:</h2>");

var x=prompt("Enter a number between 0 and 10:","");

try
  { 
  if(x>10)
    {
    throw "Err1";
    }
  else if(x<0)
    {
    throw "Err2";
    }
  else if(isNaN(x))
    {
    throw "Err3";
    }
  }
catch(er)
  {
  if(er=="Err1")
    {
    alert("Error! The value is too high");
    }
  if(er=="Err2")
    {
    alert("Error! The value is too low");
    }
  if(er=="Err3")
    {
    alert("Error! The value is not a number");
    }
  }
  
  }






// Example of an alert dialog box (popup window with OK button).

function show_alert()
{
	alert("Your answer: " + calculate(3,4));
}



// Example of a simple function with values passed and returned.

function calculate(a,b)
{
	return a*b;
}




// Example of a confirmation (OK/Cancel) dialog box.

function show_confirm()
{
	var yesorno = confirm("Press a button");
	
	if (yesorno==true)
		document.write("You pressed OK!");
	else
		document.write("You pressed Cancel!");
}



// Examploe of a Prompt.

function show_prompt()
{
	var name=prompt("Please enter your name","Harry Potter");
	if (name!=null && name!="")
  	{
  		document.write("Hello " + name + "! How are you today?");
  	}
}