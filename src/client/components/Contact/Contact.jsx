import {useState, useEffect} from 'react'

// components
import ContactDetails from './ContactDetails.jsx'

const Contact = () =>{

    const [contacts, setContacts]= useState(null)

    useEffect(()=>{
        const fetchContacts= async ()=>{
            const response = await fetch('/api/contacts');
            const json= await response.json()

            if(response.ok){
                setContacts(json)
            }
        }
            fetchContacts()
    }, [])

    return(
        <div>
            <div>
                {contacts && contacts.map((contact)=>(
                    <ContactDetails key={contact._id} contact={contact} />
                ))}
            </div>
        </div>
    );

}
      
export default Contact