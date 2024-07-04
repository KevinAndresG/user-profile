import Header from "./components/shared/Header/Header";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import ContactForm from "./components/ContactForm/ContactForm";
import styles from "./styles/page.module.css";
export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
}
