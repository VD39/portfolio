/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* My components */
import Items from '../items/Items';

/**
 * returns view code link if there is a URL
 * @param {string} url
 * @param {string} title
 */
function viewCode(url, title) {
  if (url) {
    return <p><a className="function" href={url} target="_blank" rel="noopener noreferrer" title={`View ${title} code.`}>View code</a></p>;
  }
}

class Project extends React.Component {
  render() {
    return (
      <div className="row auto-clear">
        {

          this.props.work.reverse().map((object, index) => (

            <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

              <div className="body-wrapper">

                <h3 className="h4">
                  <a className="function bold" href={object.visitSiteUrl} target="_blank" rel="noopener noreferrer" title={`View ${object.name} site.`}>
                    {object.name}
                  </a>
                </h3>

                <div className="body">

                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: object.description
                      }}
                    />
                  </p>

                  <p className="list">Technologies Used: [
                    <Items arr={object.technologiesUsed} start="" end="" />
                    ]
                  </p>

                  {
                    viewCode(object.codeURL, object.name)
                  }

                </div>

              </div>

            </div>
          ))
        }
      </div>
    );
  }
}

Project.propTypes = {
  work: PropTypes.arrayOf(PropTypes.shape({
    visitSiteUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologiesUsed: PropTypes.array.isRequired,
    codeURL: PropTypes.string
  }))
};

export default Project;
