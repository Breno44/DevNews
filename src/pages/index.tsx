import SEO from "../components/SEO";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix />
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev!</span>
          <h1>
            Bem-Vindo e bem-vinda <br />
            ao <span>Dev</span>News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br />
            <span>relevantes para o seu aprendizado.</span>
          </p>
        </section>

        <img src="/home.svg" alt="Home Image" />
      </main>
    </>
  );
}
