import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { userContext } from './App';

function DltContact() {
    const nav  = useNavigate();
    const {id} = useParams();
    
    const {contacts, setContacts} = useContext(userContext);

    console.log(id);
    console.log(contacts);

    useEffect(() => {
        const newList = contacts.filter((item) => item.id !== parseInt(id));
        setContacts(newList)
        nav('/')
    }, [id])
    
  return (
    <div></div>
  )
}

export default DltContact