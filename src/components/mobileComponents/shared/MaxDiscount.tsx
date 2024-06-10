import Image from 'next/image';
import React from 'react';
import maxDiscount from '../../../assets/images/maxdiscount.png'

const MaxDiscount = () => {
    return (
        <div className='px-[3.8%] mt-[10px] flex items-center justify-center'>
          <Image src={maxDiscount} alt='maxDiscount' className='rounded'/>
        </div>
    );
};

export default MaxDiscount;