export function Tile({ content: Content, flip, state }) {
  switch (state) {
    case "start":
      return (
        <Back
          className="inline-block h-20 w-5/6 rounded-lg bg-indigo-300 text-center"
          flip={flip}
        />
      );
    case "flipped":
      return (
        <Front className="flex flex-col justify-center  items-center h-20 w-5/6 bg-indigo-600 rounded-lg">
          <Content
            style={{
              display: "inline-block",
              width: "75%",
              height: "75%",
              verticalAlign: "top",
              fill: "white",
            }}
          />
        </Front>
      );
    case "matched":
      return (
        <Matched className="flex flex-col h-20 w-5/6 justify-center items-center">
          <Content
            style={{
              display: "inline-block",
              width: "75%",
              height: "175%",
              verticalAlign: "top",
              fill: "#c7d2fe",
            }}
          />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
