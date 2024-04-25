//! Document Solution
let Students = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar","Omran"];
let teachers = ["Omar", "Ayman", "Sayed","Stop"];
let counter = 0;
function finalResult(zero = 0) {
if (teachers.indexOf("Stop") !== -1) { teachers.length = teachers.indexOf("Stop") };
document.write(`<div class = "header"><h2>We Have ${teachers.length} Admins</h2></div>`)
document.write(`<hr>`)
mainLoop: for (let i = zero; i < teachers.indexOf("Ayman"); i++) {document.write(`<h1>The Leader Of Team ${counter += 1} Is ${teachers[i]}</h1>`)
    document.write(`<div class = "TS"><h3>Team Students:</h3></div>`)
nestedLoop:for (let j = zero; j < Students.length; j++) {
    if (Students[j].indexOf("A") && Students[j].indexOf("S")) {
    document.write(`<h4>${Students[j]}</h4>`)
    continue;}}document.write(`<hr>`)}
mainLoop: for (let i = zero; i < teachers.indexOf("Ayman"); i++) {document.write(`<h1>The Leader Of Team ${counter += 1} Is ${teachers[i += 1]}</h1>`)
document.write(`<div class = "TS"><h3>Team Students:</h3></div>`);
nestedLoop: for (let k = zero; k < Students.length; k++) {
if (Students[k].indexOf("O") && Students[k].indexOf("S")) {document.write(`<h4>${Students[k]}</h4>`)
        continue;}}document.write(`<hr>`)}
mainLoop:for (let i = zero; i < teachers.indexOf("Ayman"); i++) {document.write(`<h1>The Leader Of Team ${counter += 1} Is ${teachers[i += 2]}</h1>`)
    document.write(`<div class = "TS"><h3>Team Students:</h3></div>`);
nestedLoop: for (let k = zero; k < Students.length; k++) {
if (Students[k].indexOf("A") && Students[k].indexOf("O")) {document.write(`<h4>${Students[k]}</h4>`); continue;}} document.write(`<hr>`)}} finalResult()