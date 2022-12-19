import React from 'react'
import MyParagraph from './MyParagraph';

function DemoOutput(props) {
  console.log('DemoOutput RUNNING', props);
  return (
    <MyParagraph>{props.showParagraph ? 'This is new' : ""}</MyParagraph>
  )
}

export default React.memo(DemoOutput)

// React.memo() is a higher order function that takes a component as an argument and returns a new component. The memoized component will only re-render if the props change. If the props don't change, the component will not re-render. Therefore, the React.memo() function is a POTENTIAL performance optimization. But, it is not a guarantee that the component will not re-render. It is a guarantee that the component will not re-render if the props do not change. If the props do change, the component will re-render.Hence, one must consider the performance cost(s) associated with using it. If the child component is expensive to render, then it is worth it to use React.memo(). If the child component is cheap to render, then it is not worth it to use React.memo(). Because the cost also involves the fact that we are telling react when the MyParagraph component is evaluated to store a copy of the props and compare them. You are trading the performance cost of reevaluating the component for the performance cost of comparing props. Which cost is higher depends on the number of props and the complexity of the component and even the number of child components in the pedigree. So, it is not a one-size-fits-all solution. It is a potential solution that must be considered in the context of the application.By using the memoization at the root or parent you avoid rerendering the entire pedigree tree. But if the child is going to rerender because of chaning props "every time" then there is no reason to use memoization because in that case it's an extra step of saving the props for comparison "every" time. 

