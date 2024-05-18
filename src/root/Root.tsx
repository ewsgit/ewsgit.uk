import { FC } from "react";
import styles from "./Root.module.scss"
import PageHeader from "../components/pageHeader/PageHeader";

const Root: FC = () => {
  return (
    <>
      <PageHeader large={true} title={"Coming Soon..."} />
    </>
  )
}

export default Root
