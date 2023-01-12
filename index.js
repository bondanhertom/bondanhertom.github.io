let user = 'agi'
let keluhan = 'panas'
function input(nama, keluhan) {
    let ciriCovid = [
        'tenggorokan gatal',
        'nyeri punggung',
        'hidung pilek atau tersumbat',
        'sakit kepala',
        'bersin berlebih',
        'banyak berkeringat di malam hari',
        'badan pegal',
        'anosmia',
        'batuk kering',
        'suara serak',
        'nyeri otot'
    ]
    let splittedKeluhan = []
    let splittedCovid = []
    let ciriCovidMatch = []
    let database = []
    let pasien = {
        nama: '',
        keluhan: []
    }
    if (true) {
        pasien.nama = nama
        pasien.keluhan.push(keluhan)
    }
    console.log(pasien.keluhan)
    database.push(pasien)

    for (let i = 0; i < ciriCovid.length; i++) {
        const covid = ciriCovid[i];
        splittedCovid.push(covid.split(' '))
        // console.log(splittedCovid)     
    }
    for (let i = 0; i < keluhan.length; i++) {
        const covid = keluhan[i];
        splittedKeluhan.push(covid.split(' '))
        // console.log(splittedKeluhan)     
    }

    for (let i = 0; i < splittedKeluhan.length; i++) {
        const element = splittedKeluhan[i];
        // console.log(element)
        for (let j = 0; j < splittedCovid.length; j++) {
            const ciriCovid = splittedCovid[j];
            // console.log(ciriCovid)
            for (let k = 0; k < ciriCovid.length; k++) {
                const perkata = ciriCovid[k];
                // console.log(perkata)
                for (let l = 0; l < element.length; l++) {
                    const perkataKeluhan = element[l];
                    // console.log(perkataKeluhan, perkata )
                    if (perkata === perkataKeluhan) {
                        ciriCovidMatch.push(element)
                    }
                }
            }
        }
    }
    // console.log(ciriCovidMatch.length, ciriCovid.length)
    let persentageCovid = ciriCovidMatch.length / ciriCovid.length * 100
    // console.log(persentageCovid)
    return `anda kemungkinan covid ${Math.floor(persentageCovid)}%`
    // return ciriCovidMatch
}

console.log(input(user, keluhan))