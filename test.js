// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs.

let a = 8;
let b = 10;

if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log("Skaiciai lygus");
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

let min = 1;
let max = 10;

for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5

let min2 = 1;
let max2 = 10;

while (true) {
    let num = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
    console.log(num);
    if (num === 5) {
        break;
    }
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią
//  masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [];

for (let i = 0; i < rand(20, 30); i++) {
    arr.push(rand(10, 30));
}


let maximum = 0;

for (let number of arr) {
    if (number > maximum) {
        maximum = number;
    }
}

console.log("Didziausia masyvo reiksme: ", maximum);


// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
// Suskaičiuokite kiek yra kiekvienos raidės.


for (let i = 0; i < 100; i++) {

}



// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai
//  - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

function lygineSuma(par1, par2) {

    if ((typeof par1 && typeof par2 !== "number") || (Array.isArray(par1) && Array.isArray(par2) === false)) {
        console.log("Iveskitie tiesingus duomenys");
    }

    if (typeof par1 && typeof par2 === "number") {
        let sum = par1 + par2;
        console.log(sum);

        if (sum % 2 !== 0) {
            console.log("Suma nelygine");
        }
    }

    if (Array.isArray(par1) && Array.isArray(par2) === true) {
        let sumLength = par1.length + par2.length;
        console.log(sumLength);

        if (sumLength % 2 !== 0) {
            console.log("Masyvu ilgiu suma nelygine");
        }
    }
}

lygineSuma(5, 6);


// // 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, 
// kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis
// // skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)

function pirminisSkaicius(digit) {

    if (typeof digit !== "number") {
        return console.log("Kintamaisi turi buti skaicius");
    }


    let divCounter = 0

    for (let i = 1; i <= digit; i++) {
        if (digit % i === 0) {
            divCounter += 1;
        }
    }

    if (divCounter === 2) {
        return console.log("Skaicius pirminis");
    } else {
        return console.log("Skacius nera pirminis");
    }

}

pirminisSkaicius(8);


// 10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.
// Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
//     "(XXX) XXX-XXXX".

function telefonoNumeris(tel) {

    return console.log(`(${tel[0]}${tel[1]}${tel[2]}) ${tel[3]}${tel[4]}${tel[5]}-${tel[6]}${tel[7]}${tel[8]}${tel[9]}`);
}

telefonoNumeris([3, 7, 0, 4, 5, 6, 7, 8, 9, 0]);




