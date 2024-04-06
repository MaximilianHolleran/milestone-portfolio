import {useState, useEffect} from 'react'


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
                    <p key={contact._id}>{contact.name}</p>
                ))}
            </div>
        </div>
    );

}
      
export default Contact