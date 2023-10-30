import DaumPostcode from "react-daum-postcode";
import { AddressContext } from "../context/AddressContext";
import React, { useContext } from "react";
const Place = (props) => {
    
    useContext(AddressContext);
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
            // 추가: 지번 주소 저장
        let jibunAddress = data.jibunAddress;
        console.log("jibunAddress", jibunAddress);
        
        console.log("data",data)
        console.log("fullAddress",fullAddress)
        console.log("zoneCode",data.zonecode)

       
        localStorage.setItem('address', fullAddress);
        localStorage.setItem('dong', jibunAddress); // 추가: 지번 주소 저장
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