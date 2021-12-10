import CONSTANTS from './constants';
const {ACTIONS} = CONSTANTS;

const reducer = (state, actions)=> {
  switch(actions.type){
    case ACTIONS.MENU_OPEN:{
      return{ 
        ...state,
        isMenuOpen:true
      }
    }
    case ACTIONS.MENU_CLOSE:{
      return{ 
        ...state,
        isMenuOpen:false
      }
    }
    default: return state;
  }
  
};
export default reducer;