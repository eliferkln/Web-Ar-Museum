import { createElement } from "react";
import type { NextPage, GetStaticProps } from "next";
import CardModel from "../components/card-model";
import { loadData } from "../lib/load-data";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import {
  Avatar,
  Box,
  Container,
  Heading,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import * as FontAwesome from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { IconContext } from "react-icons";

const Models = (props: any) => {
  const models = props.data.models;

  const displayModels = models.map((model: any, idx: any) => (
    <CardModel key={idx} model={model}></CardModel>
  ));
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 6 }}>
      {displayModels}{" "}
    </SimpleGrid>
  );
};

const Social = (props: any) => {
  const social = props.social;
  console.log(social);
  const iconName: keyof typeof FontAwesome = social.icon;

  const icon = createElement(FontAwesome[iconName], null);

  return (
    <Box px={2}>
      <IconContext.Provider
        value={{ color: "#c6c6da", className: "global-class-name" }}
      >
        <Link href={social.url}>
          <a>{icon}</a>
        </Link>
      </IconContext.Provider>
    </Box>
  );
};

export const Footer = () => (
  <div
    style={{
      backgroundColor: "#dddcde",
    }}
  >
    <Image
      src="images/footer-curve.svg"
      alt="Footer"
      className="w-full bg"
      loading="lazy"
      height={100}
      role="presentation"
      style={{ backgroundColor: "#dddcde", width: "100%" }}
    />

    <Container as="footer" role="contentinfo" py={{ base: "10", md: "12" }}>
      <Flex justify={"center"}>
        <Text fontSize="sm" color="subtle">
          <Link href="https://reactfiberportfoliowebsite.vercel.app/">
            <a style={{ fontSize: "18px", color: "#1a202c" }}>
              Designed & Developed by <b>Hanife Erkalan</b>
            </a>
          </Link>{" "}
          &copy; {new Date().getFullYear()}{" "}
        </Text>
      </Flex>
    </Container>
  </div>
);

const Socials = (props: any) => {
  const socials = props.data.artist.socials;
  const displaySocials = socials.map((social: any, idx: any) => (
    <Social key={idx} social={social}></Social>
  ));
  return (
    <Flex py={2} justifyItems={"center"}>
      {displaySocials}
    </Flex>
  );
};

const Home: NextPage = (props: any) => {
  return (
    <>
      <Box
        className={styles.main}
        px={[4, 4]}
        bg={useColorModeValue("#111827", "gray.100")}
      >
        <Flex justify={"center"} mt={0}>
          <Avatar
            size={"2xl"}
            src={props.data.artist.avatar}
            css={{
              border: "2px solid #aab0b9",
            }}
            bg={useColorModeValue("#d0d0d0", "gray.800")}
          />
        </Flex>

        <Box p={4}>
          <Box marginLeft={"80"}>
            <Link href="/contact">
              <>
                {" "}
                <TiChevronRight
                  className="contactpage"
                  style={{
                    color: "#d0d0d0",
                    //   marginLeft: "1300px",
                    fontSize: "30px",
                  }}
                />
              </>
            </Link>
          </Box>

          <Stack spacing={0} align={"center"}>
            <Heading
              fontSize={"2xl"}
              fontWeight={500}
              fontFamily={"body"}
              color={"#aab0b9"}
            >
              {props.data.artist.name}
            </Heading>
            <Text color={"gray.500"}>{props.data.artist.shortBio}</Text>
            <Socials data={props.data} />
          </Stack>
        </Box>
        <Box marginLeft={"0"} mb={4}>
          {" "}
          <Link href="/editProfile">
            <>
              {" "}
              <FiEdit
                className="profileEdit"
                color={"#aab0b9"}
                style={{
                  //   marginLeft: "1300px",
                  fontSize: "24px",
                  margin: "2px",
                }}
              />{" "}
            </>
          </Link>{" "}
        </Box>
        <Stack>
          <Flex alignItems={"center"} justify={"center"}>
            <Heading as="h5" textAlign={"center"} size="2xl" color={"#aab0b9"}>
              {props.data.project.name}
            </Heading>
          </Flex>
        </Stack>

        <Models data={props.data} />
      </Box>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await loadData();
  return { props: { data } };
};

export default Home;
