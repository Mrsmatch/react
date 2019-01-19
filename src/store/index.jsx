import {createStore} from 'redux'
 const defaultState ={
    list:[]
 }
 const Reducer=(state=defaultState,action)=>{
     const {type,payload}=action;
     switch(type){
         case 'updata':
            return {...state,list:[...payload]}
        default:
            return state;
     }
 }
 const store=createStore(Reducer)
 export default store;
