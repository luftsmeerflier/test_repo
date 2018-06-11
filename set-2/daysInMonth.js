const daysInMonth = function (month , leapYear) {
    if (leapYear === undefined) {
        let leapYear = false;
    }
    switch (true) {
        case (month === 'January'):
        case (month === 'March'):
        case (month === 'May'):
        case (month === 'July'):
        case (month === 'August'):
        case (month === 'October'):
        case (month === 'December'):
        result = `${month} has 31 days`
        break;
        case (month === 'April'):
        case (month === 'June'):
        case (month === 'September'):
        case (month === 'November'):
        result = `${month} has 30 days`
        break;
        case (month === 'February' && leapYear === false):
        result = `${month} has 28 days`
        break;
        case (month === 'February' && leapYear === true):
        result = `${month} has 29 days`
        break;
        default: 
        result = 'mission failure';
    }
    try {
        if (result === 'mission failure') throw new Error("Must provide a valid month.")
    }
    catch(e) {
        console.error(e.message);
    }
return result;
}

console.log(daysInMonth('January'))
console.log(daysInMonth('April'))
console.log(daysInMonth('February', false))
console.log(daysInMonth('February', true))
console.log(daysInMonth('that one month'))
console.log(daysInMonth())