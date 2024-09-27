import {
  useRef,
  useReducer,
  useState,
  useCallback,
  createContext,
  useMemo,
} from "react";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "설거지하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "쓰레기 버리기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    // filter : 자바스크립트 배열의 내장 함수
    // 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환함
    // false면 버림
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext(); // 변하지 않는 값

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // 현재 id가 3개 있다.

  // mount 되었을 때만 딱 한 번 실행
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
