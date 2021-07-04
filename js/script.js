let list = document.getElementById('list');

// ADD TODO ON CLICK

function add()
{
    let input = document.getElementById('input');

    if (input.value)
    {
        let li = document.createElement('li');
        let liText = document.createTextNode(input.value);
        li.appendChild(liText);
    
        // DELETE BUTTON
        const delBtn = document.createElement('button');
        const delBtnTxt = document.createTextNode('Delete');
        delBtn.setAttribute('class', 'todo_delete');
        delBtn.setAttribute('onclick', 'deleteItem(this)');
        delBtn.appendChild(delBtnTxt)
    
        // EDIT BUTTON
        const editBtn = document.createElement('button');
        const editBtnTxt = document.createTextNode('Edit');
        editBtn.setAttribute('class', 'todo_edit');
        editBtn.setAttribute('onclick', 'editItem(this)');
        editBtn.appendChild(editBtnTxt)
    
        li.appendChild(delBtn);
        li.appendChild(editBtn);
    
        list.appendChild(li);
        input.value = '';
    }

    console.log(input.value)
}

// EDIT TASK

function editItem(e)
{
    let val = e.parentNode.firstChild;
    let editValue = prompt('Enter Eidt Value', val.nodeValue);
    val.nodeValue = editValue;
    console.log(val);
}

// DELETE TASK

function deleteItem(e)
{
    e.parentNode.remove();
}

// DELETE ALL TASK

function deleteAll()
{
    list.innerHTML = '';
}