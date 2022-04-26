var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greetAgain = function (user) {
    console.log("".concat(user.name, " says hello"));
};
greetAgain({ name: "surbhi", uid: 1 });
