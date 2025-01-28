import "../styles/work.scss";

const Work: React.FC = () => {
  return (
    <div className="work-container">
      <div className="work-header-content">
        <h1 className="work-text">The Designs I've Crafted</h1>
        <p>
          Explore the designs I’ve had the pleasure of creating, where
          collaboration and expertise came together to bring my clients' ideas
          to life. Dive into these projects and get inspired by the innovative,
          custom solutions tailored to each unique vision.
        </p>
      </div>

      <div className="work-cards">
        <div className="w-card">
          <div className="image">
            <img src="/Intersect.svg" alt="" />
          </div>
          <div className="card-title">
            <h3>Project Name 01</h3>
            <span>link</span>
          </div>
        </div>

        <div className="w-card">
          <div className="image">
            <img src="/Intersect1.svg" alt="" />
          </div>
          <div className="card-title">
            <h3>Project Name 02</h3>
            <span>link</span>
          </div>
        </div>

        <div className="w-card">
          <div className="image">
            <img src="/Intersect2.svg" alt="" />
          </div>
          <div className="card-title">
            <h3>Project Name 03</h3>
            <span>link</span>
          </div>
        </div>

        <div className="w-card">
          <div className="image">
            <img src="/Intersect4.svg" alt="" />
          </div>
          <div className="card-title">
            <h3>Project Name 04</h3>
            <span>link</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
