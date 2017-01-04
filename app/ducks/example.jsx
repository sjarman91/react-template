/* -----------------    ACTIONS     ------------------ */
const UPDATE = 'UPDATE'
const CLEAR = 'CLEAR'

/* ------------   ACTION CREATORS     ----------------- */

export const exampleUpdate = () => ({
  type: UPDATE
})

/* -------------       REDUCER     ------------------- */

const reducer = (state = 'you have not clicked udpate.', action) => {
  switch (action.type){
    case UPDATE:
        return 'you clicked update!'

    default:
        return state;
    }
};


export default reducer
