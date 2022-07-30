function myFunction(){
    const color = document.getElementById("mySelect")
    document.body.style.backgroundColor = color.options[color.selectedIndex].value;
  }
  
  