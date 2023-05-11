```jsx
import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  function countHigher() {
    setCount(count + 1);
  }

  return <p onClick={countHigher}>{count}</p>;
}
```
