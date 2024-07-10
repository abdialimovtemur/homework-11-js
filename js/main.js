// 1. argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing


// let userNum = prompt("Sonni kiriting");
// let total = 0;

// function numberofRooms() {
//     let str = userNum.toString().split("")
//     for(let i = 0; i < str.length; i++){
//         total += 1;
//     }
//     console.log(total)
// }
// numberofRooms()








// 2. argument sifatida berilgan stringda nechta son qatnashganligini aniqlaydigan function tuzing

// let userStr = prompt("So'zlarni kiriting");

// function seperateNum(userStr) {
//     let arr = userStr.split("");
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (!isNaN(arr[i])) {
//             total++;
//         }

//     }
//     console.log(total)
// }

// seperateNum(userStr)








// 3. argument sifatida berilgan stringda nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing

// let  userStr = prompt("So'zni kiriting")

// function strFilterA(arr) {
//     let total = 0;
//     arr.split("")
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] == "a") {
//             total++;
//         }
//     }
//     console.log(total)
// }
// strFilterA(userStr)






// 4. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating Input: “Men dasturlash kursida o’qiyman” Output: {minWord: “Men”, maxWord: “dasturlash”} 

// let userStr = prompt("So'zni kiriting")

// function minOrmaxword(userStr) {

// }

// minOrmaxword()







// 5. Stringlar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin Input: [”text”, “world”, “laptop”] Output: {”text”: 4, “world”: 4, “laptop”: 6} 

// let array = ["Lamborghine", "Porshe", "Apple", "Samsung", "Lenova"]

// function arrAndObj(arr) {
//     let obj = {};
//     for (let i = 0; i < array.length; i++) {
//         obj[array[i]] = array[i].length;
//     }
//     console.log(obj)
// }
// arrAndObj()





// 6. n natural soni berilgan 2 sonining dastlabki nta darajasidan tashkil topgan arrayni qaytaruvchi getLevel(n) nomli function tuzing n: 4 result : [2,4,8,16] 2 ning 1-darajasidan boshlanishi kerak va 4-darajasigacha 



// let userNum = prompt("Sonni kiriting");
// function nToDegree() {
//     let sum = 1;
//     let arr = [];
//     for (let i = 1; i <= userNum; i++) {
//         sum = sum * 2
//         arr.push(sum)
//     }
//     console.log(arr)
// }

// nToDegree()








// 7. array ichidagi o'rtadagi sonni topoadigan function tuzing
// input:arr = [1,2,3,4,5] middleNumber = 3
// input arr = [1,2,3,4] middleNumber = 2.5 o'rtadagi sonning o'rta arifmetigi


let arr = [1, 2, 3, 4, 5];

function MiddleNum(arr) {
    const len = arr.length;
    const res = Math.floor(len / 2);

    if (len % 2 === 0) {
        const res1 = arr[res - 1];
        const res2 = arr[res];
        return (res1 + res2) / 2
    } else {
        return arr[res];
    }
}
console.log(MiddleNum(arr))
