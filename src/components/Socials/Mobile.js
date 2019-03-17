import React, { useState, useEffect, useRef } from "react"
import { StyledMobile } from "./styled"

import Icon from "./Icon"

const socials = ["facebook", "instagram", "twitter", "github", "medium"]

const Mobile = () => {
  let [count, setCount] = useState(0)

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1)
  }, 5000)

  const index = count % socials.length
  const secondIndex = (count + 1) % socials.length

  return (
    <StyledMobile key={index}>
      <ul>
        <li>
          <Icon name={socials[index]} />
        </li>
        <li>
          <Icon name={socials[secondIndex]} />
        </li>
      </ul>
    </StyledMobile>
  )
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default Mobile
