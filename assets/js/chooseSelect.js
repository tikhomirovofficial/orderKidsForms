
const selects = document.querySelectorAll('.order__select-item')

let arrSelectsOpened = [false, false, false]
const allSelectsClose = () => {
	arrSelectsOpened = [false, false, false]
	selects.forEach(item => {
		const select = item.children[1]
		const selectBlock = select.children[3]
		const selectTriangle = select.children[2]
		selectBlock.classList.remove('opened')
        selectTriangle.classList.remove('opened__img')
	})
}

selects.forEach((item, index) => {
    const select = item.children[1]
    const selectBlock = select.children[3]
    const selectTriangle = select.children[2]
    const selectReal = select.children[1]
    const orderVal = select.children[0]
    const selectItems = document.querySelectorAll(`#${select.getAttribute('id')} .select__item`)
 

    const openSelect = () => {
		//allSelectsClose()
        selectBlock.classList.add('opened')
        selectTriangle.classList.add('opened__img')
    }
    const closeSelect = () => {
        selectBlock.classList.remove('opened')
        selectTriangle.classList.remove('opened__img')
    }

    const checkIsOpened = () => {
        if (arrSelectsOpened[index]) {
            openSelect()
        } else {
            closeSelect()
        }
    }
    selectItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const val = e.target.getAttribute('data-val')
            const event = new Event('change', {
                detail: {age: val}
            })
            event.value = val
            selectReal.dispatchEvent(event)
            arrSelectsOpened[index] = false
            checkIsOpened()

        })
    })
    selectReal.addEventListener('change', function (e) {
        console.log(orderVal.getAttribute('id'))
        console.log(e.value)
        orderVal.innerText = `${e.value} ${orderVal.getAttribute('id') === 'order_years' ?  "лет": ""}`
    })

    select.addEventListener('click', () => {
        selectBlock.onclick = e => {
            e.stopPropagation()
        }
        if(arrSelectsOpened[index] === true) {
            arrSelectsOpened[index] = false
        } else {
            allSelectsClose()
            arrSelectsOpened[index] = true
        }
        checkIsOpened()
    })

})

