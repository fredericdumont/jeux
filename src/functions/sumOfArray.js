const sumOfArray = (values = []) => {
    return values.reduce((accumulator = 0, currentValue) => currentValue ? accumulator += currentValue : accumulator, 0);
}

export default sumOfArray;
