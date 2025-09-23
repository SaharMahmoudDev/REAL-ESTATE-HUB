import React, { useCallback } from 'react'

const ScrollInTo =() => {
    const section = document.getElementById("result-section");

    section?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }

export default ScrollInTo