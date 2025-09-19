import { Repeat1 } from "lucide-react";

export const cardVariants = (i)=>({
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  },
  // exit: {
  //   opacity: 0,
  //   x: -80,
  //   transition: { duration: 0.4, delay: i * 0.5, ease: "easeIn" },
  // },
})

export const layoutVariants = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  // exit: { y: -100, opacity: 0 },
                  viewport:{ once: true, amount: 0.3 }

};
