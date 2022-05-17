import React, { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

const ContactList = () => {
    const {contactList, keyword} = useSelector((state) => state);
    const [filteredList, setFilteredList] = useState([])

    console.log(contactList)
    console.log(filteredList)
    console.log(keyword)

    useEffect(()=>{
        if(keyword !== ""){
            setFilteredList(contactList.filter((item)=>item.name.includes(keyword)))
            console.log("ok")
        } else {
            setFilteredList(contactList)
        }
    },[keyword, filteredList])

    return (
        <div>
            <SearchBox />
            {filteredList.map((item, index) => (
                <ContactItem key={index} item={item}/>
            ))}
        </div>
    );
};

export default ContactList;
