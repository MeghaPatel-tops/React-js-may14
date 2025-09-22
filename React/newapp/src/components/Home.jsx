import React from "react";
import Company from "./Company";
import Product from "./Product";
import Navbar from "./Navbar";

function Home(props){
  
    return(
        <div>
            <Navbar listitem={['Home','About','Gallary']}/>
            <h1>Welcome : {props.username}</h1>
            <Company username={props.username}/>
            <Product product={{'pname':'Laptop','price':200000,'desc':'lenovo laptop'}} />
        </div>
    )
}

export default Home