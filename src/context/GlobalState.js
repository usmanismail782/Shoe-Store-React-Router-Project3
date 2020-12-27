import React, { createContext, useReducer } from 'react';
import ItemReducer from './ItemReducer'

const intialState = { ItemList: [] }

export const GlobalContext = createContext(intialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ItemReducer, intialState);

    function DeleteItem(id) {

        dispatch({

            type: 'Delete_Transaction',
            payload: id

        })

    }

    function AddItem(new_Item) {

    
        dispatch({

            type: 'Add_Item',
            payload: {

                id: new_Item.id,
                amount: new_Item.item_amount,
                name: new_Item.itemName
            }

        })

    }

    return (<GlobalContext.Provider value={{
        ItemList: state.ItemList,
        DeleteItem,
        AddItem

    }}>
        {children}
    </GlobalContext.Provider>
    );

}
