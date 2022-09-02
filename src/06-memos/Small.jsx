import {memo} from 'react';
export const Small = memo(({value}) => {
    console.log("me dibuje :(");
  return (
    <small>{value}</small>
  )
})
