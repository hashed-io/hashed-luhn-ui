// Drag scroll desktop
const sb = new ScrollBooster({
    viewport: document.querySelector('.team'),
    content: document.querySelector('.team .members'),
    scrollMode: 'transform',
    direction: 'horizontal'
})

const arrows = document.querySelectorAll('.arrows li')

const team = document.querySelectorAll('.members .item')
var widthTeamContainer = 0
team.forEach(item => {
    widthTeamContainer += item.offsetWidth
})

const desktop = window.matchMedia('(max-width: 1500px)')
const phone = window.matchMedia('(max-width: 500px)')

if (desktop.matches) {
    widthTeamContainer -= 800
}

if (phone.matches) {
    widthTeamContainer += 800
}

console.log(widthTeamContainer)

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

    if (curr < widthTeamContainer) {
        sb.scrollTo({ x: curr, y: 0 })
    }

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