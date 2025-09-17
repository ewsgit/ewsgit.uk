import React, { FC } from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import Text from "@yourdash/uikit/components/text/text";
import Button from "@yourdash/uikit/components/button/button";
import { useNavigate } from "react-router";
import styles from "./About.module.scss";
import Heading from "@yourdash/uikit/components/heading/heading";
import Link from "@yourdash/uikit/components/link/link";
import Flex from "@yourdash/uikit/components/flex/flex";

const AboutPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader title={"About Me"} />
      <div className={styles.main}>
        <Heading level={2} text={"Hiya 👋, Im Ewsgit"} />
        <Text text={"I'm a UK based hobbyist web developer"} />
        {/*<Text text={"I work on a few projects, such as YourDash and it's various applications"}/>*/}
        <Button
          onClick={() => {
            navigate("/projects");
          }}
          text={"View all of my projects here"}
        />
        <Heading level={2} text={"Socials"} />
        <Flex direction={"row"}>
          <Text text={"Email:"} />
          <Link to={"mailto:ewsgit@ewsgit.uk"} text={"ewsgit@ewsgit.uk"} />
        </Flex>
        <Flex direction={"row"}>
          <Text text={"Github:"} />
          <Link to={"https://github.com/ewsgit"} text={"Ewsgit"} />
        </Flex>
      </div>
    </>
  );
};

export default AboutPage;
