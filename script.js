function operate(operator, a, b){
    switch (operator){
        case "+":
            return addition(a,b)
        case "-":
            return subtraction(a,b)    
        case "*":
            return multiplication(a,b)
        case "/":
            if(b!=0){
                return division(a,b)
            }
            return "invalid operation"

    }
}

function addition (a, b){
    return a+b
}

function subtraction (a, b){
    return a-b
}

function multiplication (a, b){
    return a*b
}

function division (a, b){
    return a+b
}