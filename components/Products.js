export function Product(item,arr) {
    const tr = document.createElement('tr')
    const td_NO = document.createElement('td')
    const td_Name = document.createElement('td')
    const td_age = document.createElement('td')
    const td_img = document.createElement('td')
    const img_pererabotka = document.createElement('img')
    const img_basket = document.createElement('img')
    const years_old = (new Date()).getFullYear();

    img_pererabotka.src = './img/pererabotka.png'
    img_pererabotka.alt = 'pererabotka'
    img_pererabotka.id = 'pererabotka'

    img_basket.src = './img/basket.png'
    img_basket.alt = 'basket'
    img_basket.id = 'basket'

    td_NO.innerHTML = item.number + 1
    td_Name.innerHTML = item.name
    td_age.innerHTML = years_old - item.age

    tr.append(td_NO,td_Name,td_age,td_img)
    td_img.append(img_pererabotka, img_basket)

    img_basket.onclick = () => {
        let idx = arr.indexOf(item)
        arr.splice(idx,1)
        tr.remove()
    }
    
    
    
    img_pererabotka.onclick = () => {
        const dialog = document.createElement('dialog');

        const input_name_edit = document.createElement('input');
        const input_age_edit = document.createElement('input');
        const button_save = document.createElement('button');
        const button_cancel = document.createElement('button');

        input_name_edit.classList.add('input_name_edit')
        input_age_edit.classList.add('input_age_edit')
        button_save.classList.add('button_save')
        button_cancel.classList.add('button_cancel')
        

        input_name_edit.type = 'text';
        input_name_edit.value = item.name;
        input_age_edit.type = 'number';
        input_age_edit.value = years_old - item.age;
        button_save.textContent = 'Save';
        button_cancel.textContent = 'Cancel';


        dialog.append(input_name_edit, input_age_edit, button_save, button_cancel)

        document.body.appendChild(dialog);
        dialog.showModal();

        button_save.onclick = () => {
            item.name = input_name_edit.value;
            item.age = years_old - parseInt(input_age_edit.value, 10);
            td_Name.innerHTML = item.name;
            td_age.innerHTML = input_age_edit.value;

            dialog.close();
            document.body.removeChild(dialog);
        };


        button_cancel.onclick = () => {
            dialog.close();
            document.body.removeChild(dialog);
        };
    };



    return tr
}

