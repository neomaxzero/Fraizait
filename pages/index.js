import React from 'react'
import css from 'next/css'

export default () => (
  <div className={style}>
    Hello world
  </div>
)

const style = css({
  background: 'red',
  ':hover': {
    background: 'gray'
  },
  '@media (max-width: 600px)': {
    background: 'blue'
  }
})
