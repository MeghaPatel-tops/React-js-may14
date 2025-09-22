//=================get product===========================

async function getAllProduct(){
      try {
             let res = await fetch("https://fakestoreapi.com/products");
            
            let data = await res.json();
            printProduct(data)
            
           } catch (error) {
                console.log(error.message);
           }

           finally{
            console.log("function called");
            
           }
}

function printProduct(data){
    str="";
     data.map((index)=>{
        str+=` <tr>
        <td>${index.title}</td>
        <td>${index.price}</td>
        <td>${index.description}</td>
        <td><img src="${index.image}" alt="" height="100px" width="100px"></td>
      <td><a href="Editproduct.html?id=${index.id}" class="btn btn-success">Edit</a></td>
        <td><button onclick="delProdcut(${index.id})" class="btn btn-danger">Delete</button></td>

        </tr>`;
      document.getElementById('prodata').innerHTML=str;
     })
}





//========================add Product=============================

let form1 = document.getElementById('form1');

form1.addEventListener('submit',async function(e){
    e.preventDefault();
    let productdata ={
        title:document.getElementById('pname').value,
        price:document.getElementById('price').value,
        description:document.getElementById('desc').value,
        image:document.getElementById('image').value,
        category:"product"
    }

    let res= await fetch('https://fakestoreapi.com/products',{
        method:"POST",
         headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(productdata)
    })

    let result = await res.json();
    console.log(result);
    
    alert(result);
})

//======================Delete Ptoduct==================

async function delProdcut(id){
    let res = await fetch('https://fakestoreapi.com/products/'+id, {
  method: 'DELETE'
});
    let result = await res.json();
    console.log(result);
    

}