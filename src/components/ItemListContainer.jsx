import {useState, useEffect} from 'react'
import ItemLIst from "./ItemList"
import ItemListContainer from './ItemListContainer';

const ItemListContainer = () => {
  const catFilter = product.filter((product) => product.category === category);
  return (
<div>
    {category ? <ItemList product={catFilter}/> : <ItemList product={product}/>}
</div>
  )
};

export default ItemListContainer;
