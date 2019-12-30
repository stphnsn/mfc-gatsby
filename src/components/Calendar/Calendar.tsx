import React, { FC } from 'react'

interface CalendarProps {
  bookingsObj: object
}

const createCalendar = (bookingsObj = {}) => {
  let html = ''

  const numberOfMonths = 12
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const daysCalendar = ['S', 'S', 'M', 'T', 'W', 'T', 'F']
  const daysObj = {
    Sunday: 1,
    Monday: 2,
    Tuesday: 3,
    Wednesday: 4,
    Thursday: 5,
    Friday: 6,
  }
  const daysInMonthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dt = new Date()
  let month = dt.getMonth(),
    year = dt.getFullYear(),
    saturday,
    startOfWeek,
    daysInMonth,
    daysInCalendar,
    rows,
    count,
    firstDate,
    firstDay

  for (let i = 0; i < numberOfMonths; i++) {
    firstDate = new Date(year, month, 1)
    firstDay = days[firstDate.getDay()]

    if (firstDay === 'Saturday') {
      saturday = 1
    } else {
      saturday = 1 + (days.length - daysObj[firstDay])
    }

    count = saturday

    if (year % 4 === 0 && month === 1) {
      daysInMonth = 29
    } else {
      daysInMonth = daysInMonthsArray[month]
    }

    daysInCalendar = daysInMonth - (saturday - 1) > 28 ? 35 : 28
    rows = daysInCalendar / 7

    html += '<table>'
    html += '<thead>'
    html += '<tr class="month">'
    html += '<th colspan="8">' + monthNames[month] + ' ' + year + '</th>'
    html += '</tr>'
    html += '<tr class="days">'
    for (let j = 0; j < daysCalendar.length; j++) {
      html += '<th>' + daysCalendar[j] + '</th>'
    }
    html += '<th>Price</th>'
    html += '</thead>'
    html += '</tr>'
    for (let k = 0; k < rows; k++) {
      for (let col = 0; col < 8; col++) {
        const m =
          (month + 1).toString().length === 1 ? '0' + (month + 1) : month + 1
        const d = count.toString().length === 1 ? '0' + count : count
        if (!startOfWeek) {
          startOfWeek = '' + year + m + d
          console.log(startOfWeek)
          if (
            bookingsObj[startOfWeek] &&
            bookingsObj[startOfWeek].status &&
            bookingsObj[startOfWeek].status === 'booked'
          ) {
            html += '<tr class="unavailable">'
          } else {
            html += '<tr>'
          }
        }

        if (col === 7) {
          html += '<td class="price"><span>'
          if (bookingsObj[startOfWeek]) {
            html += '£' + bookingsObj[startOfWeek].total
          } else {
            html += '£TBD'
          }
          html += '</span></td>'
          startOfWeek = null
        } else {
          html += '<td><span>' + count++ + '</span></td>'
        }
        if (count > daysInMonth) {
          count = 1
          if (month < 11) {
            month++
          } else {
            month = 0
            year++
          }
        }
      }
      html += '</tr>'
    }
    html += '</table>'
  }

  return {
    __html: html,
  }
}

const Calendar: FC<CalendarProps> = ({ bookingsObj }) => {
  return <div dangerouslySetInnerHTML={createCalendar(bookingsObj)} />
}

export { Calendar }
