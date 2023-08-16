import React from 'react'
import { FaShoppingCart, FaUserMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {

  const { total_items } = useCartContext()
  const { closeSidebar } = useProductsContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()

  return <Wrapper className='cart-btn-wrapper'>
    <Link to='/cart' className='cart-btn' onClick={closeSidebar} >
      Cart
      <span className="cart-container">
        <FaShoppingCart />
        <span className="cart-value">
          {total_items}
        </span>
      </span>
    </Link>
    {myUser ? (
      <button type="button" className='auth-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        <FaUserMinus />
      </button>
    ) : (
      <button type="button" className='auth-btn' onClick={() => loginWithRedirect()}>
        Login
      </button>
    )
    }



  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--grey-2);
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    color: var(--grey-2);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
