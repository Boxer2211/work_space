//1 Створіть об'єкт Person який буде містити імя, прізвище і метод для виводу повного імені і просто імені за допомогою трьох різних варіантів

let Person = {firstname: 'Myroslav', secondname: 'Rakatosh'};

let Person1 = Person.firstname;

Person = Person.firstname + ' ' + Person.secondname;
console.log(Person);


//2 Просто функції

function showname(arg) {
    let obje = {};
     
    obje.name = arg;
    
    return obje;
}
console.log(showname(Person1));

//3 Функції конструктору

function Per(arg) {
    this.name = arg;
    this.getname = () => this.name;
}

let myperson = new Per(Person1);

console.log(myperson);


//4 Класу 

class Pers {
    constructor(arg) {
        this.name = arg;
    }

    getname() {
        console.log(this.name)
    }

}

myperson = new Pers(Person1);
console.log(myperson);