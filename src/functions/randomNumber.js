const randomNumber = (min = 1, max = 6) => {
    return Math.round(Math.random() * (max - min) + min);
}

export default randomNumber;
