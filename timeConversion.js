//tic toc tic toc
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


// Input 07:05:45PM
// Output 19:05:45

let text = "07:05:45PM";
console.log("BEFORE: ",text)


function timeConversion(text) {
    if (text.includes('AM')) {
        let newTime = ''
        newTime = text.slice(0,-2)
        console.log("returns",newTime)
    } else {
    //  console.log("noooooo")
        let newTime = ''
        let firstTwo = 0
        let lastSix = 0
        newTime = text.slice(0,-2)
        firstTwo = newTime.slice(0,2)
        lastSix = text.slice(-8)
        console.log(newTime, "newTimeParsed");
        

        console.log(text.slice(-6), "orig time sliced")
        // militaryTime = newTime[1] + 12
        console.log("returns",newTime)
        // console.log('military time', militaryTime )
        // take the first two numbers and add 12
        // remove the 'PM'
        firstTwo = (parseInt(firstTwo)+12).toString()
        firstTwo.replace(' ','')
        lastSix.trim()

        console.log("DING DING DING ...first two",firstTwo,"last six",lastSix);
    }

}

timeConversion(text)