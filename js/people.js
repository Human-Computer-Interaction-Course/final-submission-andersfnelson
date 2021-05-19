var people =[
    {
        "name": "Anders Nelson",
        "status": "Currently enrolled",
        "classes": ["SENG 3230", "SENG 4310", "CWEB 1111"]
    },
    {
        "name": "Jane Doe",
        "classes": ["CNTS 1200", "CWEB 3030"]
    },
    {
        "name": "Joe Student",
        "employer": "Target",
        "phone": "555-555-5555"
    }
]
function showPeople(index){
    // console.log(index)
    var html = document.getElementById('people');


    if (html.style.display === "none") {
        html.style.display = "block";
       } 
    //else {
    //     html.style.display = "none";
    //   }
    // document.getElementById('content').style.gridTemplateRows="200px 1000px 200px";
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
    

}
function hideDetails(){
    document.getElementById('hidebutton').style.display='none';
    document.getElementById('people').style.display='none';
    
}
// document.addEventListener("mouseenter", function(){
//     var button = document.getElementsByClassName('button')

// })
// function buttonClick(){
//     console.log('button click');
// }
