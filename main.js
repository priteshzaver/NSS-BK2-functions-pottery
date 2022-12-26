const buyClay = () => {
    const pottery = { }

    return pottery
}

const makePottery = (make) => {
    make.shape = "Bowl"

    return make
}

const bisqueFire = (bisque) => {
    bisque.readyForGlazing = true

    return bisque
}

const glazePottery = (glaze) => {
    if (glaze.readyForGlazing !== true)
            glaze = "Make sure you bisque fire the pottery before you glaze it."
    else {
            glaze.glazing = "Midnight Blue"
    }
    return glaze
}

const finalFiring = (firing, temperature) => {
    if (temperature > 1200) {
        firing.cracked = true
    }
    else (
        firing.cracked = false
    )
    return firing
}

const clay = buyClay()
const form = makePottery(clay)
const fire = bisqueFire(form)
const glaze = glazePottery(form)
const finalFire = finalFiring(glaze, 1100)

console.log(finalFire)


