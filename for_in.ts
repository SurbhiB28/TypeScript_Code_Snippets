let user = {
    "firstName" : "Surbhi",
    "lastName" : "Bahukhandi",
    "fullName" : "Surbhi Bahukhandi"
}

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        const element = user[key];
        console.log(element);
    }
}