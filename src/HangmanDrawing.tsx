const HEAD = (
  <div
    style={{
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "100%",
      border: ".313rem solid white",
      position: "absolute",
      top: "1.5rem",
      right: "1.5rem",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: ".313rem",
      height: "3.25rem",
      background: "white",
      position: "absolute",
      top: "3.5rem",
      right: "2.5rem",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "2.5rem",
      height: ".313rem",
      background: "white",
      position: "absolute",
      top: "5rem",
      right: 0,
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "2.5rem",
      height: ".313rem",
      background: "white",
      position: "absolute",
      top: "5rem",
      right: "2.75rem",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "3.5rem",
      height: ".313rem",
      background: "white",
      position: "absolute",
      top: "6.5rem",
      right: "-.75rem",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "3.5rem",
      height: ".313rem",
      background: "white",
      position: "absolute",
      top: "6.5rem",
      right: "2.5rem",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "1.5rem",
          width: ".313rem",
          background: "white",
          position: "absolute",
          top: 0,
          right: "2.5rem",
        }}
      />
      <div
        style={{
          height: ".313rem",
          width: "5rem",
          background: "white",
          marginLeft: "3rem",
        }}
      />
      <div
        style={{
          height: "11rem",
          width: ".313rem",
          background: "white",
          marginLeft: "3rem",
        }}
      />

      <div style={{ 
        height: ".313rem", 
        width: "10.625rem", 
        background: "white" 
        }} />
    </div>
  );
}
