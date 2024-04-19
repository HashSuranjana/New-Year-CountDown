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

    month = date.getMonth() + 1 ; // getMonth gives 0 to 11 every month. so +1 gives real numbering of the month

    document.getElementById('seconds-r').innerHTML = 60 - date.getSeconds() ;   //gives remaining seconds

    document.getElementById('minutes-r').innerHTML = 60 - date.getMinutes() + " : " ; //gives remaining minutes

    document.getElementById('hours-r').innerHTML = 24 - date.getHours() + " : " ; //gives remaining hours

    switch(8){

        case 1 :

            document.getElementById('days-r').innerHTML = days - day + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/January.jpg')" ;
            break;

        case 2 :

            document.getElementById('days-r').innerHTML = days - (day + 31) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/February.jpg')" ;
            break;

        case 3 :

            document.getElementById('days-r').innerHTML = days - ( daysfeb + day + 31) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/march.jpg')" ;
            break;

        case 4 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 62) + " : "  ;
            document.querySelector('body').style.backgroundImage = "url('Images/april.jpg')" ;
            break;

        case 5 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 92) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/may.jpg')" ;
            break;

        case 6 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 123) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/april.jpg')" ;
            break;

        case 7 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 153) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/july.jpg')" ;
            break;

        case 8 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 184) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/august.jpg')" ;
            break;

        case 9 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 215) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/april.jpg')" ;
            break;

        case 10 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 245) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/april.jpg')" ;
            break;

        case 11 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 276) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/april.jpg')" ;
            break;

        case 12 :

            document.getElementById('days-r').innerHTML = days - (day + daysfeb + 306) + " : " ;
            document.querySelector('body').style.backgroundImage = "url('Images/april.jpg')" ;
            break;


    }

    

    
}

window.setInterval ( countdown, 1000 ) ; 
