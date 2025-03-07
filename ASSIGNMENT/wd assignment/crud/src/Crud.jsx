// import React, { useEffect, useRef, useState } from 'react';
// import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import axios from 'axios';

// export default function Crud() {
//     const [userlist, setuserlist] = useState()
//     const [updatemodal, setupdatemodal] = useState(null)
//     const [updatedetail, setupdatedetail] = useState({

//         id: "",
//         name: " ",
//         work: "",
//         location: "",
//         email: ""


//     })
//     const updateref = useRef(null);

//     const addref = useRef(null);

//     const [viewmodal, setviewmodal] = useState(null)
//     const [viewdetail, setviewdetail] = useState({

//         id: "",
//         name: " ",
//         work: "",
//         location: "",
//         email: ""


//     })

//     const [addmodal, setaddmodal] = useState(null)
//     const [adddetail, setadddetail] = useState({
//         id: "",
//         name: " ",
//         work: "",
//         location: "",
//         email: ""


//     })


//     const viewdata = (view) => {
//         setviewmodal(true)
//         setviewdetail(view)
//         setupdatemodal(false)
//         setaddmodal(false)
//         setTimeout(() => {

//             viewref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
//         })
//     }

//     const onChange = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:3001/contact/${updatedetail.id}`, updatedetail)
//             getuser();
//             setupdatemodal(false)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const viewref = useRef(null)
//     const onedit_click = (user) => {
//         setupdatemodal(true)
//         setupdatedetail(user)
//         setviewmodal(false)
//         setaddmodal(false)
//         setTimeout(() => {
//             updateref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
//         })
//     }
//     const clickaddmodal = () => {
//         setaddmodal(true)
//         setupdatemodal(false)
//         setviewmodal(false)
//         setTimeout(()=>{
//             addref.current?.scrollIntoView({behavior:'smooth',block:'start'})
//         },100)
//     }
//     const getuser = async () => {
//         const res = await axios.get('http://localhost:3001/contact');
//         console.log(res.data)
//         setuserlist(res.data)
//     }

//     const onchange = (e) => {

//         setadddetail({
//             ...adddetail,
//             id: new Date().getTime().toString(),
//             [e.target.name]: e.target.value

//         })
//     }
//     const onsubmit = async (e) => {
//         e.preventDefault();
//         const res = await axios.post("http://localhost:3001/contact", adddetail)
//         console.log(res.data)

//         setadddetail({
//             id: "",
//             name: " ",
//             work: "",
//             location: "",
//             email: ""
//         });
//         getuser();

//         // Close the modal
//         setaddmodal(false);

//     }

//     useEffect(() => {
//         getuser();
//     })
//     const deletedata = async (id) => {
//         await axios.delete(`http://localhost:3001/contact/${id}`)

//         getuser();

//         if (viewdetail.id == id) {
//             setviewmodal(false)
//         }
//         if (updatedetail.id == id) {
//             setupdatemodal(false)
//         }
//     }
//     return (
//         <div className="container">
//             <MDBBtn color='link' className="btn btn-secondary py-3 px-3 me-0" onClick={() => clickaddmodal()} rounded size='sm'>
//                 Add contact
//             </MDBBtn>
//             <MDBTable align='middle'>
//                 <MDBTableHead>
//                     <tr>
//                         <th scope='col'>id</th>
//                         <th scope='col'>Name</th>
//                         <th scope='col'>work</th>
//                         <th scope='col'>location</th>
//                         <th scope='col'>email</th>

//                         <th scope='col' className='text-center'>Actions</th>
//                     </tr>
//                 </MDBTableHead>

//                 <MDBTableBody>
//                     {
//                         userlist && userlist.map((user) => {
//                             return (

//                                 <tr>

//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.id}</p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.name}</p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'> {user.work}</p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.location}</p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.email}</p>

//                                     </td>

