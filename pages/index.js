import Head from "next/head";
import Image from "next/future/image";
import { SiInstagram, SiYoutube, SiTwitter, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
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
        className={`text-black p-4 rounded-full bg-[#fcfdfa88] ${color}`}>
        <Icon fontSize={"35px"} />
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
        className={`${color} card`}
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

      <main className="min-h-screen px-16 flex-1 flex flex-col justify-center items-center">
        <Image
          src="/gdsclogo.png"
          alt="Google Developer Student Clubs Logo"
          width={400}
          height={400}
          className="w-[80vw] max-w-[400px]"
        />

        <div className={"my-10 text-2xl md:text-3xl lg:text-6xl"}>
          Heriot-Watt University
        </div>

        <div className="flex items-center flex-wrap flex-col min-w-[80vw]">
          <LinkTreeTag
            href="https://gdsc.community.dev/heriot-watt-university/"
            content={<h2>GDSC Community Page</h2>}
            color={"red"}
          />

          <LinkTreeTag
            href={null}
            content={
              <>
                <h2>Socials</h2>
                <br />
                <div className="flex w-full justify-evenly">
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
            color={"green"}
          />

          <LinkTreeTag
            href={
              "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAQVOwVpUMkhKQjFUR1NCWFVPUlhSUDRQNThKMUNEVC4u"
            }
            content={<h2>GDSC @ HWU - Sign-Up Form</h2>}
            color={"orange"}
          />

          <LinkTreeTag
            href={
              "https://youtube.com/playlist?list=PLYlB334TcbXGVBqG-7m_udB-QTWQXYCf8"
            }
            content={<h2>Creating your own Web App Series - Playlist</h2>}
            color={"blue"}
          />
        </div>
      </main>
    </div>
  );
}
