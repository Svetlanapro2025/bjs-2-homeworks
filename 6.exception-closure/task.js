// Задача 1
function parseCount(value) {
    let result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    } 

    return result;
}

function validateCount(value) {
    try {
        let result = parseCount(value);
        return result;
    } catch (error) {
        return error;
    }     
}



// Задача 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    get area() {
        let halfPerimeter = 1 / 2 * (this.a + this.b + this.c);
        let area = (Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c))).toFixed(3);
        let areaNumber = +area;

        return areaNumber;
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        let errorObject = {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
        };

        return errorObject;
    }
}