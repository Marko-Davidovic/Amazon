import React from 'react'
import "./Subtotal.css"
import CurrecyFormat from "react-currency-format"
import { ShoppingBasket } from '@material-ui/icons'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrecyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal (0 items):
                        <strong>0</strong>
                </p>
                <small className="subtotal__gift">
                <input type="checkbox"/> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0} 
            displayType={"text"}
            thousendSeparator={true}
            prefix={"$"}
            />
            <button>Proced to Checkout </button>
        </div>
    )
}

export default Subtotal
