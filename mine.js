// ????????????????????????????????????/jkbfjbejfneonfoienfoineoifeoifeiofieofoie

var inpname=document.getElementById("signupName");
var inpEmail=document.getElementById("signupEmail");
var inppwd=document.getElementById("signupPassword");
var addbtn=document.getElementById("addbtn");
var inpError=document.getElementById("inpError");
var urlError=document.getElementById("urlError");
var sininpEmail=document.getElementById("signinEmail");
var sininppwd=document.getElementById("signinPassword");
var incorrect=document.getElementById("incorrect");
var btnlogin=document.getElementById("btnlogin");
var username=document.getElementById("username");
var incorrectc=document.getElementById("incorrectc");
var exist=document.getElementById("exist");
var existx=document.getElementById("existx");
var existy=document.getElementById("existy");
// New project ??????????????????????????????????????????????????????????????????????????????????????????????
let x=document.getElementById("x"); // fake  variable


if (localStorage.getItem("allproduct")==null){
  var productlist=[];
} else{
var productlist=JSON.parse(localStorage.getItem("allproduct"));

}









function clearform(){
  sininpEmail.value="";
  sininppwd.value="";

}

function  signUp(){
  

  if (inpname.value== "" || inpEmail.value == "" || inppwd.value==""){
    existx.style.display="block";
    exist.style.display="none";
    existy.style.display="none";

  }

  else if (inpname.value !== "" && inpEmail.value !== "" && inppwd.value!==""){
   
   if (searchup() == true){
     existy.style.display="block";
   exist.style.display="none";
   existx.style.display="none";
 

   }
     else {
          var product ={
            name:inpname.value,
            email:inpEmail.value,
            pwd:inppwd.value
              }; 
              var mm =JSON.stringify("allproduct",JSON.stringify(productlist));
             
          productlist.push(product);
          localStorage.setItem("allproduct",JSON.stringify(productlist))
          exist.style.display="block";
                  existy.style.display="none";
                  existx.style.display="none";
                  
        
      
    }
  }
}




function searchup(){
  for (var i=0 ; i<productlist.length ; i++){
    if ( productlist[i].email == inpEmail.value){
  
      return true
      }

  

}
}





function search(){
  incorrect.style.display='none';
  incorrectc.style.display='none';

  if (localStorage.getItem("allproduct")==null){
    if (sininpEmail.value =="" || sininppwd.value==""){
      incorrect.style.display='block';
  

  } else{
    incorrectc.style.display='block';
  
  }
}

  for (var i=0 ; i<productlist.length ; i++){
    if (sininpEmail.value =="" || sininppwd.value==""){
      incorrect.style.display='block';
  
    }
  else if ( productlist[i].email == sininpEmail.value && productlist[i].pwd == sininppwd.value){
  document.getElementById("home").style.display="block";
  document.getElementById("log").style.display="none";
  document.getElementById("username").innerHTML="Welcome" +" " +productlist[i].name;
    console.log("yes");
  }
  else if ( productlist[i].email !== sininpEmail.value || productlist[i].pwd !== sininppwd.value){
    console.log("no")
    incorrectc.style.display='block';
  }
}
}

function login(){
  search()

}




function logout(){
  document.getElementById("home").style.display="none";
  document.getElementById("log").style.display="block";
  clearform()
  incorrect.style.display='none';
  incorrectc.style.display='none';
}
