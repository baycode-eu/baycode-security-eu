import { Button } from "components/ui/atoms/button/Button"
import "react"
import styles from "./scroll-button.module.scss"

export default (props) => <Button class={`${styles.scrollButton} primary`} scroll>Go up</Button>
