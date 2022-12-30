import { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const Budget = () => { 
    const { currency, remaining, budget, dispatch } = useContext(AppContext);

    return (
        <div 
            className='alert alert-secondary d-flex flex-row'
            style={{
                alignItems: "center",
                gap: "0.5em"
            }}
        >
            <span>Budget:</span>
            <span>{currency}</span>
            <input 
                className="form-control"
                type="number"
                value={budget}
                max={20000}
                onChange={e => {
                    if (e.target.value > parseInt(e.target.max))
                        alert(`The value cannot exceed max funds £${e.target.max}`);
                    if (e.target.value < budget - remaining)
                        alert(`The value cannot be less than money spent ${currency}${budget - remaining}`);

                    dispatch({
                        type: 'SET_BUDGET',
                        payload: e.target.value
                    })
                }}
            />
            
        </div>
    )
}

export default Budget;