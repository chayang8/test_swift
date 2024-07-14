import { createSlice ,PayloadAction} from '@reduxjs/toolkit'
import { DataUser } from './Reducer';

// const initialState: DataUser[] =  []
const storedData: DataUser[] = []
const editUser = createSlice(
    { 
     name:"edituser",
     initialState:storedData,
     reducers:{
         editData: (state, action: PayloadAction<DataUser>) => {
            console.log(action)
            console.log("action.payload:", action.payload);
            const foundIndex = state.findIndex(record => record.uuid === action.payload.uuid);
            if (foundIndex !== -1) {
                state.splice(0, state.length);
                state[foundIndex] = { ...action.payload };
              } else {
                state.splice(0, state.length);
                state.push({ ...action.payload });
              }
         },
         updateData: (state, action: PayloadAction<DataUser>) => {
            console.log(action.payload.uuid)
            let localStorageData: DataUser[] = JSON.parse(localStorage.getItem('formData') || '[]');
            const foundIndex = localStorageData.findIndex(record => record.uuid === action.payload.uuid);
            if (foundIndex !== -1) {
                localStorageData[foundIndex] = { ...action.payload };
                state[foundIndex] = { ...action.payload };
                localStorage.setItem('formData', JSON.stringify(state));
            } else {
                console.log("Data not found for update");   
            }
            localStorage.setItem('formData', JSON.stringify(localStorageData));
            window.location.reload();
          },
         
     }}
 
 )

 export const { editData,updateData } = editUser.actions
 export default editUser.reducer 