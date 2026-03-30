import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h2>Home Page</h2>

      <p>
        Welcome to my site! My name is Alanah and I am a junior here at UNC Charlotte studying Computer Science with a focus on Human-Computer Interaction.
      </p>

      <p>
        <a href="/itis3135/">Click here to go to my ITIS 3135 page</a>
      </p>

      <h3>Introduction Page</h3>

      <p>
        <Link to="/introduction">Click Here</Link>
      </p>
    </main>
  );
}

export default Home;