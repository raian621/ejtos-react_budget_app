import { Dropdown } from "react-bootstrap";
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";

const currencyName = (symbol) => {
    switch (symbol) {
        case "$": return "Dollar";
        case "£": return "Pound";
        case "₹": return "Ruppee";
        case "€": return "Euro";
        default: return "Unknown";
    }
}

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const clickHandler = (e) => {
        dispatch({
            type: "CHG_CURRENCY",
            payload: e.target.name
        });
    }

    return (
        <Dropdown>
            <Dropdown.Toggle 
                variant="success" id="currency-dropdown"
                style={{
                    "background-color": "#93e398",
                }}>
                Currency ({`${currency} ${currencyName(currency)}`})
            </Dropdown.Toggle>
            <Dropdown.Menu
                style={{
                    "background-color": "#93e499",
                    "border": "solid 1px",
                    "border-color": "#559457"
                }}>
                <Dropdown.Item name="$" onClick={clickHandler}>$ Dollar</Dropdown.Item>
                <Dropdown.Item name="£" onClick={clickHandler}>£ Pound</Dropdown.Item>
                <Dropdown.Item name="€" onClick={clickHandler}>€ Euro</Dropdown.Item>
                <Dropdown.Item name="₹" onClick={clickHandler}>₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Currency;