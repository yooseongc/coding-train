
let table;
const afinn = {};

function preload() {
    table = loadTable('AFINN-111.txt', 'tsv');
}

function setup() {
    noCanvas();
    for (let i = 0; i < table.getRowcount(); i++) {
        const row   = table.getRow(i);
        const word  = row.get(0);
        const score = row.get(1); 

        afinn[word] = score;
    }
    save(afinn, 'afinn111.json');
}
