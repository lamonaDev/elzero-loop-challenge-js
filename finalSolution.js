//! 4th loop challenge solution => the best solution 
let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myStudents = ['Amged', 'Sameh', 'Ameer', 'Omar', 'Othman', 'Amany', 'Samia'];
if (myAdmins.includes('Stop')) {
    console.log(`--We Have ${myAdmins.indexOf('Stop')} Admins--
    =====================`);
};
function table(zeroVal = Number(false), oneVal = Number(true)) {
    let counter = zeroVal, second_counter = zeroVal, therd_counter = zeroVal;
for (let i = zeroVal; i < myAdmins.length; i++) { if (myAdmins[i] === 'Stop') break;
    console.log(`The Admin for Team ${i + oneVal} Is ${myAdmins[i]}

Team Members: `);
    for (let k = zeroVal; k < myStudents.length; k++) { if (myAdmins[i].startsWith("A") && myStudents[k].startsWith('A')) { console.log(`-${counter += oneVal} ${myStudents[k]}`); }
        else if (myAdmins[i].startsWith('O') && myStudents[k].startsWith('O')) { console.log(`-${second_counter += oneVal} ${myStudents[k]}`); } 
        else if (myAdmins[i].startsWith('S') && myStudents[k].startsWith('S')) { console.log(`- ${therd_counter += oneVal} ${myStudents[k]}`); } }
        console.log(`----------------------`); }; }; table();