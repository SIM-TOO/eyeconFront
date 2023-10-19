import DaumPostcode from "react-daum-postcode";
import { AddressContext } from "../context/AddressContext";
import React, { useContext, useEffect, useState } from "react";
const Place = (props) => {
    
    const {setCompany} = useContext(AddressContext);
    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log("data",data)
        console.log("fullAddress",fullAddress)
        console.log("zoneCode",data.zonecode)

       
        localStorage.setItem('address', fullAddress);
        window.close()
    }
  
    return (
        <div >
            <DaumPostcode
                autoClose
                onComplete={complete} />
        </div>
    );
};

export default Place