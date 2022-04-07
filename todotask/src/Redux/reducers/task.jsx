const initialState = {
    data: [],
  };
  
  const addTask = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return {
          ...state,
          data: [...state.data, action.payload],
        };
        case "SELECT":
          const  id  = action.id;
          const data = state.data.map((list,index) =>
            index === id ? { ...list, completed: !list.completed } : list
          );
          return { data };
        case "REMOVE":
          return {
            ...state,
            data: [...state.data.filter((todo,index) => index !== action.id)],
          };
        case "CLEAR":
          
      default:
        return state;
    }
  };
  
  export default addTask;