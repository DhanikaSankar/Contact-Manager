import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { userContext } from './App';

function DltContact() {
    const nav  = useNavigate();
    const {id} = useParams();
    
    const {contacts, setContacts} = useContext(userContext);

    useEffect(() => {
        const newList = contacts.filter((item,index) => index !== parseInt(id));
        setContacts(newList)
        nav('/')
    }, [id])
    
  return (
    <div></div>
  )
}

export default DltContact
