import React, { useEffect, useRef, useState } from "react";

const Hooks = () => {
    const focusPoint = useRef(null);
    const onClickHandler = () => {
      focusPoint.current.value =
        "The quick brown fox jumps over the lazy dog";
        focusPoint.current.focus();
};
   
  return (
  <div>
  <div>
    <button onclick="{onClickHandler}">
      ACTION
    </button>
  </div>
  <label>
    Click on the action button to 
    focus and populate the text.
  </label><br />
  <textarea ref="{focusPoint}" defaultValue={""} /></div>

  );
};
export default Hooks;
