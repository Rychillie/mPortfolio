import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Rychillie Umpierre de Oliveira ⏤{new Date().getFullYear()}</p>

      <ul>
        <li>
          <Link href="/">
            <a>Twitter</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Github</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Linkedin</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
