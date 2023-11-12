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
            News
          </a>
          <a onClick={() => this.closeMenu()} href="/#penetration-tests" className={styles.menuEntry}>
            Penetration Testing
          </a>
          <a onClick={() => this.closeMenu()} href="/#software-engineering-section" className={styles.menuEntry}>
            Custom Software
          </a>
          <a onClick={() => this.closeMenu()} href="/quote" className={[styles.contact, styles.menuEntry].join(" ")}>
            Contact
          </a>
        </Menu>
    }
}

export default Slider