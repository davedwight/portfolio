import resume from "../../src/DaveDwightResume.pdf";

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
            >
                <p>
                    Alternative text - include a link{" "}
                    <a href="http://africau.edu/images/default/sample.pdf">
                        to the PDF!
                    </a>
                </p>
            </object>
        </div>
    );
}
