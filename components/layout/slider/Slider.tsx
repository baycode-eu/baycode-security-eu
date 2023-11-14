import React from "react"
import { slide as Menu } from 'react-burger-menu'
import styles from "../header/header.module.scss";

class Slider extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          isOpen: false
        }
    }
    showSettings(event) {
        event.preventDefault()
    }

    handleStateChange (state) {
        this.setState({isOpen: state.isOpen})
    }
    
    closeMenu () {
        this.setState({isOpen: false})
    }

    toggleMenu (state) {
        this.setState({isOpen: !state.isOpen})
  }
    render() {
        return <Menu 
            {...this.props}
            onStateChange={(state) => this.handleStateChange(state)}
            isOpen={this.state.isOpen}
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