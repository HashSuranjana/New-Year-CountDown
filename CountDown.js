let get_year = new Date() ; //initialize a new Date object

let current_Year = get_year.getFullYear() + 1; //initialize the upcoming year

document.getElementById('note').innerHTML = "New Year " + current_Year + " !" ;

let day , month , Days , daysfeb; // initialize the variables

//function to countdown the time

let countdown = () => {

    //check whether current year is a normal year or 
    if(current_Year % 4 == 0) {
        
        Days = 366 ;
        daysfeb = 29 ;
    }

    else {

        Days = 365 ;
        daysfeb = 28 ;
    }


    let date = new Date() ; //initialize a new Date object

    day = date.getDate() ; 

    month = date.getMonth() + 1 ; // getMonth gives 0 to 11 every month. so +1 gives real numbering of the month

    document.getElementById('seconds-r').innerHTML = 60 - date.getSeconds() ;   //gives remaining seconds

    document.getElementById('minutes-r').innerHTML = 60 - date.getMinutes() + " : " ; //gives remaining minutes

    document.getElementById('hours-r').innerHTML = 24 - date.getHours() + " : " ; //gives remaining hours

    switch(month){

        case 1 :
            document.getElementById('days-r').innerHTML = 

    }

    

    
}

window.setInterval ( countdown, 1000 ) ; 
