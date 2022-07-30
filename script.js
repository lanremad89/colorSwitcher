// create a function
function myFunction(){
// declare variable and set it equal to the ID 'mySelect' 
    const color = document.getElementById("mySelect")
    // selected options will change color base on there value
    document.body.style.backgroundColor = color.options[color.selectedIndex].value;
  }
  
  