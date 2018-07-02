/**
 *   APP.REDUX.JS
 *   
 */

const ADD_GUN = '加';
const SUB_GUN = '减';


//reducers
export function counter(state=0,action){
    switch(action.type){
        case ADD_GUN:
            return state+1;
        case SUB_GUN:
            return state-1;
        default:
            return 10;
    }
}


//action
export function addGun(){
    return { type: ADD_GUN }
}

export function removeGun(){
    return { type: SUB_GUN }
}

//aysnc
export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}
