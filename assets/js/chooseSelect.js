const select = document.getElementById('order__select')
const selectBlock = document.getElementById('select_block')
const selectTriangle = document.getElementById('select_triangle')
const selectReal = document.getElementById('select')
const orderVal = document.getElementById('order_value')
const selectItems = document.querySelectorAll('.select__item')

let selectIsOpened = false

const openSelect = () => {
    selectBlock.classList.add('opened')
    selectTriangle.classList.add('opened__img')
}
const closeSelect = () => {
    selectBlock.classList.remove('opened')
    selectTriangle.classList.remove('opened__img')
}

const checkIsOpened = () => {
    if (selectIsOpened) {
        openSelect()
    } else {
        closeSelect()
    }
}
selectItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const val = e.target.getAttribute('data-years')
        const event = new Event('change', {
            detail: {age: val}
        })
        event.value = val
        selectReal.dispatchEvent(event)
        selectIsOpened = false
        checkIsOpened()

    })
})
selectReal.addEventListener('change', function (e) {
    orderVal.innerText = `${e.value} лет`
})

select.addEventListener('click', () => {
    selectBlock.onclick = e => {
        e.stopPropagation()
    }
    selectIsOpened = !selectIsOpened
    checkIsOpened()
})
