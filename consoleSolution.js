//! console solution
let StudentsInConsole = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar","Omran"];
let teachersInConsole = ["Omar", "Ayman", "Sayed","Stop"];
let counterInConsole = 0;
function finalResultInConsole(zero = 0) {
if (teachersInConsole.indexOf("Stop") !== -1) { teachersInConsole.length = teachersInConsole.indexOf("Stop") };
console.log(`--We Have ${teachersInConsole.length} Admins--`);
console.log(`-------------------------------------------`);
mainLoop: for (let i = zero; i < teachersInConsole.indexOf("Ayman"); i++) {console.log(`||The Leader Of Team ${counterInConsole += 1} Is ${teachersInConsole[i]}||`)
console.log(`Team Students:`)
nestedLoop:for (let j = zero; j < StudentsInConsole.length; j++) {
if (StudentsInConsole[j].indexOf("A") && StudentsInConsole[j].indexOf("S")) { //todo: this condition except the other two letters
    console.log(`[${StudentsInConsole[j]}],`)
    continue;}}console.log(`-----------------------------------------`)}
mainLoop: for (let i = zero; i < teachersInConsole.indexOf("Ayman"); i++) {console.log(`||The Leader Of Team ${counterInConsole += 1} Is ${teachersInConsole[i += 1]}||`)
console.log(`Team Students:`);
nestedLoop: for (let k = zero; k < StudentsInConsole.length; k++) {
if (StudentsInConsole[k].indexOf("O") && StudentsInConsole[k].indexOf("S")) {console.log(`[${StudentsInConsole[k]}],`)
    continue;}}console.log(`-------------------------------------------`)}
mainLoop:for (let i = zero; i < teachersInConsole.indexOf("Ayman"); i++) {console.log(`||The Leader Of Team ${counterInConsole += 1} Is ${teachersInConsole[i += 2]}||`)
console.log(`Team Students:`);
nestedLoop: for (let k = zero; k < StudentsInConsole.length; k++) {
if (StudentsInConsole[k].indexOf("A") && StudentsInConsole[k].indexOf("O")) {console.log(`[${StudentsInConsole[k]}],`); continue;}} console.log(``)}} finalResultInConsole()