import Todo from "./Components/Todo";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
export const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
