1. What causes the `<ChildComponent/>` to re-render each time the _ADD_ button is clicked?

_React components automatically re-render whenever there is a change in their state or props. A simple update of the state, from anywhere in the code, causes all the User Interface (UI) elements to be re-rendered automatically._

2. How could `useMemo()` optimize a web application?

_`useMemo()` returns a memoized value. Memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. So using `useMemo()` can save time and space allocations for a web application_

3. How did `useMemo` affect this web application?

_It is only rendered once. When the parent component's counter is updated, the child component is no longer rendered multiple times. It is only rendered once. _
4. Describe what you notice in the developer console. Share your opinion on whether this is good or bad for the web application?
_Each time the parent component <App/> re-renders, then the <ChildComponent/> re-renders AND another fetch request is made called even though the child component is not updating. This could produce negative outcomes for the app because needless requests are being made from the server. For some apps, this could cause an infinite loop situation, timeout errors, or other challenges with the app._

5. How could `useCallback()` optimize a web application?

_useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate)._