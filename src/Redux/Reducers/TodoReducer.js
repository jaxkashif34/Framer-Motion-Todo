import { ACTIONS } from "../Actions/actions";
const initialState = {
  data: [],
};
export const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TODO:
      return {
        data: [
          ...state.data,
          {
            id: payload.uid,
            todo: payload.todo,
          },
        ],
      };

    case ACTIONS.DELETE_TODO:
      return {
        data: state.data.filter((item) => item.id !== payload.id),
      };

    case ACTIONS.DELETE_All:
      return {
        data: [],
      };

    default:
      return state;
  }
};
