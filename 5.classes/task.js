class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; 
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    } 

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {        
       for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
            return this.books[i];
        }            
       }

       return null;
    }

    giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++) {
          if(this.books[i].name === bookName) {
            let deleteBook = this.books.splice(i, 1);
            return deleteBook[0];
          }  
        }

        return null;       
    }
}




// Дополнительная задача
class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (this.marks[subject] === undefined) {
                this.marks[subject] = [];
            }

            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
            return 0;
        }

        let average = this.marks[subject].reduce((sumMarks, mark) => sumMarks + mark) / this.marks[subject].length;
        return average;        
    }

    getAverage() {
        let subjectNames = Object.keys(this.marks);

        if (subjectNames.length === 0) {
            return 0;
        }

        let averageSubject = subjectNames.reduce((acc, subject) => this.getAverageBySubject(subject) + acc, 0);
        return averageSubject / subjectNames.length;
    }    
}
