
export const cardVariants = (i) => ({
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
    // exit:{
    //   opacity: 0,
    // x: 0,
    // }
  },
});

export const layoutVariants = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  viewport: { once: true, amount: 0.3 },
};
