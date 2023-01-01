import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, fetchOneUser, fetchUser} from '../http/listApi';
import { EDIT_ROUTE } from '../utils/consts';
import { putUser, removeUser, setUsers } from './ReduxToolkit/toolkitSlice';



function ListItem({id,name,lastName,address,city,country,email,number}) {
  
const users = useSelector(state => state.toolkit.users)
const dispatch = useDispatch();
const navigete = useNavigate();


const deletUser = (id) => {
    deleteUser(id).then(data => dispatch(removeUser(data)));
     fetchUser().then(data => dispatch(setUsers(data))) 
  }

const Edit = (id) => {
  fetchOneUser(id).then(data => dispatch(putUser(data)))
  navigete(EDIT_ROUTE) 
}

  return (
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{lastName}</td>
                        <td>{address}</td>
                        <td>{city}</td>
                        <td>{country}</td>
                        <td>{email}</td>
                        <td>{number}</td>
                        <td><button onClick={() => Edit(id)} className='Table__button button-edit'>Edit</button></td>
                        <td><button onClick={() => deletUser(id)} className='Table__button button-delet'>Delet</button></td>
                    </tr>
                </tbody>
  );
}

export default ListItem;