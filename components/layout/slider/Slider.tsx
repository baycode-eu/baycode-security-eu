import React from "react"
import { slide as Menu } from 'react-burger-menu'
import styles from "../header/header.module.scss";

class Slider extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
    }
    showSettings(event) {
        // event.preventDefault()
    }
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
  }
    render() {
        return <Menu 
            {...this.props}
            onStateChange={(state) => this.handleStateChange(state)}
        >
          <a onClick={() => this.closeMenu()} href={process.env.BLOG} className={styles.menuEntry}>
            Blog
          </a>
          <a onClick={() => this.closeMenu()} href="/workshops" className={styles.menuEntry}>
            Workshops
          </a>
          <a onClick={() => this.closeMenu()} href="/proactive-defense-threat-hunting-soar" className={styles.menuEntry}>
            Threat Hunting & SOAR
          </a>          
          <a onClick={() => this.closeMenu()} href="/penetration-testing" className={styles.menuEntry}>
            Penetration Testing
          </a>
          <a onClick={() => this.closeMenu()} href={process.env.SOLUTIONS} className={styles.menuEntry}>
            Custom Software
          </a>
          <a onClick={() => this.closeMenu()} href={process.env.DOMAIN_UP} className={styles.menuEntry}>
            Home
          </a>
          <a onClick={() => this.closeMenu()} href="/contact" className={[styles.contact, styles.menuEntry].join(" ")}>
            Contact
          </a>
        </Menu>
    }
}

export default Slider