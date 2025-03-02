import React from 'react';  
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const params =useParams();
  console.log(params.id);
  return (
    <main>
    <div className='component' >Product {params.id} - ProductDetail</div>
    </main>
  )
}