//                                     <td className='text-center'>
//                                         <MDBBtn color='link' onClick={() => viewdata(user)} rounded size='sm'>
//                                             view
//                                         </MDBBtn>
//                                         <MDBBtn onClick={() => onedit_click(user)} color='link' rounded size='sm'>
//                                             Edit
//                                         </MDBBtn>
//                                         <MDBBtn onClick={() => deletedata(user.id)} color='link' rounded size='sm'>
//                                             delete
//                                         </MDBBtn>
//                                     </td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </MDBTableBody>


//             </MDBTable>

//             {/* update */}
//             {
//                 updatemodal && (
//                     <form ref={updateref}>
//                         <div className="container-fluid py-5">
//                             <div className="container pt-5 pb-3">
//                                 <h1 className="display-4 text-uppercase text-center mb-5">
//                                     Update Contact  Detail
//                                 </h1>
//                                 <div className="row">
//                                     <div className="col-lg-12 mb-2">
//                                         <div
//                                             className="contact-form bg-light mb-4"
//                                             style={{ padding: 30 }}
//                                         >
//                                             <form>
//                                                 <div className="row">
//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control p-4"
//                                                             value={updatedetail.name}
//                                                             onChange={(e) => { setupdatedetail({ ...updatedetail, name: e.target.value }) }}
//                                                             placeholder="name"
//                                                         />
//                                                     </div>
//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control p-4"
//                                                             value={updatedetail.work}
//                                                             onChange={(e) => { setupdatedetail({ ...updatedetail, work: e.target.value }) }}
//                                                             placeholder="work"
//                                                         />
//                                                     </div>
//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="email"
//                                                             className="form-control p-4"
//                                                             value={updatedetail.email}
//                                                             onChange={(e) => { setupdatedetail({ ...updatedetail, email: e.target.value }) }}
//                                                             placeholder="email"
//                                                         />
//                                                     </div>

//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control p-4"
//                                                             value={updatedetail.location}
//                                                             onChange={(e) => { setupdatedetail({ ...updatedetail, location: e.target.value }) }}
//                                                             placeholder="location"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className='my-5'>
//                                                     <button

//                                                         className="btn btn-primary py-3 px-5"
//                                                         type="button" onClick={onChange}
//                                                     >
//                                                         Update
//                                                     </button>
//                                                     <button

//                                                         className="btn btn-secondary py-3 px-5 mx-3"
//                                                         type="button" onClick={() => setupdatemodal(false)}
//                                                     >
//                                                         Cancel
//                                                     </button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 )
//             }









//             {/* view modal */}

//             {
//                 viewmodal && (
//                     <form ref={viewref}>

//                         <div className="container-fluid py-5">
//                             <div className="container pt-5 pb-3">
//                                 <h1 className="display-4 text-uppercase text-center mb-5">
//                                     view Contact  Detail
//                                 </h1>
//                                 <div className="row">
//                                     <div className="col-lg-12 mb-2">
//                                         <div
//                                             className="contact-form bg-light mb-4"
//                                             style={{ padding: 30 }}
//                                         >
//                                             <form>
//                                                 <div className="row">
//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control p-4"
//                                                             value={viewdetail.name}

//                                                             placeholder="name"
//                                                         />
//                                                     </div>
//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control p-4"
//                                                             value={viewdetail.work}

//                                                             placeholder="work"
//                                                         />
//                                                     </div>
//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="email"
//                                                             className="form-control p-4"
//                                                             value={viewdetail.email}

//                                                             placeholder="email"
//                                                         />
//                                                     </div>

//                                                     <div className="col-12 col-md-6 form-group">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control p-4"
//                                                             value={viewdetail.location}

//                                                             placeholder="location"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className='my-5'>

//                                                     <button

//                                                         className="btn btn-secondary py-3 px-5 mx-3"
//                                                         type="button" onClick={() => setviewmodal(false)}
//                                                     >
//                                                         Cancel
//                                                     </button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 )
//             }

//             {/* add modal */}
//             {
//                 addmodal && (

