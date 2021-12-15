import { useRef } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { CustomizedButtons } from "./Button";
import SVG from "../Assets/todo.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../Redux/Actions/actions";
import { motion } from "framer-motion";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const reducer = useSelector((state) => state.reducer);
  const Constrainsref = useRef(null);
  const dispatch = useDispatch();
  const uid = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };
  const dispatchHandler = () => {
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: todo,
        uid: uid(),
      },
    });
  };
  const handleDelete = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        id: id,
      },
    });
  };

  const handleRemove = () => {
    dispatch({
      type: ACTIONS.DELETE_All,
    });
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-600 overflow-hidden">
      <div className="min-h-screen w-full overflow-hidden">
        <div className="relative">
          <div className="fixed bg-gradient-to-tr  from-[#ff512f] to-[#dd2476] h-96 w-96 -top-24 left-52 rounded-full"></div>
          <div className="fixed bg-gradient-to-tr from-[#7b4397] to-[#dc2430] h-96 rounded-full right-52 w-96 -bottom-24"></div>
        </div>
        <div className="absolute w-full min-h-screen">
          <div className="w-11/12 mx-auto min-h-screen" ref={Constrainsref}>
            <motion.div
              drag
              dragConstraints={Constrainsref}
              className="relative md:w-2/4 lg:w-2/5 mx-auto backdrop-blur shadow-md rounded-3xl cursor-grab"
            >
              <div className="h-full py-3">
                <motion.img
                  src={SVG}
                  alt=""
                  className="mx-auto h-24 w-24"
                  style={{ cursor: "grab" }}
                  drag="x"
                  dragConstraints={{ left: -200, right: 200 }}
                />
              </div>
              <div className="backdrop-blur-sm">
                <div className="py-2">
                  <h1 className="text-3xl font-medium text-center tracking-wide text-gray-100 ">
                    Add your List Here
                  </h1>
                </div>
                <div className="0 w-2/4 flex justify-center rounded-xl items-center mx-auto mt-4 px-1">
                  <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="text-gray-100 bg-transparent text-lg h-10 w-full rent rounded-xl focus:outline-none border-none pl-4"
                    placeholder="Enter you Todo"
                  />
                  <motion.div whileHover={{ rotate: 180, scale: 1.1 }}>
                    <FaPlus
                      className="text-2xl text-gray-200 cursor-pointer hover:text-green-400"
                      onClick={() => {
                        dispatchHandler();
                        setTodo("");
                      }}
                    />
                  </motion.div>
                </div>
                <div className=" max-h-80 mt-4 mx-3 space-y-1 overflow-y-auto ">
                  {reducer.data.map((item) => {
                    const { id, todo } = item;
                    return (
                      <div
                        className=" flex justify-between items-center p-4 0 rounded-xl"
                        key={id}
                      >
                        <h2 className="text-xl tracking-wide text-gray-100">
                          {todo}
                        </h2>
                        <motion.div
                          className="flex  justify-center items-center"
                          whileHover={{ scale: 1.1, translateY: -5 }}
                        >
                          <FaTrashAlt
                            className="text-2xl hover:text-red-500 text-white cursor-pointer"
                            onClick={() => handleDelete(id)}
                          />
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className=" flex justify-center items-center py-2 mx-3"
                  onClick={handleRemove}
                >
                  <CustomizedButtons text="All Clear" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
