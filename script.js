let userInput=document.getElementsByClassName("input")[0];
let results=document.getElementById("result");
let outer=document.getElementsByClassName("inputouter");
userInput.max=new Date().toISOString().split("T")[0];
let yeardiff, monthdiff, daydiff;
function calculateAge(){
    let datenew=new Date(userInput.value);

    let bdate=datenew.getDate();
    let bmonth=datenew.getMonth()+1;
    let byear=datenew.getFullYear();

    let today=new Date();

    let cdate=today.getDate();
    let cmonth=today.getMonth()+1;
    let cyear=today.getFullYear();

     yeardiff=cyear-byear;

    
    if(cmonth>=bmonth){
        monthdiff=cmonth-bmonth;
    }
    else{
        yeardiff--;
        monthdiff=12+cmonth-bmonth;
    }
   
    if(cdate>=bdate){
        daydiff=cdate-bdate;
    }
    
    else{
        monthdiff--;
        daydiff=caldate(byear,bmonth)+cdate-bdate;   
    }
    if(monthdiff<0){
        monthdiff=11;
        yeardiff--;
    }
 results.innerHTML=`You are <span>${yeardiff}</span> years <span>${monthdiff}</span> month and <span>${daydiff}</span> days old`;
}
function caldate(year,month){
    // return last date of that month or number of days in that month
return new Date(year,month,0).getDate();
}



   

  

   
  

