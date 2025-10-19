import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import './OrderPage.css'

import {SP25ShirtFront, SP25ShirtBack, SP25HoodieFront, SP25HoodieBack,
DTJShirtFront, DTJShirtBack, DTJCrewFront, DTJCrewBack, DTJSweats} 
from '../Apparel.js';

const apparelData = {
    'sp25shirt' : {
        name: 'Spring 2025 Shirt',
        price: 15.00,
        imgFront: SP25ShirtFront,
        imgBack: SP25ShirtBack
    }
};

const getApparelData = id => {
    return apparelData[id] || null;
};

const OrderPage = () => {
    
    const [searchParams] = useSearchParams();

    const apparelId = searchParams.get('apparel');

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (apparelId) {
            setLoading(true);

            const details = getApparelData(apparelId);
            setProduct(details);
            setLoading(false);
        }
        else {
            setProduct(null);
            setLoading(false);
        }

    }, [apparelId]);

    if (loading) {
        return <div className='order-page-main'>Loading...</div>;
    }

    if (!product) {
        return <div className='order-page-main'>Item not found</div>;
    }

    return(
        <>
            <div className='order-page-main'>
                <div>
                    <h2>{product.name}</h2>
                </div>
            </div>
        </>
    );
};

export default OrderPage;