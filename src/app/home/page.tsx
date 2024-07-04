"use client";
import Header from "../components/shared/Header/Header";
import About from "../components/About/About";
import Interests from "../components/Interests/Interests";
import ContactForm from "../components/ContactForm/ContactForm";
import styles from "../styles/page.module.css";
import { useState } from "react";
import defaultImg from "../../../public/userProfile.png";
export default function Home() {
  const [profileImage, setProfileImage] = useState<string | any>(defaultImg);
  return (
    <main className={styles.mainContainer}>
      <Header profileImage={profileImage} setProfileImage={setProfileImage} />
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
}
