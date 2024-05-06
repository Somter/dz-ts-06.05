class Student{
    private FullName: string;
    private DateOfBirth: Date;
    private phoneNumber: string;
    private City: string;
    private Country: string;
    private InstitutionName: string;    
    private GroupNumber: string;  
    
    constructor(name: string, date: Date, numb: string, city: string, country: string, institut: string, group: string){
        this.FullName = name;
        this.DateOfBirth = date;
        this.phoneNumber = numb;
        this.City = city;
        this.Country = country; 
        this.InstitutionName = institut;
        this.GroupNumber = group;   
    }

    AddTable()
    {
        const TableBody = document.querySelector('table tbody');

    if(TableBody){
        const Row = document.createElement('tr');   

        const arr = [this.FullName, this.DateOfBirth.toLocaleDateString(), this.phoneNumber, this.City, this.Country, this.InstitutionName, this.GroupNumber];

        arr.forEach(cellArr => {
            const cell = document.createElement('td');
            cell.textContent = cellArr;
            Row.appendChild(cell);  
        });

        TableBody.appendChild(Row); 
    }
    else{
        console.error("Error"); 
    }

    }

}

let Students: Student[] = [
    new Student('Петренко Петро Петрович', new Date(2000, 2, 15), '+380991234567', 'Київ', 'Україна', 'Київський національний університет', 'КН-123'),
    new Student('Іваненко Іван Іванович', new Date(1999, 11, 5), '+380977654321', 'Львів', 'Україна', 'Львівський національний університет', 'ЛН-456'), 
    new Student('John Smith', new Date(1998, 6, 20), '+11234567890', 'New York', 'USA', 'Harvard University', 'CS-101'),
    new Student('Emily Johnson', new Date(1997, 9, 10), '+11234561234', 'Los Angeles', 'USA', 'Stanford University', 'EE-202'),
];

for(let i = 0; i < Students.length; i++)
    {
        Students[i].AddTable();
    }   