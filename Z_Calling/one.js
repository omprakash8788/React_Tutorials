function sum (a) {
    return function (b) {
        return function () {
            return a + b;
        }
    }
}

sum(1)(5)(3);

function sum (a) {
    return function (b) {
        return function () {
            return a + b;
        }
    }
}

sum(1)(5)(3);

