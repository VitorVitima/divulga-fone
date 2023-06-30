import { useState } from "react";
import "./loading.css";
import NotFound from "./notFound";
function Loading() {
  const [load, setLoad] = useState(true);
  function determinante() {
    if (load) {
      setTimeout(()=>{
        setLoad(false)
      }, 1500)
      return (
        <div id="loading">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </div>
      );
    } else if(!load){
      return <NotFound determinante={window.location.pathname == '/' ? 2 : 1}></NotFound>
    }
  }
  return (
    <>
      {determinante()}
    </>
  );
}
export default Loading;
