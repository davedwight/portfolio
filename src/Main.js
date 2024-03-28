import resume from "./assets/resume.pdf";

export default function Main() {
  return (
    <>
      <div>
        <h1 className="title">Dave Dwight</h1>
        <p>
          I’m a Software Engineer currently working on serverless data
          processing systems and full stack applications for clients at CapTech
          Ventures. I have experience in product and operations at high growth,
          venture backed companies, leading teams that have brought new products
          to market in the US and abroad. I’m passionate about building software
          for the physical world, novel educational systems, and international
          development.
        </p>
        <p>
          Want to work with me? Reach me at{" "}
          <a href="mailto:dpdwight@gmail.com">dpdwight@gmail.com</a>
        </p>
        <p>
          View my LinkedIn{" "}
          <a href="https://www.linkedin.com/in/davedwight/">here</a>
        </p>
        <p>
          View my resume{" "}
          <a href={resume} target="_blank" rel="noreferrer">
            here
          </a>
        </p>
      </div>
    </>
  );
}
