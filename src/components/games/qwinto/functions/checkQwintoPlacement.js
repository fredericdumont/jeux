const getColsValues = (value, row, col) => {
    switch (row) {
        case 0:
            return [
                value.rows[row + 1][col + 1],
                value.rows[row + 2][col + 2]
            ];
        case 1:
            return [
                value.rows[row - 1][col - 1],
                value.rows[row + 1][col + 1]
            ];
        case 2:
            return [
                value.rows[row - 2][col - 2],
                value.rows[row - 1][col - 1],
            ];
        default:
            return [];
    }
}

const checkQwintoPlacement = (value, newValue, row, col) => {
    if (!newValue) {
        return true;
    }

    //Check same number on row
    const isValueAlreadyInRow = value
        .rows[row]
        .some(r => r === newValue);

    if (isValueAlreadyInRow) {
        return false;
    }

    //Check same number on col
    const colValues = getColsValues(value, row, col);
    const isValueAlreadyInCol = colValues.some(v => v === newValue);

    if (isValueAlreadyInCol) {
        return false;
    }

    //Check numbers before is less and number after is greater on row
    const rowValues = value.rows[row]
        .map((c, i) => i === col ? newValue : c)
        .filter(v => v);

    const areValuesAscending = rowValues.every((c, i) => {
        return i === 0 ? true : rowValues[i - 1] < c;
    })

    if (!areValuesAscending) {
        return false;
    }

    return true;
}

export default checkQwintoPlacement;
