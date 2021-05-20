/* 
The main purpose of the javascript file is to display and hide some "details" about people.
I just hardcoded an array of objects to symbolize what the data might look like.
I set up a table to hold this additional data, and when the "view details" button is clicked,
the display is set to block (instead of one), and the data is populated using the "document.getElementById" method.
*/
var people =[
    {
        "name": "Anders Nelson",
        "status": "Currently enrolled",
        "classes": ["SENG 3230", "SENG 4310", "CWEB 1111"],
        "phone": "111-111-1111",
        "email": "anders@dunwoody.edu"
    },
    {
        "name": "Jane Doe",
        "classes": ["CNTS 1200", "CWEB 3030"],
        "phone": "222-222-2222"
    },
    {
        "name": "Joe Student",
        "employer": "Target",
        "phone": "555-555-5555",
        "email": "joe@target.com"
    }
]
/* 
This is the function to handle the display of the additional information.
I used a bunch of if/else statements here to get the data to clear.  I was running
into a problem where if I clicked between people and there was a field missing in the new person's data,
the old data from the previous person would stay there, which I didn't want.
*/
function showPeople(index){
    // console.log(index)
    var html = document.getElementById('details');


    if (html.style.display === "none") {
        html.style.display = "block";
       } 
      document.getElementById('hidebutton').style.display='block';
    
    if (people[index].phone){
        document.getElementById('phoneNumber').innerHTML=people[index].phone;
    }
    else{
        document.getElementById('phoneNumber').innerHTML='';
    }
    if (people[index].employer){
        document.getElementById('employer').innerHTML=people[index].employer;
    }
    else{
        document.getElementById('employer').innerHTML='';
    }
    if (people[index].classes){
        document.getElementById('currentClasses').innerHTML=people[index].classes;
    }
    else{
        document.getElementById('currentClasses').innerHTML='';
    }
    if (people[index].email){
        document.getElementById('email').innerHTML=people[index].email;
    }
    else{
        document.getElementById('email').innerHTML='';
    }
    

}
// Another user defined function here, just to handle hiding the details view if the user wants to.
function hideDetails(){
    document.getElementById('hidebutton').style.display='none';
    document.getElementById('details').style.display='none';
    
}
