// divNumbers = document.getElementById('numbers-col')

// for (i = 1; i <= 7; i++) {
//     let spanNumber = document.createElement('span')
//     spanNumber.innerHTML = '$' + i + '00'

//     divNumbers.appendChild(spanNumber)
// }

// divDays = document.getElementById('days')

// for (i = 5; i <= 15; i++) {
//     let spanDay = document.createElement('span')
//     spanDay.innerHTML = i + 'Nov'

//     divDays.appendChild(spanDay)
// }

// chart js

let srx = document.getElementById('graph').getContext('2d'); // id de la balise canvas
// getContext indique que l'on va ajouter un objet dans le canva

let graph = new Chart(srx, {
    type: 'line',
    data: {
        labels: [
            '5Nov',
            '6Nov',
            '7Nov',
            '8Nov',
            '9Nov',
            '10Nov',
            '11Nov',
            '12Nov',
            '13Nov',
            '14Nov',
            '15Nov',
        ],
        datasets: [
            {
                label: 'ETH',
                data: [
                    '100',
                    '400',
                    '600',
                    '400',
                    '300',
                    '100',
                    '350',
                    '200',
                    '300',
                    '700',
                    '600',
                ],
                borderColor: [
                    '#2F7EC1'
                ],
            },
            {
                label: 'BTC',
                data: [
                    'null',
                    '600',
                    '200',
                    '250',
                    '400',
                    '300',
                    '150',
                    '500',
                    '200',
                    '600',
                    '500',
                ],
                borderColor: [
                    '#FAFF00'
                ],
            },
            {
                label: 'LTC',
                data: [
                    'null',
                    'null',
                    'null',
                    '100',
                    '300',
                    '400',
                    '250',
                    '700',
                    '400',
                    '300',
                    '400',
                ],
                borderColor: [
                    '#611D8D'
                ],
            },
        ]
    }
})


// menu burger

let btnBurger = document.getElementById('burger')
let divBurger = document.getElementById('menu-burger')

function burger() {
    divBurger.classList.toggle('none')
}

btnBurger.addEventListener('click', p => {
    burger()
})