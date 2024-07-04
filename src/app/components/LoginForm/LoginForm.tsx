"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmited] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmited(true);
    if (username && password) {
      localStorage.setItem("user", username);
      router.push("/home");
    } else {
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmited(false);
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            style={{
              border:
                submited && !username
                  ? "1px solid #640e0e"
                  : "1px solid transparent",
            }}
            type="text"
            id="username"
            value={username}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          <label
            className={`${styles.label} ${username.length > 0 && styles.goUp}`}
            htmlFor="username"
          >
            Username
          </label>
        </div>
        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            style={{
              border:
                submited && !password
                  ? "1px solid #640e0e"
                  : "1px solid transparent",
            }}
            type="password"
            id="password"
            value={password}
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          <label
            className={`${styles.label} ${password.length > 0 && styles.goUp}`}
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
