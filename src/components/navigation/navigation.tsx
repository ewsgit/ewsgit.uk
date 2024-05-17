/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import Box from "@yourdash/uikit/components/box/box";
import Flex from "@yourdash/uikit/components/flex/flex";
import Heading from "@yourdash/uikit/components/heading/heading";
import Image from "@yourdash/uikit/components/image/image";
import Link from "@yourdash/uikit/components/link/link";
import Text from "@yourdash/uikit/components/text/text";
import TextButton from "@yourdash/uikit/components/textButton/textButton";
import styles from "./navigation.module.scss";
import { FC } from "react";
import { Outlet, useNavigate } from "react-router";

const Navigation: FC<{ subtitle?: string }> = ({ subtitle }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box className={styles.navigationBar}>
        <Image
          src={"/plainLogo.png"}
          accessibleLabel={"Ewsgit"}
          className={styles.logo}
        />
        <Heading
          level={2}
          className={styles.title}
          text={"Ewsgit"}
        />
        <Heading
          className={styles.tld}
          level={4}
          text={".uk"}
        />
        <Heading
          level={2}
          className={styles.subtitle}
          text={subtitle ? `/ ${subtitle}` : ""}
        />
        <TextButton
          className={styles.link}
          text={"Home"}
          onClick={() => {
            navigate("/");
          }}
        />
        <TextButton
            className={styles.link}
            text={"About"}
            onClick={() => {
              navigate("/about");
            }}
        />
        <TextButton
          className={styles.link}
          text={"Projects"}
          onClick={() => {
            navigate("/projects");
          }}
      />
      </Box>
      <Box
        level={1}
        className={styles.notice}
      >
        <Text text={"This site is a work-in-progress... "} />
      </Box>
      <Outlet />
      <Box className={styles.footer}>
        <Flex
          direction={"row"}
          className={styles.license}
        >
          <Text text={"©2024 Ewsgit"} />
          <div className={styles.dot}/>
          <Link
            to={"https://ewsgit.mit-license.org"}
            text={"Licensed under the MIT License"}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Navigation;
