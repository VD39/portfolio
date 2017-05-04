/* React */
import React from 'react';

class Iam extends React.Component {
  componentDidMount() {
    const items = ['\'Skilled\'', '\'Capable\'', '\'Experienced\''];
    const span = document.getElementById('list');

    let i = 0;
    const l = items.length;

    /**
     * Sets the i am on the home page.
     */
    const setIAm = () => {
      if (i < l) {
        const el = document.createElement('span');
        el.classList.add('item');
        el.innerText = items[i];
        span.appendChild(el);
        i += 1;
      } else {
        clearInterval(iterator);
      }
    };

    const iterator = setInterval(setIAm, 1000);
  }

  render() {
    return (
      <p className="h1">
        <span className="let">let </span>
        i_Am = [<span id="list" className="list" />];
      </p>
    );
  }
}

export default Iam;
