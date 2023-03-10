import Item from './item'

const ItemList = ({products}) => {
  return (
<>

   {bikes?.map((product)=>(
    <Item 
    key={product.id}
    id={product.id}
    name={product.name}
    description = {product.description}
    price= {product.price}
    stock={product.stock}
    category={product.category}
    image={product.image}
    />
   ))}
   </>
  )
}

export default ItemList