import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NEW_ROUTE } from '../utils/consts';




function List() {
  
  const navigate = useNavigate();
 
  return (
    <div className='List'>    
        <div className='List__container container'>
            <div className='List__head'>
                <p className='List__p'>Contacts</p>
                <button className='List__button' onClick={() => navigate(NEW_ROUTE)}>Add contact</button>
            </div>
            <div className='List__content Table'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Adress</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Edit</th>
                        <th>Delet</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>Travolta</td>
                        <td>street volsad</td>
                        <td>Washington</td>
                        <td>Ukraine</td>
                        <td>asdkjaksdj@adasd.com</td>
                        <td>0963572244</td>
                        <td><button className='Table__button button-edit'>Edit</button></td>
                        <td><button className='Table__button button-delet'>Delet</button></td>
                    </tr>
                </table>
            </div>
        </div>      
    </div>  
  );
}

export default List;