import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import SiteNav from '../SiteNav'
import SiteLinks from '../SiteLinks'
import './style.css'
import profilePic from '../../pages/moon.png'

class SiteSidebar extends React.Component {
    render() {
        const {location, children} = this.props
        const isHome = location.pathname === prefixLink('/')

        let header = (
        <header>
        {/*
          <Link style={ {textDecoration: 'none',  borderBottom: 'none', outline: 'none'} } to={ prefixLink('/') }>
            <img src={prefixLink(profilePic)} width='115' height='115' />
          </Link>
        */}
          <h1 className='site-title'>
            <Link style={ {textDecoration: 'none',  borderBottom: 'none', color: 'inherit'} } to={ prefixLink('/') }> { config.siteTitle } </Link>
          </h1>
          <p>
            { config.siteDescr }
          </p>
        </header>
        )

        return (
            <div className='sidebar'>
              <div className='sidebar-inner'>
                <div className='blog-details'>
                  <header>
                    { header }
                  </header>
                </div>
                <div className='blog-options'>
                  <SiteNav {...this.props}/>
                  <footer>
                   {/* <SiteLinks {...this.props}/>
                    <p className='copyright'>
                      &copy; All rights reserved.
                    </p>
                  */}
                  </footer>
                </div>
              </div>
            </div>
            );
    }
}

SiteSidebar.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteSidebar