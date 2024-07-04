"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileHeader from "../MobileHeader/MobileHeader";
const Header = () => {
  const scrollStyles = {
    backgroundColor: "#3131313d",
    backdropFilter: "blur(10px)",
    height: "70px",
  };
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [y, setY] = useState(window.scrollY);
  const [user] = useState(
    localStorage.getItem("user")
      ? localStorage.getItem("user")
      : "Usuario No Logueado"
  );
  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={styles.header} style={y >= 100 ? scrollStyles : {}}>
      {screenWidth <= 900 ? (
        <MobileHeader />
      ) : (
        <section className={styles.userInfo}>
          <h2 className={styles.userName}>{user}</h2>
          <span className={styles.profileImageContainer}>
            <Image
              src="/userProfile.png"
              alt="Profile"
              width={50}
              height={50}
              className={styles.profileImage}
            />
          </span>
          <Link
            href="/login"
            className={styles.logOut}
            onClick={() => {
              localStorage.removeItem("user");
            }}
          >
            Salir
          </Link>
        </section>
      )}
    </header>
  );
};

export default Header;
