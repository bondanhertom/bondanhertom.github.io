// template tabel data hasil
// let data = 
// [
//     {
//         name: '',
//         age: 0,
//         gejala: ['gejala1', 'gejala2'],
//         presentase: 0
//     },
//     {
//         name: '',
//         age: 0,
//         gejala: ['gejala1', 'gejala2'],
//         presentase: 0
//     },
//     {
//         name: '',
//         age: 0,
//         gejala: ['gejala1', 'gejala2'],
//         presentase: 0
//     }
// ];

// list gejala covid
let listGejalaCovid = ['gejala1', 'gejala2', 'gejala3'];

// list gejala pasien
let listGejalaPasien = 'gejala12,gejala2,gejala33';

function cek(name, age, listGejalaPasien, listGejalaCovid) {
    let output = [];
    let perOrang = {};
    let gejalaPasien = listGejalaPasien.split(",");
    perOrang.name = name;
    perOrang.age = age;
    perOrang.gejala = gejalaPasien;
    let count = 0;
    for (let i = 0; i < listGejalaCovid.length; i++) {
        for (let j = 0; j < gejalaPasien.length; j++) {
            if (listGejalaCovid[i] === gejalaPasien[j]) {
                count++;
            }
        }
    }
    let presentase = (count / listGejalaCovid.length) * 100;
    perOrang.presentase = presentase;
    output.push(perOrang);
    return output;
}
console.log(cek('Naufal', 100, listGejalaPasien, listGejalaCovid));