import React from 'react';
import Image from "next/image";
import maxDiscount from '../../assets/images/Roomilo.png'

const MaxDiscountBanner = () => {
    return (
        <div className='px-[71px] mt-[50px] flex items-center justify-center'>
          <Image src={maxDiscount} alt='maxDiscount' className='rounded'/>
        </div>
    );
};

export default MaxDiscountBanner;