const dayInput = document.getElementById('day_input')
const timeInput = document.getElementById('time_input')

const timeBlocks = document.querySelectorAll('.time_inputs .order__date_item')
const dayBlocks = document.querySelectorAll('.day_inputs .order__date_item')


dayBlocks.forEach(item => {
    item.addEventListener('click', (e) => {
        if(!e.target.classList.contains('choosed-date')) {
            dayBlocks.forEach(item => {
                item.classList.remove('choosed-date')
            })
            e.target.classList.add('choosed-date')
            const val = e.target.getAttribute('data-day')
            dayInput.value = val
        }
    })
})
timeBlocks.forEach(item => {
    item.addEventListener('click', (e) => {
        if(!e.target.classList.contains('choosed-date')) {
            timeBlocks.forEach(item => {
                item.classList.remove('choosed-date')
            })
            e.target.classList.add('choosed-date')
            const val = e.target.getAttribute('data-time')
            dayInput.value = val
        }
    })
})