const form_data = document.getElementById("form")
const tBody = document.getElementById("tbody")
const emp_data = []
console.log(tBody)
form_data.addEventListener("submit", (event)=>{
    event.preventDefault();
    let employee ={
        name:  event.target.name.value,
        ninja_id:  event.target.ninja_id.value,
        clan:  event.target.clan.value,
        designation: event.target.designation.value,
        status:  event.target.status.value

    }
    addEmployee(employee);
})

function addEmployee(employee){
    for(let i =0; i<emp_data.length; i++){
        let e = emp_data[i];
        if(e.ninja_id===employee.ninja_id){
            alert("Data already Exist")
            return;
        }
    }
    const tr= document.createElement("tr");
    tr.innerHTML=`<td>${employee.name}</td>
    <td>${employee.ninja_id}</td>
    <td>${employee.clan}</td>
    <td>${employee.designation}</td>
    <td>${employee.status}</td>
    <td>
        <button onclick="deleteEmp(this)" data-ninja_id=${employee.ninja_id}>Delete</button>
    </td>`;
    tBody.appendChild(tr);
    emp_data.push(employee);
    form_data.reset(); 

}
function deleteEmp(buttonref){
    let ninjaID = buttonref.getAttribute("data-ninja_id");
    for(let i =0; i<emp_data.length; i++){
        if(emp_data[i].ninja_id === ninjaID){
            emp_data.splice(i,1);
            break;
        }
    }
    let parentTd = buttonref.parentNode;
    let parentTr = parentTd.parentNode;
    parentTr.remove();

}