/* React */
import React from 'react';
import { Link } from 'react-router-dom';

/* My components */
import Iam from '../../components/home/Iam';

/* Stylesheet */
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <section className="home-page">

        <div className="container text-center">

          <h1 className="intro h2">
            Hi, I&#39;m <Link to="/about">Vijay</Link>.
          </h1>

          <Iam />

          <p className="intro">
            I am a full stack web developer, currently working in Stockholm, Sweden.
          </p>

          <p>
            <Link to="/work" className="btn">View_Work();</Link>
          </p>

          <br />

          <p className="comment">
            Built with React and Firebase.
          </p>

        </div>

      </section>
    );
  }
}

export default Home;
