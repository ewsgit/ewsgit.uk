import { FC } from "react";
import Heading from "@yourdash/uikit/components/heading/heading.tsx"
import styles from "./Root.module.scss"

const Root: FC = () => {
  return (
    <div className={styles.page}>
      <Heading className={styles.title} text={"Coming Soon..."} />
    </div>
  )
}

export default Root
