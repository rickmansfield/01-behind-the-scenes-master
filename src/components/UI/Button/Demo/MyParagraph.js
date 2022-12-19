import React from 'react'

function MyParagraph(props) {
  console.log('MyParagraph RUNNING', props);
  return (
    <div>
      <p>{props.children}</p>
    </div>
  )
}

export default MyParagraph