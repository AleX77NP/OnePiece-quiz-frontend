export function quizImages() {
    let imagesArray = Array.from(Array(61).keys()).map(elem => `q${elem}.png`)
    imagesArray.shift()
    return imagesArray
}

export const randomImage = (images: Array<string>) => {
    return images[Math.floor(Math.random()*images.length)]
}
