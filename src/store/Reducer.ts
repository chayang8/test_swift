import { createSlice ,PayloadAction} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

interface Idno {
    idnoch1: string;
    idnoch2: string;
    idnoch3: string;
    idnoch4: string;
    idnoch5: string;
}

export interface DataUser  {
    uuid?:String;
    title:String;
    name:String;
    surname:String;
    birth:String;
    nationality:String;
    idno:Idno;
    sex:String;
    telephone:String;
    passport:String;
    expectsalary:String;
    telephonePrefix: string; 
    telephonemid: string;
} 


const initialState: DataUser[] = [];
interface State {
    formData: DataUser[];
  }
  
//   const initialState: State = {
//     formData: [],
//   };

// localStorage.removeItem('formData');
const storedData: DataUser[] = JSON.parse(localStorage.getItem('formData') || '[]');
const formSlice = createSlice(
    {
     name:"form",
     initialState:storedData,
     reducers:{
        
        setFormData: (state, action: PayloadAction<DataUser>) => {
            const newRecord = { ...action.payload, uuid: uuidv4() };
            state.push(newRecord);
            localStorage.setItem('formData', JSON.stringify(state));
          },
        clearFormData: (state) => {
        state.length = 0; 
        localStorage.removeItem('formData');
        },
        deleteData: (state, action: PayloadAction<string>) => {
            const delState =  state.filter(record => record.uuid !== action.payload);
            localStorage.setItem('formData', JSON.stringify(delState));
            return delState;
        },
        
    
     }
    }
)


export const { setFormData, clearFormData ,deleteData} = formSlice.actions;

export default formSlice.reducer 