import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contact",
    initialState:{value:[]},
    reducers:{
        addContact: (state, action)=>{
            state.value.push(action.payload)
        },
        updateItem :(state ,action)=>{
            state.value.map((item)=>{
                if(item.id === action.payload.id){
                    item.name = action.payload.name;
                    item.email = action.payload.email;
                    item.contact = action.payload.contact;
                    item.status = action.payload.status;
                }
                return item
            })
        },

        deleteItem :(state, action)=>{
            state.value= state.value.filter((item)=>item.id!== action.payload.id)
        }
    }
})

export const{ addContact, updateItem, deleteItem} = contactSlice.actions;
export default contactSlice.reducer
