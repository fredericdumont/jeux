import sumOfArray from 'functions/sumOfArray';

const scoresLocation = [
    {
        col: 0,
        points: {
            row: 2,
            col: 2
        }
    },
    {
        col: 1,
        points: {
            row: 0,
            col: 1
        }
    },
    {
        col: 5,
        points: {
            row: 0,
            col: 5
        }
    },
    {
        col: 6,
        points: {
            row: 1,
            col: 7
        }
    },
    {
        col: 7,
        points: {
            row: 2,
            col: 9
        }
    }
];

const filterFalsy = (values = []) => values.filter(value => value);

const getQwintoResults = (results) => {
    const errors = sumOfArray(results.errors.map(error => error ? -5 : 0));

    const rows = results
        .rows
        .map(row => filterFalsy(row).length === 9 ? row[9] : filterFalsy(row).length);

    const cols = scoresLocation
        .map(location => {

            if ([0, 1, 2].every(i => results.rows[i][location.col + i])) {
                return results.rows[location.points.row][location.points.col]
            }

            return 0;
        });

    const total = sumOfArray(cols) + sumOfArray(rows) + errors;

    return {
        rows,
        cols,
        errors,
        total
    }
}

export default getQwintoResults;