import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">  

        <p style={{ textAlign: "justify" }}>
  Feel free to reach out to me by filling out the form below. I’d love to connect!
</p>

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <form
    action="https://formsubmit.co/rohankini.rk18@gmail.com"
    method="POST"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '500px',
      width: '100%',
      padding: '2rem',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}
  >
    {/* Honeypot field to prevent spam */}
    <input type="hidden" name="_captcha" value="false" />

    {/* Redirect after submission */}
    <input type="hidden" name="_next" value="https://www.rohantkini.in/thank-you" />

    <h2 style={{ textAlign: 'center', color: '#6b21a8', fontWeight: 'bold', fontSize: '1.5rem' }}>
      Contact Me
    </h2>

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="form-control"
      style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="form-control"
      style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
    />

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      required
      className="form-control"
      style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
    />

    <textarea
      name="message"
      rows="5"
      placeholder="Your Message"
      required
      className="form-control"
      style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
    ></textarea>

    <button
      type="submit"
      className="btn btn-primary"
      style={{
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: '#6b21a8',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
  </form>
</div>
<br /><br />


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohan Kini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
