let get_year = new Date() ; //initialize a new Date object

let current_Year = get_year.getFullYear() + 1; //initialize the upcoming year

document.getElementById('note').innerHTML = "New Year " + current_Year + " !" ;

let day , month , days , daysfeb; // initialize the variables

//function to countdown the time

let countdown = () => {

    //check whether current year is a normal year or leap year 
    if((current_Year -1) % 4 == 0) {
        
        days = 366 ;
        daysfeb = 29 ;
    }

    else {

        days = 365 ;
        daysfeb = 28 ;
    }


    let date = new Date() ; //initialize a new Date object

    day = date.getDate() ; 

    console.log(day);
    month = date.getMonth() + 1 ; // getMonth gives 0 to 11 every month. so +1 gives real numbering of the month

    document.getElementById('seconds-r').innerHTML = 60 - date.getSeconds() ;   //gives remaining seconds

    document.getElementById('minutes-r').innerHTML = 60 - date.getMinutes() + " : " ; //gives remaining minutes

    document.getElementById('hours-r').innerHTML = 24 - date.getHours() + " : " ; //gives remaining hours

    console.log(month);

    switch(month){

        case 1 :
            document.getElementById('days-r').innerHTML = days - day + " : " ;
        case 2 :
            document.getElementById('days-r').innerHTML = days - (day + 31) + " : " ;
        case 3 :
            document.getElementById('days-r').innerHTML = days - ( daysfeb + day + 31) + " : " ;
        case 4 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 62) + " : "  ;
        case 5 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 92) + " : " ;
        case 6 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 123) + " : " ;
        case 7 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 153) + " : " ;
        case 8 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 184) + " : " ;
        case 9 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 215) + " : " ;
        case 10 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 245) + " : " ;
        case 11 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 276) + " : " ;
        case 12 :
            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 306) + " : " ;

    }

    

    
}

window.setInterval ( countdown, 1000 ) ; 
