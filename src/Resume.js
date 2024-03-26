import resume from "./assets/resume.pdf";

export default function Resume() {
  const divStyle = {
    height: "100vh",
  };

  return (
    <div style={divStyle}>
      <object
        data={resume}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
}
