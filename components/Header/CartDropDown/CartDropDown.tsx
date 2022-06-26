import Button from '@components/Button/Button';
import React from 'react';
import CartItem from '../CartItem/CartItem';

type Props = {
  active: boolean;
  setActive: any;
};

const CartDropDown = ({ active }: Props) => {
  return (
    <>
      {active && (
        <div className="cartDropDown">
          <div className="cartDropDown-inside">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="cartDropDown-footer">
            <div className="total">
              Сумма заказа:<span>4399 ₽</span>
            </div>
            <Button name="Перейти в корзину" />
          </div>
        </div>
      )}
    </>
  );
};

export default CartDropDown;
