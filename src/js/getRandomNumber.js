const getRandonNumber = (min, max) => {
    let r = Math.random() * (max - min + 1) + min;
    return parseInt(r)
}