//                     <div className="container-fluid py-5">
//                         <div className="container pt-5 pb-3">
//                             <h1 className="display-4 text-uppercase text-center mb-5">
//                                 Add Contact  Detail
//                             </h1>
//                             <div className="row">
//                                 <div className="col-lg-12 mb-2">
//                                     <div
//                                         className="contact-form bg-light mb-4"
//                                         style={{ padding: 30 }}
//                                     >
//                                         <form onSubmit={onsubmit} ref={addref}>
//                                             <div className="row">
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         onChange={onchange}
//                                                         placeholder='name'
//                                                         value={adddetail.name}
//                                                         name='name'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         onChange={onchange}
//                                                         value={adddetail.work}
//                                                         placeholder="work"
//                                                         name='work'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="email"
//                                                         className="form-control p-4"
//                                                         onChange={onchange}
//                                                         value={adddetail.email}
//                                                         placeholder="email"
//                                                         name='email'
//                                                     />
//                                                 </div>

//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         onChange={onchange}
//                                                         placeholder="location"
//                                                         value={adddetail.location}
//                                                         name='location'
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className='my-5'>
//                                                 <button

//                                                     className="btn btn-primary py-3 px-5"
//                                                     type="submit"
//                                                 >
//                                                     Add
//                                                 </button>
//                                                 <button

//                                                     className="btn btn-secondary py-3 px-5 mx-3"
//                                                     type="button" onClick={() => setaddmodal(false)}
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 )
//             }







//         </div>







//     );
// }

// import React, { useEffect, useRef, useState } from 'react';
// import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import axios from 'axios';
// import { use } from 'react';


// function Crud() {
//     const [user, setuser] = useState([])

//     // view modal
//     const [viewmodal, setviewmodal] = useState(false)
//     const [viewdetail, setviewdetail] = useState({
//         id: "",
//         name: "",
//         work: "",
//         location: "",
//         email: ""

//     })


//     const [updatemodal, setupdatemodal] = useState(false)
//     const [updatedetail, setupdatedetail] = useState({
//         id: "",
//         name: "",
//         work: "",
//         location: "",
//         email: ""
//     })

//     const getuser = async () => {
//         const res = await axios.get("http://localhost:3000/user")
//         console.log(res.data)
//         setuser(res.data)

//     }
//     useEffect(() => {

//         getuser();
//     })

//     const deletedata = async (id) => {
//         await axios.delete(`http://localhost:3000/user/${id}`)
//         getuser();

//     }
//     const onupdatemodal = (user) => {
//         setupdatemodal(true)
//         setupdatedetail(user);
//     }
//     const onviewmodal = (user) => {
//         setviewmodal(true)
//         setviewdetail(user);
//     }
//     const onupdatesubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`http://localhost:3000/user/${updatedetail.id}`, updatedetail)
//             setupdatedetail({
//                 id: "",
//                 name: "",
//                 work: "",
//                 location: "",
//                 email: ""
//             })
//             setupdatemodal(false)
//             getuser();
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     const [addmodal, setaddmodal] = useState(false)
//     const [adddetail, setadddetail] = useState({
//         id: "",
//         name: "",
//         work: "",
//         location: "",
//         email: ""
//     })
//     const openaddmodal = () => {
//         setaddmodal(true)
      
//     }


//     const onchangeadd = (e) => {
//         setadddetail({
//             ...adddetail,
//             id: new Date().getTime().toString(),
//             [e.target.name]: e.target.value
//         })
//     }

//     const onsubmitadd = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:3000/user",adddetail);
//             console.log(res.data)
//             setadddetail({
//                 id: "",
//                 name: "",
//                 work: "",
//                 location: "",
//                 email: ""
//             })
//             getuser();
//             setaddmodal(false)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return (

//         <div className="container">
//             <MDBBtn color='link' rounded size='sm' className='btn btn-secondary' onClick={() => openaddmodal()}>
//                 Add user
//             </MDBBtn>

//             <MDBTable align='middle'>
//                 <MDBTableHead>
//                     <tr>
//                         <th scope='col'>id</th>
//                         <th scope='col'>Name</th>
//                         <th scope='col'>work</th>
//                         <th scope='col'>location</th>
//                         <th scope='col'>email</th>

