const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const graphA = [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2]
];

const graphB = [
    [2, 3],
    [2, 3],
    [0, 1],
    [0, 1]
];

const graphC = [
    [1, 2, 3],
    [0, 2, 3],
    [0, 1],
    [0, 1]
];

const graphD = [
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2]
];

const graphE = [
    [1, 2],
    [0, 3, 4],
    [0],
    [1],
    [1]
];

const graphF = [
    [1],
    [0, 2, 3],
    [1],
    [1]
];

const graphG = [
    [1, 2],
    [0, 3, 4],
    [0, 3],
    [1, 2],
    [1]
];

const graphH = [
    [1, 2],
    [0, 3, 4],
    [0, 3],
    [1, 2],
    [1]
];

const graphI = [
    [1, 2],
    [0],
    [0, 3],
    [2]
];

const graphJ = [
    [1],
    [0, 2],
    [1, 3],
    [2]
];

const graphK = [
    [1, 2, 3],
    [0],
    [0],
    [0]
];

const graphL = [
    [1],
    [0, 2],
    [1],
    []
];


const tests = [
    { func: are_isomorphic, graph1: graphA, graph2: graphB, result: true, name: 'Isomorphic Test' },
    { func: are_isomorphic, graph1: graphC, graph2: graphD, result: false, name: 'Non-Isomorphic Test' },
    { func: are_isomorphic, graph1: graphE, graph2: graphF, result: false, name: 'Non-Isomorphic Test' },
    { func: are_isomorphic, graph1: graphG, graph2: graphH, result: true, name: 'Isomorphic Test' },
    { func: are_isomorphic, graph1: graphI, graph2: graphJ, result: true, name: 'Isomorphic Test' },
    { func: are_isomorphic, graph1: graphK, graph2: graphL, result: false, name: 'Non-Isomorphic Test' }
];

tests.forEach(test => {
    const output = test.func(test.graph1, test.graph2);
    if (output === test.result) {
        console.log(`${test.name} PASSED!`);
    } else {
        console.error(`${test.name} FAILED.: ${output} != ${test.result}`);
    }
});
