import "../styles/work.scss";

const Work: React.FC = () => {
  return (
    <div id="work-container">
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
            <img src="/Intersect.svg" loading="lazy" alt="Intersect Design Illustration" />
          </div>
          <div className="card-title">
            <h3>Project Name 01</h3>
            
          </div>
        </div>

        <div className="w-card">
          <div className="image">
            <img src="/Intersect1.svg" loading="lazy" alt="Intersect Design Illustration" />
          </div>
          <div className="card-title">
            <h3>Project Name 02</h3>
          </div>
        </div>

        <div className="w-card">
          <div className="image">
            <img src="/Intersect2.svg" loading="lazy" alt="Intersect Design Illustration" />
          </div>
          <div className="card-title">
            <h3>Project Name 03</h3>
          </div>
        </div>

        <div className="w-card">
          <div className="image">
            <img src="/Intersect4.svg" loading="lazy" alt="Intersect Design Illustration" />
          </div>
          <div className="card-title">
            <h3>Project Name 04</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
