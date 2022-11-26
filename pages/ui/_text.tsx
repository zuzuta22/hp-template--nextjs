import styles from './_text.module.scss';

const Fonts = (props:string) => {
  return (
    <section>
      <h2 className={styles.titleSec}>{props.secName}</h2>
      <p className="txt--l">Font Large</p>
      <p>Font Normal</p>
      <p className="txt--s">Font Small</p>
      <p className="txt--bold">Font Bold</p>
      <p className="txt--red">Font Red</p>
    </section>
  )
}

export default Fonts;