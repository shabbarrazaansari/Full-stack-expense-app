function AddExpence(event){
    event.preventDefault();
    //we can obtain input value by callin by EVENT.TARGET.NAME.VALUE or below method here we are using get element by id.value
    const price = document.getElementById('amount').value;
    const desc = document.getElementById('discribe').value;
    const cat = document.getElementById('category').value;
    let ob1 = {
        amount:price,
        description:desc,
        category:cat
    }
    axios.post('http://localhost:1300/postusers',ob1)
    .then((response)=>{
         console.log(response.data);
           showonscreen(response.data.userData);
           document.getElementById('amount').value = '';
        document.getElementById('discribe').value = '';
        document.getElementById('category').value = '';
        document.getElementById('date').value = '';

    })
    // localStorage.setItem(ob1.amount,JSON.stringify(ob1));
    // showonscreen(ob1);

}
function showonscreen(ob1){
    console.log(ob1);
    const parentElement = document.getElementById('items');
    const childElem = document.createElement('li');
    //childElem.textContent = ob1.amount + '-' + ob1.description + '-' + ob1.category;
// change value of amount to Amount because of what i saveed in database
    childElem.textContent = ob1.Amount + '-' + ob1.description + '-' + ob1.category;
    parentElement.appendChild(childElem);
// dlete button
    const deletbtn = document.createElement('button');
    deletbtn.type='button';
    deletbtn.className = 'btn btn-danger'
    deletbtn.textContent = 'deleteExpense';
    deletbtn.addEventListener('click',()=>{
        parentElement.removeChild(childElem);


        axios.delete(`http://localhost:1300/eraseusers/${ob1.id}`)
        .then((response)=>{
            // parentElement.removeChild(childElem);

        })
        .catch((err)=>{
            console.log(err)
        })

        
        // localStorage.removeItem(ob1.amount);
        
    })
    childElem.appendChild(deletbtn);
//edit button
    const editbtn = document.createElement('button')
    editbtn.type='button'
    editbtn.className ='btn btn-primary';
    editbtn.textContent = 'editExpence';
    editbtn.addEventListener('click',()=>{
        //localStorage.removeItem(ob1.amount);
        parentElement.removeChild(childElem);
       
        axios.delete(`http://localhost:1300/eraseusers/${ob1.id}`)
        .then((response)=>{
            // parentElement.removeChild(childElem);
            document.getElementById('amount').value = ob1.amount;
            document.getElementById('discribe').value = ob1.description;
            document.getElementById('category').value = ob1.category;

        }).catch((err)=>{
            console.log(err)
        })

    })
    childElem.appendChild(editbtn);
    parentElement.appendChild(childElem);

}
function displayExpensesOnLoad() {
    const parentElement = document.getElementById('items');
    
    // Clear existing content to avoid duplication
    parentElement.innerHTML = '';
    axios.get('http://localhost:1300/getusers')
    .then((response)=>{
        console.log(response.data)
            for (let i=0;i<response.data.userDetails.length;i++){
                showonscreen(response.data.userDetails[i])
            }
            
        }).catch((err)=>{
            console.log(err)
        })
      
    

    // Iterate through localStorage items and display them
    
} 

// Call the function when the page loads

//there are many ways below are the ways
window.addEventListener('load', displayExpensesOnLoad);
// //window.onload = function() {
//     displayExpensesOnLoad();
// }


