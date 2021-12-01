import Link from "next/link";
import { IconDown } from "./icon";
import styles from "./styles.module.scss";

type Props = {
  isHome?: boolean;
};

const Header = ({ isHome }: Props) => {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.navTop}>
          <Link href="/">
            <a>🧑🏽‍💻</a>
          </Link>

          <ul>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>404</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Styleguide</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {isHome === true ? (
        <>
          <div className={styles.content}>
            <h1>Hello, I`m Rychillie</h1>

            <p>
              A senior front-end developer specializing in open
              source.
            </p>
          </div>
          <IconDown />
        </>
      ) : null}
    </header>
  );
};

export default Header;
