let scrimbaUsers = {
    '00' : 'sindre@gmail.com',
    '01' : 'per@gmail.com',
    '02' : 'frode@gmail.com'
}

let scrimbaUsersMails = Object.values(scrimbaUsers);
console.log(scrimbaUsersMails);

let scrimbaUsersID = Object.keys(scrimbaUsers);
console.log(scrimbaUsersID);

let scrimbaEntries = Object.entries(scrimbaUsers);
console.log(scrimbaEntries);