//! 3rd Solution
var students = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar","Omran"];
var teacherss = ["Omar", "Ayman", "Sayed", "Stop", 'eee'];
console.log(`--We Have ${teacherss.indexOf('Stop')} Admins--`);
console.log(`-------------------------------------`);
for (let i = 0; i < teacherss.indexOf('Stop'); i++) {
    console.log(`The Admin for Team ${i} is ${teacherss[i]}`)
    for (let k = 0; k < 1; k++) { let indexO = students.filter((e) => e.startsWith('O'))
        if (teacherss[i] === 'Omar') {
            console.log(indexO.join(`,
`)); } }
    for (let k = 0; k < 1; k++) { let indexA = students.filter((e) => e.startsWith('A'))
        if (teacherss[i] === 'Ayman') {
console.log(indexA.join(`,
`)); } }
    for (let k = 0; k < 1; k++) { let indexS = students.filter((e) => e.startsWith('S'))
        if (teacherss[i] === 'Sayed') {
console.log(indexS.join(`,
`)); } } console.log(`-------------------------------------`); }