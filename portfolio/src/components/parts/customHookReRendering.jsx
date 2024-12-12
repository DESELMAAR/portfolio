import React from "react";

function useForceUpdate() {
    const [, setToggle] = React.useState(false)
    return () => setToggle(toggle => !toggle)
  }

  export default useForceUpdate;