const Math = {};

function add(x1,x2){
    return x1+x2;
}

function substract(x1 ,x2){
    return x1-x2;
}

function multiply(x1,x2){
    return x1*x2;
}

function divide(x1,x2) {
    if (x2 == 0){
        console.log("No se puede dividir entre 0.");
    }
    else{
        return x1/x2;
    }
}

Math.add = add;
Math.sub = substract;
Math.mul = multiply;
Math.div = divide;

function sayHi(name){
    console.log("hola " , name);
}

//module.exports = Math;
//module.exports = sayHi;
exports.sayHi = sayHi;

/*
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/