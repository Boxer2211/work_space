import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../http/listApi';
import { NEW_ROUTE } from '../utils/consts';
import ListItem from './ListItem';
import { setUsers } from './ReduxToolkit/toolkitSlice';


function List() {
  
  const navigate = useNavigate();
  const users = useSelector(state => state.toolkit.users)
  const dispatch = useDispatch();
  
  
  useEffect(() => {
      fetchUser().then(data => dispatch(setUsers(data)))
       // eslint-disable-next-line react-hooks/exhaustive-deps
       
  }, [])
  
  
  return (
    <div className='List'>    
        <div className='List__container container'>
            <div className='List__head'>
                <p className='List__p'>Contacts</p>
                <button className='List__button' onClick={() => navigate(NEW_ROUTE)}>Add contact</button>      
            </div>
            <div className='List__content Table'>
                <table>
                    <thead>
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
                    </thead>
                    {users.map( users =>
                      <ListItem key={users._id} 
                        id={users._id}
                        name={users.name}
                        lastName={users.lastName}
                        address={users.address}
                        city={users.city}
                        country={users.country}
                        email={users.email}
                        number={users.number}
                        />
                    )}
                    
                  </table>
                </div>
         </div>      
    </div>  
  );
}

export default List;