const HEAD = (
  <div
    style={{
      width: "3.125rem",
      height: "3.125rem",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "3.125rem",
      right: ".75rem",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: ".625rem",
      height: "6.25rem",
      background: "black",
      position: "absolute",
      top: "7.5rem",
      right: "2.5rem",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "5rem",
      height: ".625rem",
      background: "black",
      position: "absolute",
      top: "9.375rem",
      right: "-2.5rem",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "5rem",
      height: ".625rem",
      background: "black",
      position: "absolute",
      top: "9.375rem",
      right: "3rem",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "7.5rem",
      height: ".625rem",
      background: "black",
      position: "absolute",
      top: "13.125rem",
      right: "-4.5rem",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "7.5rem",
      height: ".625rem",
      background: "black",
      position: "absolute",
      top: "13.125rem",
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
          height: "3.125rem",
          width: ".625rem",
          background: "black",
          position: "absolute",
          top: 0,
          right: "2.5rem",
        }}
      />
      <div
        style={{
          height: ".625rem",
          width: "7rem",
          background: "black",
          marginLeft: "6rem",
        }}
      />
      <div
        style={{
          height: "23rem",
          width: ".625rem",
          background: "black",
          marginLeft: "6rem",
        }}
      />

      <div style={{ height: ".625rem", width: "15.625rem", background: "black" }} />
    </div>
  );
}
