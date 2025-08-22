
import { useSelector, useDispatch } from 'react-redux'
import { addItem, getQuantity} from '../store/CartSlice'
import { BsCartPlus } from "react-icons/bs";
import { gbpFormatter } from '../utils/currencyFormatter';

const AddToCartButton = ({ product }) => {
    const count = useSelector(state => getQuantity(state.cart, product.id));
  const dispatch = useDispatch();

const  addtoCart = (product) => {
  dispatch(addItem(product));
}

  return (
    
    <>
      <div className="row text-center">
      <div className='col-4 text-left' >
             <p className="product-price"> {gbpFormatter.format(product.unitPrice)}</p>
   
        </div> 
      <div className="col-4">
      <button  disabled={count > 0}  className={count > 0?"btn btn-secondary":"btn btn-warning"}
         onClick={() => addtoCart(product)}
        >
        <BsCartPlus style={{fontWeight: 'bolder', fontSize: '25px', color: 'black'}} 
        />
          {count > 0?<span className="badge bg-secondary">Added to cart</span>:
          <span className="badge bg-success">Add to cart</span>}
      </button></div>   </div>
    </>
   
  )}


export default AddToCartButton


