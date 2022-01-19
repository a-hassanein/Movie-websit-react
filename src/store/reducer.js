const INITIAL_STATE = {
    favPage : [],
    count: 0,
  }
  
  
  export default function MovieReducer(state = INITIAL_STATE , action){
  
  
    switch(action.type){
      case "ADD_TO_FAV":
        return {
          ...state,
          favPage: [...state.favPage ,action.movieId],
          count : state.count + 1
        }
       case "DEL_FROM_FAV":
         return {
           ...state,
           favPage: state.favPage.filter((movie)=> movie !== action.movieId) ,
           count : state.count -1
         }  
      default: 
        return state
    }
  
  
  
  
  }
  