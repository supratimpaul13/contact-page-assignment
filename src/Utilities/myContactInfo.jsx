import "boxicons";

const MyContactInfo = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">
              <a
                href="https://www.instagram.com/thanda_samosa_13/"
                target="_blank"
              >
                <box-icon
                  type="logo"
                  name="instagram"
                  color="#ffffff"
                ></box-icon>
              </a>
            </div>
            <div className="description">
              <h4>Phone</h4>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/supratim-paul-050548211/"
                target="_blank"
              >
                <box-icon
                  name="linkedin"
                  type="logo"
                  color="#ffffff"
                ></box-icon>
              </a>
            </div>
            <div className="description">
              <h4>LinkedIn</h4>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">
              <a href="https://github.com/supratimpaul13" target="_blank">
                <box-icon name="github" type="logo" color="#ffffff"></box-icon>
              </a>
            </div>
            <div className="description">
              <h4>Github</h4>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">
              <a
                href="https://my-portfolio-one-rho-33.vercel.app/"
                target="_blank"
              >
                <box-icon name="code-alt" color="#ffffff"></box-icon>
              </a>
            </div>
            <div className="description">
              <h4>Portfolio</h4>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default MyContactInfo;
