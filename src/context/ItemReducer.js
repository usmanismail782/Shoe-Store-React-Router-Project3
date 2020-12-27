const ItemReducer = ((state, action) => {


    switch (action.type) {

        case 'Delete_Item':
            return {

              
                ItemList: state.ItemList.filter(item => item.id !== action.payload)

            }

        case 'Add_Item':

            return{
            ItemList: [action.payload, ...state.ItemList]
    }

        default:
            return state;
    }
})

export default ItemReducer;