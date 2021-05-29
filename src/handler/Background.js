export const changeBg = (event) => {
    const target = event.target;

    switch (target.id) {
        case 'pomodoro': //if you click the pomodoro button
           target.className = 'time-btn-active'; //where you clicked
           active(event.currentTarget); //just make current button active
            document.getElementsByClassName('wrapper')[0].style.background = 'rgb(240, 91, 86)'; //change page background
            document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(240, 91, 86)'; //make button active

            const time = document.getElementsByClassName('time-count')[0]; //timer board
            time.innerHTML = '25:00'; //Initial status
            document.getElementsByClassName('start-work')[0].innerHTML = 'Time to work!' //change state of plan

            break;

        case 'short-break': //if you click the short break button
            target.className = 'time-btn-active'; //where you clicked
            active(event.currentTarget); //make current button active
            document.getElementsByClassName('wrapper')[0].style.background = 'rgb(76, 166, 169)'; //change page background
            document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(76, 166, 169)'; //make button active
            document.getElementsByClassName('time-count')[0].innerHTML = '05:00';
            document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break'; //change state of plan
            break;

        case 'long-break': //if you click the long break button
            target.className = 'time-btn-active'; //where you clicked
            active(event.currentTarget); //make current button acitve
            document.getElementsByClassName('wrapper')[0].style.background = 'rgb(73, 143, 193)'; //change page background
            document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(73, 143, 193)'; //make button active
            document.getElementsByClassName('time-count')[0].innerHTML = '15:00';
            document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break'; //change state of plan
    }

    function active(parent){
        Array.from(parent.children).forEach((element) => {
            //make unclicked buttons inactive
            if(element !== event.target){
                element.className = 'time-btn';
            }
        });
    }
};
