import React from 'react'


function Services({service_name, created_at}) {
  return (
   <>
   <tr>
   <td>{service_name}</td>
   <td>{created_at}</td>
   <td>edit</td>
   <td>remove</td>
   </tr>
   </>
      
      
      
   
  )
}

export default Services