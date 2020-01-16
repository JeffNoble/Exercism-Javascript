//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    constructor(matrixStr) {
        this.matrix = matrixStr.split('\n').map( row => row.split(' ').map(element => parseInt(element)) )
    }

    get rows() {
        return this.matrix;
    }

    get columns() {
        return this.matrix[0].map((column, index) => this.rows.map((row) => row[index]))
    }
}

