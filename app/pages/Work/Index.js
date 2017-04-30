/* React */
import React from 'react';

/* Firebase */
import fbRef from '../../config/Firebase';

/* My components */
import Loader from '../../components/loader/Loader';
import Projects from '../../components/work/Projects';

/* Stylesheet */
import './work.scss';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioData: [],
      loading: true
    };
  }

  componentDidMount() {
    const portfolioData = fbRef.child('work');

    portfolioData.once('value', (snap) => {
      this.setState({
        portfolioData: snap.val(),
        loading: false
      });
    });
  }

  render() {
    let portfolioData;
    const portfolio = this.state.portfolioData;

    if (this.state.loading === false) {
      portfolioData = (
        <div>

          <h1>{'{ Work }'}</h1>

          <Projects portfolio={portfolio} />

        </div>
      );
    } else {
      portfolioData = (
        <Loader />
      );
    }

    return (
      <section className="work-page">
        <div className="container">
          {portfolioData}
        </div>
      </section>
    );
  }
}

export default Work;