import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileHeader.module.css";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id={styles.mobileMenu}>
      <div className={`${styles.itemsPanel} ${isOpen && styles.open}`}>
        <div id={styles.HeaderMobile}>
          <section className={styles.userInfo}>
            <h2 className={styles.userName}>Kevin Garcia</h2>
            <span className={styles.profileImageContainer}>
              <Image
                src="/userProfile.png"
                alt="Profile"
                width={50}
                height={50}
                className={styles.profileImage}
              />
            </span>
            <Link href="/login" className={styles.logOut}>
              Salir
            </Link>
          </section>
        </div>
      </div>
      <div className={styles.hamburguerButton} onClick={openMenu}>
        <span className={`${styles.menuLine} ${isOpen && styles.open}`}></span>
        <span className={`${styles.menuLine} ${isOpen && styles.open}`}></span>
        <span className={`${styles.menuLine} ${isOpen && styles.open}`}></span>
      </div>
    </div>
  );
};

export default MobileHeader;
