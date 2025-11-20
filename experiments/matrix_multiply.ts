function matrixMultiply(a: Float32Array, b: Float32Array): Float32Array {
    const result = new Float32Array(1000 * 1000);
    for (let i = 0; i < 1000 * 1000; i += 1000) {
        for (let k = 0; k < 1000; k++) {
            for (let j = 0; j < 1000; j++) {
                result[i + j]! += a[i + k]! * b[k + j]!;
            }
        }
    }
    return result;
}

// Generate two random matrices
function generateMatrix(rows: number, cols: number): Float32Array {
    const result = new Float32Array(rows * cols);
    for (let i = 0; i < rows * cols; i++) {
        result[i] = Math.random();
    }
    return result;
}

const matrixA = generateMatrix(1000, 1000);
const matrixB = generateMatrix(1000, 1000);
console.time('matrixMultiply');
const resultMatrix = matrixMultiply(matrixA, matrixB);
console.timeEnd('matrixMultiply');