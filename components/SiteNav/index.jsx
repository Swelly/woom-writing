import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='blog-nav'>
              <ul>
                <li>
                  <Link to="/" className={ location.pathname === prefixLink('/') ? "current" : null }> Entries
                  </Link>
                </li>
                <li>
                  <Link to="/me/" className={ location.pathname === prefixLink('/me/') ? "current" : null }> Me
                  </Link>
                </li>
                <li>
                  <Link to="/hello/" className={ location.pathname === prefixLink('/hello/') ? "current" : null }> Hello
                  </Link>
                </li>
              </ul>
            </nav>
            );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav