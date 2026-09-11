function arrayTriangular(array1, array2) {
    var maior1 = array1[0][0];
    var maior2 = array2[0][0];

    // ARRAY 1
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= i; j++) {
            console.log((array1[i][j]));
            if (array1[i][j] > maior1) {
                maior1 = array1[i][j]
            }
        }
    }

    console.log("// ESPAÇO //");

    // ARRAY 2
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= i; j++) {
            console.log((array2[i][j]));
            if (array2[i][j] > maior2) {
                maior2 = array2[i][j]
            }
        }
    }
    console.log(`Maior da Matriz 1:${maior1}`);
    console.log(`Maior da Matriz 2:${maior2}`);
    console.log(`Soma dos dois maiores valores das Matrizes:${maior1 + maior2}`);

}

arrayTriangular([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
], [
    [5, 6, 7, 8],
    [5, 6, 7, 8],
    [5, 6, 7, 8],
    [5, 6, 7, 8],
]);
