import { useState, useEffect } from 'react';

const useUserAddress = () => {
    const [address, setAddress] = useState('');
    useEffect(() => {
        const savedAddress = localStorage.getItem('address');
        if (savedAddress) {
            setAddress(savedAddress);
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
    };

    return {
        address,
        setAddress: handleAddressChange,
    };
};

export default useUserAddress;