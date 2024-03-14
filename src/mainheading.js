import { TypeAnimation } from "react-type-animation";

const MainHeading = () => {
  return (
    <TypeAnimation
      sequence={[
        "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.", // Types 'One'
        1000, // Types 'Three' without deleting 'Two'
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="block"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "5em",
        textShadow:
          "-1px -1px 0 rgb(255, 0, 0), 1px -1px 0 rgb(255, 0, 0), -1px 1px 0 rgb(255, 0, 0), 1px 1px 0 rgb(255, 0, 0)",
        display: "inline-block",
        color: "black",
      }}
    />
  );
};
export default MainHeading;
