
import { useState } from 'react';
import { Link } from "react-router-dom";
import { removeItem, getCartItems, clearAllCartItems } from '../store/CartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Delete } from "../icons/index";
import { gbpFormatter } from '../utils/currencyFormatter';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import CartAddRemoveButton from '../components/CartAddRemoveButton';
import PendingModal from '../components/PendingModal';

const ShoppingCart = () => {
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate();
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const totalCartValue = cartItems.reduce((acc, item) => acc + item.unitPrice * item.itemCount, 0).toFixed(2);


  return (
    <div class="row mt-3" style={{width: '95%'}}>
      <div class="col-2"></div>
      <div class="col-8">
      <h1>Shopping Cart</h1>

        <div class="table-responsive">
          <table class="table table-striped 
                    table-bordered table-hover">
            <thead>
              <tr>
                <th className='col-1 ' scope="col"></th>
                <th scope="col">Product Name</th>
                <th className='text-center' scope="col">Price</th>
                <th className='col-3 text-center' scope="col">Quantity</th>
                <th className='col-2 text-center' scope="col">Total</th>
                <th className='col-1 text-center' scope="col"></th>
              </tr>
            </thead>
            <tbody>

              {cartItems.filter(a => a.itemCount > 0).map((plant, i) => (
                <tr key={plant.id}>
                  <td className='text-center'>
                    <img width={"50px"} height={"40px"} src={plant.image} alt={`Id: ${plant.id} -- ${plant.title}`} />
                  </td>
                  <td>
                    {plant.title}
                  </td>
                  <td className='text-center'>{plant.unitPrice}</td>
                  <td className='text-center'>
                    <CartAddRemoveButton product={plant} />

                  </td>
                  <td className='text-center'>{gbpFormatter.format(plant.unitPrice * plant.itemCount)}</td>
                  <td className='text-center' scope="col">
                    <button onClick={() =>
                      dispatch(removeItem(plant))} className="btn btn-danger" >
                      <Delete />
                    </button>

                  </td>
                </tr>
              ))}
              <tr key="totalCartItems">
                <td colSpan={4}></td>
                <td className='text-center'> <b>{gbpFormatter.format(totalCartValue)}</b></td>
                <td scope="col">



                </td>
              </tr>
              <tr key="cartItemFooter">
                <td className='text-center' colSpan={6}>
                  <Link to="/products">
                    <Button className='cartButton' variant="outline-primary" size="xxl">
                      Continue Shopping
                    </Button>
                  </Link>
                  {totalCartValue > 0 && (<>
                    <Button className='cartButton' variant='outline-danger' onClick={() => {
                      dispatch(clearAllCartItems()).then(() => {
                        navigate("/");
                      });
                    }}   >
                      Clear Cart <Delete />
                    </Button>


                    <Button className='cartButton' variant="outline-success" size="xxl"
                      onClick={() => setModalShow(true)}                    >
                      Checkout (Comming soon)
                    </Button>
                  </>)}



                  <PendingModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />

                </td>
              </tr>



            </tbody>
          </table>
        </div>

      </div>
      <div class="col-2"></div>

    </div>
  )
}

export default ShoppingCart
