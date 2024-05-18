import { FC, memo } from "react";
import styles from "./PageHeader.module.scss"
import Heading from "@yourdash/uikit/components/heading/heading";
import clippy from "@yourdash/shared/web/helpers/clippy";

const PageHeader: FC<{ title: string; large?: boolean }> = ({ title, large }) => {
  return <div className={clippy(styles.component, large && styles.large)}>
    <Heading level={1} className={styles.title} text={title} />
  </div >
}

export default memo(PageHeader)