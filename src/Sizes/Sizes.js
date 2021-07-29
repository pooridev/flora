/* eslint-disable import/no-anonymous-default-export */
export default {
  up() {},
  down(size) {
    const Sizes = {
      xs: "575.98px",
      sm: "600px",
      md1: "700",
      md: "991.98px",
      lg: "1199.98px",
      xl: "1600px",
    };
    return `@media (max-width : ${Sizes[size]})`;
  },
};
