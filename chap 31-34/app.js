// task 1
var timeNow=new Date();
document.write(timeNow)
document.write("<br><br><br>")

// task 2
var timeNow=new Date();
var monthNow=timeNow.getMonth()
var months=["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
alert("Current Month: "+months[monthNow])

// task 3
var timeNow=new Date();
var daynow=timeNow.getDay();
var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] 
alert("Today is "+days[daynow])

// task 4
var timeNow=new Date();
var daynow=timeNow.getDay();
if(daynow==0||daynow==6){
    document.write("It's Fun day")
}
document.write("<br><br><br>")


// task 5
var timeNow=new Date();
var dateNow=timeNow.getDate();
if(dateNow<16){
    document.write("First fifteen days of the month")
}else{
    document.write("Last fifteen days of the month")
}
document.write("<br><br><br>")

// task 6
var timeNow=new Date();
document.write("Current date: "+timeNow+"<br>");
var timeSince1970=timeNow.getTime();
document.write("Elapsed milliseconds since 1st january 1970:"+timeSince1970+"<br>")
var minutesSince1970=timeSince1970/360;
document.write("Elapsed Minutes since 1st January 1970:"+minutesSince1970+"<br>")
document.write("<br><br><br>")

// task 7
var timeNow=new Date();
var hourNow=timeNow.getHours()
if(hourNow<=12){
    document.write("It's AM")
}else{
    document.write("It's PM")
}
document.write("<br><br><br>");

// task 8
var timeLater=new Date();
timeLater.setMonth(11,31);
timeLater.setHours(0,0,0,0)
var laterDate=timeLater
document.write("Later Date: "+laterDate)
document.write("<br><br><br>");

// task 9
var timeNow =new Date();
var ramadanTime=new Date();
ramadanTime.setMonth(3,24)
var daysSinceRamadan=(timeNow-ramadanTime)/(1000*60*60*24)
alert(daysSinceRamadan+" days have passed since 1st Ramadan 2020")

