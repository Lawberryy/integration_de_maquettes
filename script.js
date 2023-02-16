divNumbers = document.getElementById('numbers-col')

for (i = 1; i <= 7; i++) {
    let spanNumber = document.createElement('span')
    spanNumber.innerHTML = '$' + i + '00'

    divNumbers.appendChild(spanNumber)
}

divDays = document.getElementById('days')

for (i = 5; i <= 15; i++) {
    let spanDay = document.createElement('span')
    spanDay.innerHTML = i + 'Nov'

    divDays.appendChild(spanDay)
}