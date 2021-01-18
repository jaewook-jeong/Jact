function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  }
}

const element = React.createElement(
  "div",	  "div",
  { id: "foo" },
);