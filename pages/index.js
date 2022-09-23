import Head from "next/head";
import Image from "next/future/image";
import { SiInstagram, SiYoutube, SiTwitter, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import links from "../config.json";

export default function Home() {
  const { theme } = useTheme();

  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
  };

  const MoonIcon = () => {
    const variants = {
      initial: { scale: 0.6, rotate: 90 },
      animate: { scale: 1, rotate: 0, transition },
      whileTap: { scale: 0.95, rotate: 15 },
    };

    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 50 50"
        key="moon">
        <motion.path
          d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
          fill="currentColor"
          initial="initial"
          animate="animate"
          whileTap="whileTap"
          variants={variants}
        />
      </motion.svg>
    );
  };

  const SunIcon = () => {
    const whileTap = { scale: 0.95, rotate: 15 };

    const raysVariants = {
      initial: { rotate: 45 },
      animate: { rotate: 0, transition },
    };

    const coreVariants = {
      initial: { scale: 1.5 },
      animate: { scale: 1, transition },
    };

    return (
      <motion.svg
        key="sun"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileTap={whileTap}
        // Centers the rotation anchor point vertically & horizontally
        style={{ originX: "50%", originY: "50%" }}>
        <motion.circle
          cx="11.9998"
          cy="11.9998"
          r="5.75375"
          fill="currentColor"
          initial="initial"
          animate="animate"
          variants={coreVariants}
        />
        <motion.g initial="initial" animate="animate" variants={raysVariants}>
          <circle
            cx="3.08982"
            cy="6.85502"
            r="1.71143"
            transform="rotate(-60 3.08982 6.85502)"
            fill="currentColor"
          />
          <circle
            cx="3.0903"
            cy="17.1436"
            r="1.71143"
            transform="rotate(-120 3.0903 17.1436)"
            fill="currentColor"
          />
          <circle cx="12" cy="22.2881" r="1.71143" fill="currentColor" />
          <circle
            cx="20.9101"
            cy="17.1436"
            r="1.71143"
            transform="rotate(-60 20.9101 17.1436)"
            fill="currentColor"
          />
          <circle
            cx="20.9101"
            cy="6.8555"
            r="1.71143"
            transform="rotate(-120 20.9101 6.8555)"
            fill="currentColor"
          />
          <circle cx="12" cy="1.71143" r="1.71143" fill="currentColor" />
        </motion.g>
      </motion.svg>
    );
  };

  const [url, setUrl] = useState("/gdsclogo.png");

  const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      theme === "light" ? setIcon(<SunIcon />) : setIcon(<MoonIcon />);
    }, [theme]);

    const [icon, setIcon] = useState(<MoonIcon />);

    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-3xl p-4">
        {icon}
      </motion.button>
    );
  };

  useEffect(() => {
    theme === "light" ? setUrl("/gdsclogo.png") : setUrl("/gdsclogo_dark.png");
  }, [theme]);

  const SocialMediaButton = ({ href, title, color, Icon }) => {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        rel="noreferrer"
        target={"_blank"}
        title={title}
        aria-label={title}
        className={`tooltip flex justify-center items-center my-4 p-4 rounded-full bg-slate-100 dark:hover:bg-[#141414] dark:bg-[#444] text-inherit ${color}`}>
        <Icon fontSize={"35px"} />
        <h3 className="md:hidden ml-4 text-2xl">{title}</h3>
        <span className="tooltiptext">{title}</span>
      </motion.a>
    );
  };

  const LinkTreeTag = ({
    href = null,
    content = "Empty Link",
    color = "red",
  }) => {
    var Element;
    var isLink;
    if (href !== null) {
      Element = motion.a;
      isLink = true;
    } else {
      Element = motion.div;
      isLink = false;
    }

    return (
      <Element
        whileHover={{
          scale: isLink && 1.1,
          rotate: isLink && 2,
        }}
        whileTap={{ scale: isLink && 0.9, rotate: isLink && -2 }}
        href={href}
        rel="noreferrer"
        className={`${color} card dark:border-slate-100`}
        target={"_blank"}>
        {content}
      </Element>
    );
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-4 right-4">
        <DarkModeToggle />
      </div>

      <main className="min-h-screen px-16 flex-1 flex flex-col justify-center items-center">
        {url && (
          <Image
            src={url}
            alt="Google Developer Student Clubs Logo"
            width={400}
            height={107.5}
            className="w-[80vw] max-w-[400px] mt-14 md:mt-10"
          />
        )}

        <div
          className={
            "my-10 text-center text-3xl font-medium md:text-4xl lg:text-6xl dark:text-slate-300 text-gray-600 tracking-wider"
          }>
          Heriot-Watt University
        </div>

        <div className="flex items-center flex-wrap flex-col min-w-[80vw]">
          <LinkTreeTag
            href={null}
            content={
              <>
                <h2>Socials</h2>
                <br />
                <div className="flex w-full md:justify-evenly md:flex-row flex-col justify-center items-center">
                  <SocialMediaButton
                    href={"https://instagram.com/gdsc_hwu?igshid=YmMyMTA2M2Y="}
                    title={"Instagram"}
                    color={"pink"}
                    Icon={SiInstagram}
                  />

                  <SocialMediaButton
                    href={
                      "https://www.youtube.com/channel/UC8jF4bov22bDnf9pClPigvg"
                    }
                    title={"Youtube"}
                    color={"red"}
                    Icon={SiYoutube}
                  />

                  <SocialMediaButton
                    href={"https://twitter.com/gdsc_hwu"}
                    title={"Twitter"}
                    color={"blue"}
                    Icon={SiTwitter}
                  />

                  <SocialMediaButton
                    href={"https://www.linkedin.com/company/gdsc-hwu/"}
                    title={"Linkedin"}
                    color={"purple"}
                    Icon={SiLinkedin}
                  />
                </div>
              </>
            }
            color={""}
          />

          {links.map((link) => (
            <LinkTreeTag {...link} />
          ))}
          
        </div>
      </main>
    </div>
  );
}
