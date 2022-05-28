const dayE1 = document.getElementById('Days');
const hourE1 = document.getElementById('hour');
const minuteE1 = document.getElementById('Min');
const secondE1 = document.getElementById('Sec');

const dcircle = document.getElementById('dd');
const hcircle = document.getElementById('hh');
const mcircle = document.getElementById('mm');
const scircle = document.getElementById('ss');

const d_dots = document.querySelector('.dots');
const h_dots = document.querySelector('.h_dots');
const m_dots = document.querySelector('.m_dots');
const s_dots = document.querySelector('.s_dots');
const birthdaydate = '05 jul 2022';

function countdown()
{   

    const mybirthdaydate = new Date(birthdaydate);
    const currentdate = new Date();

    //seconds
    const seconds = (Math.floor(mybirthdaydate - currentdate)) / 1000;

    const days = Math.floor(seconds / 86400);

    const hours = Math.floor((seconds % 86400) / 3600);

    const minutes = Math.floor(((seconds % 86400) % 3600) / 60);

    const secondsleft = Math.floor(((seconds % 86400) % 3600) % 60);

    dayE1.innerHTML = FormateTime(days);
    hourE1.innerHTML = FormateTime(hours);
    minuteE1.innerHTML = FormateTime(minutes);
    secondE1.innerHTML = FormateTime(secondsleft);


    dcircle.style.strokeDashoffset = 418 - (418 * days) / 365;

    hcircle.style.strokeDashoffset = 418 - (418 * hours) / 24;

    mcircle.style.strokeDashoffset = 418 - (418 * minutes) / 60;

    scircle.style.strokeDashoffset = 418 - (418 * secondsleft) / 60;

    
    d_dots.style.transform = `rotate(${days}deg)`;
    h_dots.style.transform = `rotate(${hours * 15}deg)`;
    m_dots.style.transform = `rotate(${minutes * 6}deg)`;
    s_dots.style.transform = `rotate(${secondsleft * 6}deg)`;


}


function FormateTime(time)
{
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);