const moment = require('moment');

class Dates {
    calculateDate(date, days) {
        const newDate = moment(date).add(days,'days');
        while(newDate.isoWeekday() === 6 || newDate.isoWeekday() === 7) newDate.add(1,'day');
        return newDate.format('YYYY-MM-DD');
    }
}

module.exports = new Dates();