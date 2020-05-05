import React from 'react'
import './Animals.css'

export default function Animals(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Animals', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}