let get_year = new Date() ; //initialize a new Date object

let current_Year = get_year.getFullYear() + 1; //initialize the upcoming year

document.getElementById('note').innerHTML = "New Year " + current_Year + " CountDown !" ;

let day , month , days , daysfeb; // initialize the variables

//function to countdown the time

let countdown = () => {

    //check whether current year is a normal year or leap year 
    if((current_Year -1) % 4 == 0) {
        
        days = 366 ; //set days for leap year
        daysfeb = 29 ; //set days for february in a leap year
    }

    else {

        days = 365 ; //set days for normal year
        daysfeb = 28 ; //set days for february in a normal year
    }


    let date = new Date() ; //initialize a new Date object

    console.log(date.getMinutes());

    day = date.getDate() ; //gives the current date

    month = date.getMonth() + 1 ; // getMonth gives 0 to 11 every month. so +1 gives real numbering of the month

    document.getElementById('seconds-r').innerHTML = timeDisplay( 60 - date.getSeconds() ) ;   //gives remaining seconds

    document.getElementById('minutes-r').innerHTML = timeDisplay( 59 - date.getMinutes() ) + " : " ; //gives remaining minutes

    document.getElementById('hours-r').innerHTML = timeDisplay( 23 - date.getHours() ) + " : " ; //gives remaining hours

    //swith for choose the month
    switch( month ){

        case 1 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - day )+ " : " ; //gives remaining days 
            document.querySelector('body').style.backgroundImage = "url('Images/January.jpg')" ;  //gives a background image for each month
            break;

        case 2 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + 31) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/February.jpg')" ;  //gives a background image for each month
            break;

        case 3 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - ( daysfeb + day + 31) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/march.jpg')" ;  //gives a background image for each month
            break;

        case 4 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 62) ) + " : "  ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/april.jpg')" ;  //gives a background image for each month
            break;

        case 5 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 92) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/may.jpg')" ;  //gives a background image for each month
            break;

        case 6 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 123) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/June.jpg')" ;  //gives a background image for each month
            break;

        case 7 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 153) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/july.jpg')" ;  //gives a background image for each month
            break;

        case 8 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 184) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/august.jpg')" ;  //gives a background image for each month
            break;

        case 9 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 215) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/september.jpg')" ;  //gives a background image for each month
            break;

        case 10 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 245) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/october.jpg')" ;  //gives a background image for each month
            break;

        case 11 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 276) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/november.jpg')" ;  //gives a background image for each month
            break;

        case 12 :

            document.getElementById('days-r').innerHTML = timeDisplay( days - (day + daysfeb + 306) ) + " : " ; //gives remaining days
            document.querySelector('body').style.backgroundImage = "url('Images/december.jpg')" ;  //gives a background image for each month
            break;


    }    
}

//function if digits comes to single number this will add 0 in front.
let timeDisplay = (time) => {

    return time < 10 ? `0${ time }` : time ; 

}

window.setInterval ( countdown, 1000 ) ; //runs every seconds 
