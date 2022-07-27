function mouseDown() {
    document.getElementById("createb").style.backgroundColor = "grey";
  }
  
  function mouseUp() {
    document.getElementById("createb").style.backgroundColor = "rgb(13, 166, 226)";
  }

  function validateName() {
    let x = document.forms["form1"]["name"].value;
    if (x == "") {
      // alert("Name is empty");
      document.getElementById("error-name").innerHTML = "*Name is empty";
      return false;
    }
    return true;
  }

  function validateEmployeeId(){
    let x=document.forms["form1"]["id"].value;
    if(!x.match(/E-\d+/i)){
      document.getElementById("error-id").innerHTML = "*Enter valid employee id";
        return false;  
    }
    return true;
  }

  function validateExperience(){
    let x=document.forms["form1"]["experience"].value;
    if(!x.match(/^\d+/)){
      document.getElementById("error-experience").innerHTML = "*Enter experience in number";
        return false;  
    }
    return true;
  }

  /* if incase email is addded in the form- email validation*/
  
  // function validateEmail(){
    
  //   let x=document.forms["form1"]["email"].value;
  //   if (!x.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
  //   {
  //     document.getElementById("error-email").innerHTML = "*Enter valid email address";
  //     return false;
  //   }
  // }

  function validateDate(){

    var date = document.forms["form1"]["joiningdate"].value;
    var pattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (date == null || date == "" || !pattern.test(date)) {
      document.getElementById("error-date").innerHTML = "*Enter valid date";
        return false;
    }
    else {
        return true
    }
  }

  let inputtimer;

  function submit(){
    if(!inputtimer){
      document.getElementById("createb").style.backgroundColor = "grey";
    };
    timer= setTimeout(() => {
      inputtimer=undefined;
    },5000);
      return false;
    }

  function validateForm(){
    let a=validateName();
    let b=validateEmployeeId();
    let c=validateExperience();
    // let d=validateEmail();
    let d=validateDate();
    if(a && b && c && d){submit();}
    return false;
  }

 