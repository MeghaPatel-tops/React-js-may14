//[{}]
let empArray=[
    {
        name:'Malay',
        email:'malay@gmail.com',
        salary:30000,
        dept:"Marketing"
    }
];


//Dtsplay all Employee
function printEmployee(){
    let str="";
    console.log();
    
    empArray.forEach((index,srrno,array)=>{
         str+=`  <tr>
                        <td>${index.name}</td>
                        <td>${index.email}</td>
                        <td>${index.salary}</td>
                        <td>${index.dept}</td>
                        <td><button onclick="delEmp(${srrno})">Delete</button></td>
                        <td><button onclick="editEmp(${srrno})">Edit</button></td>
                    </tr>`;
     })
     document.getElementById('emprow').innerHTML=str;           

}
//==========================================================================


//Add Employee============================================================
function addEmp(){
    let name=document.getElementById('empname').value;
    let email=document.getElementById('email').value;
    let salary=document.getElementById('salary').value;
    let dept=document.getElementById('dept').value;

    let singleEmp ={
        name:name,
        email:email,
        salary:salary,
        dept:dept
    }
    empArray.push(singleEmp);
    printEmployee();
    clearForm();
}
//===========================================================================

//Edit employee display previous data of employee in form
function editEmp(empid){
    let emp = empArray[empid];
     document.getElementById('empname').value=emp.name;
    document.getElementById('email').value=emp.email;
    document.getElementById('salary').value=emp.salary;
    document.getElementById('dept').value=emp.dept;
    document.getElementById('empid').value=empid;
}
//=========================================================================



//Update Employee data after changing on form
function updateEmp(){
      let name=document.getElementById('empname').value;
    let email=document.getElementById('email').value;
    let salary=document.getElementById('salary').value;
    let dept=document.getElementById('dept').value;
    let empid= document.getElementById('empid').value;


    let singleEmp ={
        name:name,
        email:email,
        salary:salary,
        dept:dept
    }
   
    empArray.splice(empid,1,singleEmp);
    printEmployee();
    clearForm();
    
}
//=======================================================================


//Delete employee 
function delEmp(empid){
      empArray.splice(empid,1);
      printEmployee();
      
}
//=========================================================


//Clear from all inputs
function clearForm(){
    document.getElementById('empname').value="";
    document.getElementById('email').value="";
    document.getElementById('salary').value="";
    document.getElementById('dept').value="";

}
//==============================================================


//call function on page load event
window.onload=printEmployee()