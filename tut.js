let string = "";
let buttons = document.querySelectorAll('.boxbtn');
Array.from(buttons).forEach((boxbtn)=>{
  boxbtn.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'RESET'){
        string = ""
        document.querySelector('input').value = string;
      }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})