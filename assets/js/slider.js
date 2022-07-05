// Drag scroll desktop
const sb = new ScrollBooster({
    viewport: document.querySelector('.team'),
    content: document.querySelector('.team .members'),
    scrollMode: 'transform',
    direction: 'horizontal'
})

const arrows = document.querySelectorAll('.arrows li')

const moveToLeft = (ctx) => {
    const label = ctx.getAttribute('data-label')

    onClick(label)

    const curr = Math.abs(sb.targetPosition.x) - 200

    sb.scrollTo({ x: curr, y: 0 })
}

const moveToRight = (ctx) => {
    const label = ctx.getAttribute('data-label')

    onClick(label)

    const curr = Math.abs(sb.targetPosition.x) + 200

    sb.scrollTo({ x: curr, y: 0 })
}

const onClick = (label) => {
    arrows.forEach(arrow => {
        if (arrow.getAttribute('data-label') === label) {
            arrow.classList.add('active')
        } else {
            arrow.classList.remove('active')
        }
    })
}