//                         <th scope='col' className='text-center'>Actions</th>
//                     </tr>
//                 </MDBTableHead>

//                 <MDBTableBody>
//                     {

//                         user && user.map((user) => {
//                             return (
//                                 <tr>

//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.id}</p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.name}</p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.work} </p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.location}</p>

//                                     </td>
//                                     <td>
//                                         <p className='fw-normal mb-1'>{user.email}</p>

//                                     </td>

//                                     <td className='text-center'>
//                                         <MDBBtn color='link' rounded size='sm' onClick={() => onviewmodal(user)}>
//                                             view
//                                         </MDBBtn>
//                                         <MDBBtn color='link' rounded size='sm' onClick={() => onupdatemodal(user)}>
//                                             Edit
//                                         </MDBBtn>
//                                         <MDBBtn color='link' rounded size='sm' onClick={() => deletedata(user.id)}>
//                                             delete
//                                         </MDBBtn>
//                                     </td>
//                                 </tr>
//                             )
//                         })

//                     }
//                 </MDBTableBody>


//             </MDBTable>








//             {/* view modal */}
//             {
//                 viewmodal && (

//                     <div className="container-fluid py-5">
//                         <div className="container pt-5 pb-3">
//                             <h1 className="display-4 text-uppercase text-center mb-5">
//                                 view Contact  Detail
//                             </h1>
//                             <div className="row">
//                                 <div className="col-lg-12 mb-2">
//                                     <div
//                                         className="contact-form bg-light mb-4"
//                                         style={{ padding: 30 }}
//                                     >
//                                         <form >
//                                             <div className="row">
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="number"
//                                                         className="form-control p-4"
//                                                         value={viewdetail.id}
//                                                         placeholder='id'

//                                                         name='id'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={viewdetail.name}
//                                                         placeholder='name'

//                                                         name='name'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={viewdetail.work}
//                                                         placeholder="work"
//                                                         name='work'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="email"
//                                                         className="form-control p-4"
//                                                         value={viewdetail.email}
//                                                         placeholder="email"
//                                                         name='email'
//                                                     />
//                                                 </div>

//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={viewdetail.location}
//                                                         placeholder="location"

//                                                         name='location'
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className='my-5'>

//                                                 <button

//                                                     className="btn btn-secondary py-3 px-5 mx-3"
//                                                     type="button" onClick={() => setviewmodal(false)}
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 )
//             }








//             {/*  update modal  */}


//             {
//                 updatemodal && (

//                     <div className="container-fluid py-5">
//                         <div className="container pt-5 pb-3">
//                             <h1 className="display-4 text-uppercase text-center mb-5">
//                                 update Contact  Detail
//                             </h1>
//                             <div className="row">
//                                 <div className="col-lg-12 mb-2">
//                                     <div
//                                         className="contact-form bg-light mb-4"
//                                         style={{ padding: 30 }}
//                                     >
//                                         <form onSubmit={onupdatesubmit} >
//                                             <div className="row">
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="number"
//                                                         className="form-control p-4"
//                                                         value={updatedetail.id}
//                                                         placeholder='id'

//                                                         name='id'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={updatedetail.name}
//                                                         onChange={(e) => { setupdatedetail({ ...updatedetail, name: [e.target.value] }) }}
//                                                         placeholder='name'

//                                                         name='name'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={updatedetail.work}
//                                                         onChange={(e) => { setupdatedetail({ ...updatedetail, work: [e.target.value] }) }}
//                                                         placeholder="work"
//                                                         name='work'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="email"
//                                                         className="form-control p-4"
//                                                         value={updatedetail.email}
//                                                         onChange={(e) => { setupdatedetail({ ...updatedetail, email: [e.target.value] }) }}
//                                                         placeholder="email"
//                                                         name='email'
//                                                     />
//                                                 </div>

//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         value={updatedetail.location}
//                                                         onChange={(e) => { setupdatedetail({ ...updatedetail, location: [e.target.value] }) }}
//                                                         placeholder="location"

//                                                         name='location'
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className='my-5'>
//                                                 <button

