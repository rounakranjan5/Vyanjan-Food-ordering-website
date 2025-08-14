import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  let err=useRouteError();
  console.log(err);
  return (
    <div>
        <h1>oops! something went wrong</h1>
        <h2>{err.status} : {err.statusText}</h2>
        {/* <h3>{err.data}</h3> */}
    </div>
  )
}

export default ErrorPage