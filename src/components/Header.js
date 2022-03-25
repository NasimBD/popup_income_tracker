import React from 'react'

export const Header = ({net}) => {
  return (
    <div id="tracker-header">
        <h1>Income Tracker</h1>
        <span id="net">&pound;{net}</span>
    </div>
  )
}
