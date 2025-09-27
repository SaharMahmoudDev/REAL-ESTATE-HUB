import React from 'react'

const ScrollInTo =(sectionName) => {
    const section = document.getElementById(sectionName);

    section?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

          }

export default ScrollInTo