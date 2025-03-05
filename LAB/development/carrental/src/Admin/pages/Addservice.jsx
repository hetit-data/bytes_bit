import React, { useState } from 'react'
import AHeader from '../common/AHeader'
import axios from 'axios'

function Addservice() {
    const[service,setservice]=useState({

        id:"",
        title:"",
        img:"",
        desc:""
    })
    const onchangeform=(e)=>{
        setservice({
            ...service,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value

        })

    }
    const onsubmitform=async(e)=>{
        e.preventDefault();
        try{
        const res=await axios.post("http://localhost:3000/service",service)
        console.log(res.data)
        setservice({
            id:"",
            title:"",
            img:"",
            desc:""
        })
        }
        catch(error){
            console.log("api error")

        }
    }
  return (
    <div>
        <AHeader/>
      <div className="container-fluid py-5">
                    <div className="container pt-5 pb-3">
                        <h1 className="display-4 text-uppercase text-center mb-5">Add Service</h1>
                        <div className="row">
                            <div className="col-lg-12 mb-2">
                                <div className="contact-form bg-light mb-4" style={{ padding: 30 }}>
                                    <form onSubmit={onsubmitform}>
                                        <div className="row">
                                            
                                            <div className="col-6 form-group">
                                                <input type="text" value={service.title} name='title' onChange={onchangeform} className="form-control p-4" placeholder="Service title" required="required" />
                                            </div>
                                            <div className="col-6 form-group">
                                                <input type="text"value={service.img} name='img' onChange={onchangeform}  className="form-control p-4" placeholder="service img" required="required" />
                                            </div>
                                            
                                        </div>
                                        <div className="form-group">
                                            <textarea  value={service.desc} name='desc' onChange={onchangeform} className="form-control py-3 px-4" rows={5} placeholder="Desciption" required="required" defaultValue={""} />
                                        </div>
                                       
                                        <div>
                                            <button className="btn btn-primary py-3 px-5" type="submit">Add service</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Addservice
