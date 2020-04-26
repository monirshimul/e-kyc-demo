var shortMonthsName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function getNidFormat(yyyy_mm_dd) {
    let date = yyyy_mm_dd.split('-');
    let year = date[0], month = date[1], day = date[2];
    let monthStr = shortMonthsName[parseInt(month - 1)];
    let formattedDate = day.toString() + " " + monthStr + " " + year.toString();
    return formattedDate;
}

function getNidIssueDateFormat(yyyy_mm_dd) {
    let date = yyyy_mm_dd.split('-');
    let year = date[0], month = date[1], day = date[2];
    let monthStr = shortMonthsName[parseInt(month - 1)];
    let formattedDate = day.toString() + " " + monthStr + ", " + year.toString();
    return formattedDate;
}

//Same date format for Date of Birth
function sameDateFormat(yyyy_mm_dd) {
    let date = yyyy_mm_dd.split('-');
    let year = date[0], month = date[1], day = date[2];
    let formattedSameDate = [day.toString(), month.toString(), year.toString()].join("-");
    return formattedSameDate;
}

//Verify Customer date month and year (adding 0 if month=1 then replace 01)
function formatDate(date) {
    try {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');

    } catch (error) {
        return date;
    }

}

function showDate(date) {
    try {
        let d = new Date(date);
        let month = (d.getMonth() + 1).toString();
        let day = d.getDate().toString();
        let year = d.getFullYear().toString();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('/');
    } catch (error) {
        return date;
    }
}

//====start===========Formate date for createdate & update date ==========
function sameDateFormat1(yyyy_mm_dd) {
    try {
        let date = yyyy_mm_dd.split('/');
        let year = date[2], month = date[0], day = date[1];
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        let formattedSameDate = [day, month, year].join("/");
        return formattedSameDate;
    } catch (error) {
        return yyyy_mm_dd;
    }

}


function divideDateTime(mydate) {
    try {
        let date = mydate.split('-');
        let dmy = sameDateFormat1(date[0]).trim();
        let time = date[1];
        let format = dmy + " -" + time;
        return format;
    } catch (error) {
        return mydate
    }

}
//====end===========Formate date for createdate & update date ==========



module.exports = {
    getNidFormat: getNidFormat,
    getNidIssueDateFormat: getNidIssueDateFormat,
    formatDate: formatDate,
    sameDateFormat: sameDateFormat,
    divideDateTime: divideDateTime,
    showDate: showDate

}