
function vec3ToMatrix(v) {
    return Array(3).fill(0).map((_, i) => [[v.x, v.y, v.z][i]]);
}

function vec4ToMatrix(v) {
    return Array(4).fill(0).map((_, i) => [[v.x, v.y, v.z, v.w][i]]);
}

function matrixToVec3(m) {
    return createVector(m[0][0], m[1][0], m[2][0]);
}

function matrixToVec4(m) {
    return m.length === 4 
        ? new P4Vector(m[0][0], m[1][0], m[2][0], m[3][0]) 
        : new P4Vector(m[0][0], m[1][0], m[2][0]);
}

function printMatrix(m) {
    console.table(m);
}


function matMulVec3(mat, vec) {
    return matrixToVec3(matmul(mat, vec3ToMatrix(vec)));
}

function matMulVec4(mat, vec) {
    return matrixToVec4(matmul(mat, vec4ToMatrix(vec)));
}


function matmul(a, b) {
    if (b instanceof p5.Vector) {
        return matMulVec3(a, b);
    }
    if (b instanceof P4Vector) {
        return matMulVec4(a, b)
    }
    const ca = a[0].length;
    const cb = b[0].length;
    const ra = a.length;
    const rb = b.length;
    if (ca !== rb) {
        console.error('Columns of A must match rows of B');
        return null;
    }

    const result = [];
    for (let j = 0; j < ra; j++) {
        result[j] = [];
        for (let i = 0; i < cb; i++) {
            let sum = 0;
            for (let n = 0; n < ca; n++) {
                sum += a[j][n] * b[n][i];
            }
            result[j][i] = sum;
        }
    }
    return result;
}


