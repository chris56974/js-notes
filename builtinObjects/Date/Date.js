// Date is an global object constructor that creates Date objects.

new Date(year, month, date, hours, minutes, seconds, milliseconds)
new Date(dateTimeStr) // 2019-08-29
new Date(timeValue)
new Date() // Date(Date.now())

var a = new Date('1968-11-25');
a.getDate() // 25
a.getDay()  // 1

Date.now()   // current date
Date.parse() // converts date to milleseconds since 1970

Date.getX() // local time
Date.getUTCX() // universal time
Date.setX(number)
Date.setUTCX(number)

// Date {Mon Nov 25 1968 01:00:00 GMT+0100 (CET)}

// X is...
// - FullYear: Usually four digits
// - Month: Month (0–11)
// - Date: Day of the month (1–31)
// - Day (getter only): Day of the week (0–6); 0 is Sunday
// - Hours: Hour (0–23)
// - Minutes: Minutes (0–59)
// - Seconds: Seconds (0–59)
// - Milliseconds: Milliseconds (0–999)
// - Time: same as Date.parse()
