// Study Case Struktur Data
const x = 21;
const y = 23;
let z = x + y - 19;
console.log(z);

// Study Case Logical Operator
console.log(false || null && false);

// Study Case Data Type - Array Sorting
const scores = [10,8,7,5,6,3,2,4,1];
console.log(scores.sort((a,b) => a - b));

// Study Case Data Type - Array Find
const countries = ["Albania", "Turkey", "Netherland", "Germany", "Spain", "England"]
function searchCountries (country){
    let cek = countries.includes(country)
    if(cek){
        return `Negara ${country} ada di Array`
    }else{
        return `Negara ${country} yang anda cari tidak ada`
    }
}
console.log(searchCountries("King Indo"));

// Study Case Data Type - Array Filter
const otherCountries = ["Albania", "Turkey", "Netherland", "Germany", "Spain", "England", "Albania", "Germany", "Spain","Indonesia","indonesia"]
function filterData (){
    let dataClear = [];
    let dataDuplicate = [];

    for (let i = 0; i < otherCountries.length; i++){
        const country = otherCountries[i].toLowerCase();

        if(dataClear.includes(country)){
            if(!dataDuplicate.includes(country)){
                dataDuplicate.push(country);
            }
        }else{
            dataClear.push(country);
        }
    }

    return {
        uniqueCountries: dataClear,
        duplicateCountries: dataDuplicate
    };
}

const result = filterData();
console.log(`Negara : ${result.uniqueCountries}`);
console.log(`Negara duplikat : ${result.duplicateCountries}`);