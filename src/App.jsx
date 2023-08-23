// import React, { useState ,useContext} from 'react'
// import Admin from './Admin'
// import Guest from './Guest'
// import  User from './User'
// import { GlobalContext } from './Context/Context'


// const UserRole ={
// 'admin':Admin,
// 'user':User,
// 'guest':Guest
// }


// const getUserRole =(params)=>ComponentByRoles[params]||ComponentByRoles['guest']
// export default function App() {

// const {state,dispatch}=useContext( GlobalContext)
// // console.log( state)

// //  const[ role,setRole]= useState( 'admin')
//  const CurrentUser =getUserRole(state.role)
//    return <CurrentUser />
// }




import React, { useContext } from 'react';
import Admin from './Admin';
import Guest from './Guest';
import User from './User';
import { GlobalContext } from './Context/Context';

const UserRole = {
  'admin': Admin,
  'user': User,
  'guest': Guest
};

const getUserRole = (params) => UserRole[params] || UserRole['guest'];

export default function App() {
  const { state } = useContext(GlobalContext);
  const CurrentUser = getUserRole(state.role);
  return <CurrentUser />;
}



























// import React, { useState } from 'react'
// import Admin from './Admin'
// import Guest from './Guest'
// import  User from './User'



// const UserRole ={
//   'admin':Admin,
//  'user':User,
//  'guest':Guest
// }


// const UserByRole =(role)=>UserRole[ role]
// export default function App() {
  
//  const[ role,setRole]= useState( 'admin')
//  const CurrentUser =UserByRole(role)



  
//    return <CurrentUser/>
   
// }