//                                                     className="btn btn-secondary py-3 px-5 mx-3"
//                                                     type="submit"
//                                                 >
//                                                     update
//                                                 </button>
//                                                 <button

//                                                     className="btn btn-secondary py-3 px-5 mx-3"
//                                                     type="button" onClick={() => setupdatemodal(false)}
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }











//             {/* add modal */}
//             {
//                 addmodal && (
//                     <div className="container-fluid py-5">
//                         <div className="container pt-5 pb-3">
//                             <h1 className="display-4 text-uppercase text-center mb-5">
//                                 Add Contact  Detail
//                             </h1>
//                             <div className="row">
//                                 <div className="col-lg-12 mb-2">
//                                     <div
//                                         className="contact-form bg-light mb-4"
//                                         style={{ padding: 30 }}
//                                     >
//                                         <form onSubmit={onsubmitadd}>
//                                             <div className="row">

//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         onChange={onchangeadd}
//                                                         placeholder='name'
//                                                         value={adddetail.name}
//                                                          name='name'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         onChange={onchangeadd}
//                                                         value={adddetail.work}
//                                                         placeholder="work"
//                                                         name='work'
//                                                     />
//                                                 </div>
//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="email"
//                                                         className="form-control p-4"
//                                                         onChange={onchangeadd}
//                                                         placeholder="email"
//                                                         name='email'
//                                                         value={adddetail.email}
//                                                     />
//                                                 </div>

//                                                 <div className="col-12 col-md-6 form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control p-4"
//                                                         onChange={onchangeadd}
//                                                         placeholder="location"
//                                                         value={adddetail.location}
//                                                         name='location'
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className='my-5'>
//                                                 <button

//                                                     className="btn btn-secondary py-3 px-5 mx-3"
//                                                     type="submit"
//                                                 >
//                                                     Add
//                                                 </button>
//                                                 <button

//                                                     className="btn btn-secondary py-3 px-5 mx-3"
//                                                     type="button" onClick={() => setaddmodal(false)}
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//         </div>


//     )
// }

// export default Crud



import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Crud = () => {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [task, setTask] = useState(""); // State to store the input value
  const [editingIndex, setEditingIndex] = useState(null); // Track which task is being edited
  const [editText, setEditText] = useState(""); // Store the updated text during edit

  // Function to handle adding a task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Function to handle removing a task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to handle editing a task
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index]);
  };

  // Function to handle saving the edited task
  const saveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editText;
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  return (
    <div >
      <h1 >Simple To-Do List</h1>

      {/* Input for adding new tasks */}
      <div>
        <input type="text" value={task}  onChange={(e) => setTask(e.target.value)} placeholder="Enter a new task" />
        <button onClick={addTask}          >Add</button>
      </div>

      {/* List of tasks */}
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
                          >
              {editingIndex === index ? (
                <>
                  <input    type="text"   value={editText}onChange={(e) => setEditText(e.target.value)}  />
                  <button  onClick={saveEdit}                 > Save</button>
                </>
              ) : (
                <>
                  <span>{t}</span>
                  <div className="flex gap-2">
                    <button onClick={() => startEditing(index)}              >  Edit</button>
                    <button onClick={() => removeTask(index)}    >   Remove </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        
      ) : (
        <p >No tasks added yet.</p>
        
      )}


    </div>
  );
};


export default Crud;




// import { useReducer } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [...tasks, {
//         id: action.id,
//         text: action.text,
//         done: false
//       }];
//     }
//     case 'changed': {
//       return tasks.map(t => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter(t => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(
//     tasksReducer,
//     initialTasks
//   );

//   function handleAddTask(text) {
//     dispatch({
//       type: 'added',
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: 'changed',
//       task: task
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: 'deleted',
//       id: taskId
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask
//         onAddTask={handleAddTask}
//       />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: 'Visit Kafka Museum', done: true },
//   { id: 1, text: 'Watch a puppet show', done: false },
//   { id: 2, text: 'Lennon Wall pic', done: false }
// ];

