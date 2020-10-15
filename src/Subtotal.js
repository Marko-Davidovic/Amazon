import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { ShoppingBasket } from '@material-ui/icons'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
const [{basket}, dispach] = useStateValue();
const history = useHistory();


    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} //increment value of bbasket
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e => history.push("/payment")}>Proced to Checkout </button>
        </div>
    )
}

export default Subtotal
