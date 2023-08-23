import React from 'react'
import { Link} from 'react-router-dom'

export default function Sidebar() {

  const NavItems=[

{ Tab:" Home",
 url :"/"

},

{ Tab:" Product",
 url :"/product"

},

{ Tab:" Order",
 url :"/order"

},
{ Tab:" Brand",
 url :"/brand"

},

{ Tab:"Category",
 url :"/category"

},

{ Tab:"Logout",
 url :"/logout"

},




  ]
    
      
  
  return (

    <div style={{ height:'100vh'}} className='bg-dark'>
      <div  className='d-flex text-white justify-content-between align-item-center my-2 p-2 bg-primary ' >
     <span>AdminName</span>
     {/* <button className="btn btn-light">Logout</button> */}

     </div>



  <ul className="list-group p-1">
    {

      NavItems.map((val,key)=>
      <Link to={val.url} key ={key} className="list-group-item border bg-dark text-white ">
        <li >{val.Tab}</li>
        </Link>)
    }
 
 
  
</ul>


    </div>







   
    
  )
}

