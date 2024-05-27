import { FC } from "react"
import PageHeader from "../components/pageHeader/PageHeader"
import Text from "@yourdash/uikit/components/text/text"
import Button from "@yourdash/uikit/components/button/button"
import { useNavigate } from "react-router"
import styles from "./About.module.scss"

const AboutPage: FC = () => {
  const navigate = useNavigate()

  return <>
    <PageHeader title={"About Me"} />
    <div className={styles.main}>
      <Text text={"Hiya 👋, Im Ewsgit"} />
      <Text text={"I'm a UK based hobbyist web developer"} />
      <Text text={"I work on a few projects, such as YourDash and it's various applications"} />
      <Button
        onClick={() => {
          navigate("/projects")
        }}
        text={"View all of my projects here"}
      />
    </div>
  </>
}

export default AboutPage