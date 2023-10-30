import { useState, useEffect } from 'react';

const useUserAddress = () => {
    const [address, setAddress] = useState('');
    const [dong, setDong] = useState('');
    useEffect(() => {
        const savedAddress = localStorage.getItem('address');
        const savedAddress2= localStorage.getItem('dong')
        if (savedAddress) {
            setAddress(savedAddress);
            setDong(savedAddress2);
        }
    }, []);

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'address') {
                setAddress(e.newValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleAddressChange = (newAddress) => {
        setAddress(newAddress);
        localStorage.setItem('address', newAddress);
        // localStorage.setItem('dong', );
    };

    return {
        address,
        setAddress: handleAddressChange,
    };
};

export default useUserAddress;