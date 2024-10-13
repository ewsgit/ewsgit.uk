import { FC } from "react"
import PageHeader from "../components/pageHeader/PageHeader"
import styles from "./Projects.module.scss"
import Card from "@yourdash/uikit/components/card/card"
import Image from "@yourdash/uikit/components/image/image"
import Heading from "@yourdash/uikit/components/heading/heading"
import Text from "@yourdash/uikit/components/text/text"
import Button from "@yourdash/uikit/components/button/button"

const projects: {
  id: string,
  displayName: string,
  description: string,
  links: { source?: string, site?: string, download?: string },
  iconUrl?: string
}[] = [
  {
    id: "yourdash",
    displayName: "YourDash",
    description: "Your digital home, edit and view documents, write code and sync your files across all devices with mobile and desktop integrations",
    links: {
      source: "https://github.com/yourdash/yourdash",
      site: "https://yourdash.ewsgit.uk"
    },
    iconUrl: "/assets/projects/yourdash/icon.svg",
  },
  {
    id: "ewsgituk",
    displayName: "Ewsgit.uk",
    description: "This website",
    links: {
      source: "https://github.com/ewsgit/ewsgit.uk",
      site: "https://ewsgit.uk"
    },
    iconUrl: "/plainLogo.png",
  },
  {
    id: "justlikemac",
    displayName: "JustLikeMac",
    description: "This project aims to make Linux & Windows feel and look like MacOS",
    links: {
      source: "https://github.com/justlikemac/justlikemac",
      // site: "https://justlikemac.ewsgit.uk"
    },
    iconUrl: "/plainLogo.png",
  }
]

const ProjectsPage: FC = () => {
  return <>
    <PageHeader title={"Projects"}/>
    <div className={styles.projectGrid}>
      {projects.map(project => {
        return <Card className={styles.project} actionsClassName={styles.actions} actions={<>
          {project.links.site &&
              <Button onClick={() => {
                window.location.href = project.links.site || "/projects"
              }}
                      text={"Site"}
              />
          }
          {project.links.source &&
              <Button onClick={() => {
                window.location.href = project.links.source || "/projects"
              }}
                      text={"Source"}
              />
          }
          {project.links.download &&
              <Button onClick={() => {
                window.location.href = project.links.download || "/projects"
              }}
                      text={"Download"}
              />}
        </>} containerClassName={styles.projectContainer}>
          <section className={styles.header}>
            <Image className={styles.logo} src={project.iconUrl || "/plainLogo.png"} accessibleLabel="Project Icon"/>
            <Heading className={styles.displayName} level={2} text={project.displayName}/>
          </section>
          <Text text={project.description}/>
        </Card>
      })}
    </div>
  </>
}

export default ProjectsPage
