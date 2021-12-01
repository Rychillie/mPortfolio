import Image from "next/image";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.contentTop}>
          <h2>01 / PROJECT NAME</h2>

          <p className={styles.subtitle}>
            Goblin concept digital sculpture with human-like skin. Learned a lot
            of quick tips and look development.
          </p>

          <p>
            Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in
            Mari, Rendered using Arnold.
          </p>
        </div>

        <a href="https://google.com" target="_blank" rel="noreferrer">
          More shots from this project ↗
        </a>
      </div>

      <div className={styles.containerImage}>
        <Image
          src={"/artem-riasnianskyi.jpg"}
          blurDataURL={"/artem-riasnianskyi.jpg"}
          alt="artem-riasnianskyi"
          placeholder="blur"
          width={640}
          height={480}
          quality={100}
          layout="fixed"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Card;
