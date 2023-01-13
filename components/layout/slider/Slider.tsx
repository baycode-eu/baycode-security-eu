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
        event.preventDefault()
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }
    
    closeMenu () {
        this.setState({menuOpen: false})
    }

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
          <a onClick={() => this.closeMenu()} href="/proactive-defense-soar" className={styles.menuEntry}>
            SOAR
          </a>          
          <a onClick={() => this.closeMenu()} href="/penetration-testing" className={styles.menuEntry}>
            Penetration Testing
          </a>
          <a onClick={() => this.closeMenu()} href={'/custom-software'} className={styles.menuEntry}>
            Custom Software
          </a>
          <a onClick={() => this.closeMenu()} href="/contact" className={[styles.contact, styles.menuEntry].join(" ")}>
            Get a Quote
          </a>
        </Menu>
    }
}

export default Slider