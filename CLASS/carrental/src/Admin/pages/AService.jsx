import React, { useEffect, useState } from 'react'
import AHeader from '../common/AHeader'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';


function Aservice() {
  const [carservice, setcarservicce] = useState([])

  const getservice = async () => {
    const res = await axios.get("http://localhost:3000/service")
    console.log(res.data)
    setcarservicce(res.data)
  }
  useEffect(() => {
    getservice()
  }, [])


  return (

    <div>
      <AHeader />
      <div className="container">
        <h1 className='text-center py-4'>Hello Car Listing management</h1>
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>IMAGE</th>
              <th scope='col'>TITLE</th>
              <th scope='col'>DESC</th>
              <th scope='col' className='text-center'>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {
              carservice && carservice.map((car, index) => {
                console.log(car)
                const { id, img, title, desc } = car
                return (
                  <tr>
                    <td>{id}</td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src={img}
                          alt=''
                          style={{ width: '45px', height: '45px' }}
                          className='rounded-circle'
                        />

                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>

                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{title}</p>

                        </div>
                      </div>
                    </td>



                    <td>{desc}</td>

                    <td className='text-center'>
                      <MDBBtn color='primary' className='' rounded size='sm'>
                        View
                      </MDBBtn>
                      <MDBBtn color='success' className='mx-1' rounded size='sm'>
                        Edit
                      </MDBBtn>
                      <MDBBtn color='danger' rounded size='sm'>
                        Delete
                      </MDBBtn>
                    </td>
                  </tr>
                )
              })
            }
          </MDBTableBody>
        </MDBTable>
      </div>

    </div>
  )
}

export default Aservice
