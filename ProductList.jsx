import React from 'react'
import { useSearchParams,useLocation } from 'react-router-dom'

export default function ProductList() {


  const [SearchParams]=useSearchParams();
  const location=useLocation();
  //console.log(location);

  /*console.log(SearchParams.get("keyword"),SearchParams.get("instock"),SearchParams.get("rating"));
  console.log(SearchParams.get("instock"));
  console.log(SearchParams.get("rating"));*/
  return (
    <main>
    <div className='component' >ProductList</div>
    </main>
  )
}
