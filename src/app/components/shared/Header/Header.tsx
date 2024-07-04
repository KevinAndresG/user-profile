"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
interface HeaderProps {
  profileImage: string;
  setProfileImage: (image: string) => void;
}

const Header = ({ profileImage, setProfileImage }: HeaderProps) => {
  const scrollStyles = {
    backgroundColor: "#3131313d",
    backdropFilter: "blur(10px)",
    height: "90px",
  };
  const [screenWidth, setScreenWidth] = useState<number>(-1);
  const [y, setY] = useState<number>(-1);
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.screen.width);
      setY(window.scrollY);
      setUser(localStorage.getItem("user") || "KevinGarcia");

      const handleScroll = () => {
        setY(window.scrollY);
      };

      const handleResize = () => {
        setScreenWidth(window.screen.width);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header
      className={styles.header}
      style={y >= 100 && screenWidth > 768 ? scrollStyles : {}}
    >
      <section className={styles.userInfo}>
        <span className={styles.profileImageContainer}>
          {profileImage && (
            <Image
              className={styles.profileImage}
              src={profileImage}
              alt="Profile"
              width={50}
              height={50}
            />
          )}
          <span className={styles.fileInputContainer}>
            <input
              className={styles.fileInput}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </span>
        </span>
        <span className={styles.userInfoContainer}>
          <h2 className={styles.userName}>{user}</h2>
          <Link
            href="/login"
            className={styles.logOut}
            onClick={() => {
              localStorage.removeItem("user");
            }}
          >
            Salir
          </Link>
        </span>
      </section>
    </header>
  );
};

export default Header;
