"use strict";
function iTakeItAll(first, second, ...Others) {
    console.log(Others);
}
iTakeItAll("foo", "bar");
iTakeItAll("foo", "bar", "bas", "qux");
