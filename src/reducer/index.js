export const bookReducer = (state, action) => {
    switch (action.type) {
      case "MOVE_TO_READ": {
        const updatedBook = {...action.payload.book, state:action.payload.newState};
        return {
          ...state,
          [action.payload.fromState]: state[action.payload.fromState].filter((b) => b.id !== action.payload.book.id),
          read: [...state.read, updatedBook],
        };
      }
      case "MOVE_TO_CURRENTLY_READING": {
        // console.log(action.payload.fromState);
        const updatedBook = {...action.payload.book, state:action.payload.newState};
        return {
          ...state,
          [action.payload.fromState]: state[action.payload.fromState]?.filter((b) => b.id !== action.payload.book.id),
          
          currentlyReading: [...state.currentlyReading, updatedBook],
        };
      }
      case "MOVE_TO_WANTS_TO_READ": {
        const updatedBook = {...action.payload.book, state:action.payload.newState};
        return {
          ...state,
          [action.payload.fromState]: state[action.payload.fromState].filter((b) => b.id !== action.payload.book.id), 
          wantsToRead: [...state.wantsToRead, updatedBook],
        };
      }
      case "none":{
        const updatedBook = {...action.payload.book, state:action.payload.newState};
        return{
            ...state,
            [action.payload.fromState]: state[action.payload.fromState].filter((b) => b.id !== action.payload.book.id), 

        }
      }
      default:
        return {
          books: [],
          readBook: [],
          currentlyReadingBooks: [],
          wantsToRead: [],
        };
    }
  };
  