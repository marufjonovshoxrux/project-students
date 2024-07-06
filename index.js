import { Product } from "./components/Products.js";
import { reload } from "./js/utils.js";
import { students } from "./js/db.js";

const students_tbody = document.querySelector('.students_tbody')
const form = document.forms.namedItem('act_task')


form.onsubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    
    const student = {
        number: students.length, 
        name: formData.get('name'), 
        age: formData.get('age') 
    }

    console.log(student.name);


    if (student.name && student.name.trim().length == 0) {
        alert('Заполните форму');
        return;
    }
    
    students.push(student); 
    reload(students, students_tbody, Product);
}


