import React, { useCallback } from 'react'

const ScrollInTo =() => {
    const section = document.getElementById("result-section");

    section?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

//  const el = document.getElementById(section);
  // if (!section) return;
  // انتظري frame علشان يتثبت الـ DOM بعد تغيير الصفحة
  // requestAnimationFrame(() => {
  //   section.scrollIntoView({ behavior: "smooth", block: "start" });
  // });

          }

export default ScrollInTo