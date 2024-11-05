function About() {
  return (
    <div className="list-container">
      <div className="flex-container">
        <h1>About Us</h1>
        <div className="what-container">
          <h4>What we do</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
            lorem lectus. Aenean ac massa dictum, pellentesque est eget,
            fringilla arcu. Nullam a ipsum quis est dictum venenatis eget vitae
            justo. Suspendisse a faucibus libero.
          </p>
        </div>
        <div className="goals-container">
          <h4>Our Goals</h4>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Praesent tincidunt nisi quis leo iaculis
            vulputate. Aliquam est purus, tempus vitae commodo in, consequat in
            urna.
          </p>
        </div>
        <div className="who-container">
          <h4>Who we are</h4>
          <div className="contributors-container">
            <div className="contributor-1">
              <h6>Batu</h6>
              <img className="photo" src="src/assets/sample-photo1.jpg" />
              <p>
                Praesent et vehicula lacus. Praesent eget aliquet nisi. Aenean
                laoreet faucibus enim in vehicula. In a interdum velit, ac
                suscipit mauris.
              </p>
              <div className="logos">
                <img
                  className="github-logo"
                  src="src/assets/github-logo.webp"
                />
                <img
                  className="linkedin-logo"
                  src="src/assets/linkedin-logo.webp"
                />
              </div>
            </div>
            <div className="contributor-2">
              <h6>Olga</h6>
              <img className="photo" src="src/assets/sample-photo2.jpg" />
              <p>
                Praesent et vehicula lacus. Praesent eget aliquet nisi. Aenean
                laoreet faucibus enim in vehicula. In a interdum velit, ac
                suscipit mauris.
              </p>
              <div className="logos">
                <img
                  className="github-logo"
                  src="src/assets/github-logo.webp"
                />
                <img
                  className="linkedin-logo"
                  src="src/assets/linkedin-logo.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;