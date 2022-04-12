
const weekDayNames = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
const blockTimes = [10, 12, 14, 16, 18];

function getWeekday(offset) {

    var d = new Date();

    var day = d.getDay(),

        diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday

        day = new Date(d.setDate(diff)); // monday this week
        day.setDate(day.getDate() + offset);
        
    return day;
};

function getYear(){ 
    let y = new Date(); 
    let year = y.getFullYear();
    return year;
}

function getWeekdayName(offset) {
    let weekDay = getWeekday(offset);
    let index = weekDay.getDay();
    let weekdayName = weekDayNames[index];

    return weekdayName;
};

function getWeekdayNumber(offset) {
    let weekDay = getWeekday(offset);

    return weekDay.getDate();
};

function getBlockName(blockIndex) {
    let beginning = blockTimes[blockIndex];
    let end = beginning + 2;

    return beginning + ":00 - " + end + ":00";
};


function hasTimePassed(offset, blockIndex) {
    let blockTime = blockTimes[blockIndex];
    let timeslot = getWeekday(offset);
    timeslot.setHours(blockTime);
    timeslot.setMinutes(0);
    timeslot.setSeconds(0);
    let now = new Date();

    return now.getTime() > timeslot.getTime();
}

function getMonth(offset) {
    let d = getWeekday(offset);
    let currentMonth = d.getMonth();
    let monthName = months[currentMonth];
     return monthName;
}

function getDateFormat(offset){
    let dateNumber = getWeekdayNumber(offset);
 let d = getWeekday(offset);
    let monthNumber = d.getMonth(offset) + 1;
 
 return dateNumber + " / " + monthNumber; 

}

function getDateId(offset, blockIndex) {
    let dataBaseTimeSlot = getDateFormat(offset);
    let dataBaseDateId = dataBaseTimeSlot.replace('/', '').replace(/\s+/g, '');
    let dataBaseBookedDayId = dataBaseDateId + " " + getBlockName(blockIndex);

    return dataBaseBookedDayId;
}

      
      
export {getYear, getWeekdayName, getWeekdayNumber, hasTimePassed, getBlockName, getMonth, getDateFormat, getDateId};
  