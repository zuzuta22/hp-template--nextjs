import styles from './_text.module.scss';

const Texts = (props:string) => {
  return (
    <section>
      <h2 className="pageTitle">{props.sectionName}</h2>
      <p className="txt--l">Font Large</p>
      <p>Font Normal</p>
      <p className="txt--s">Font Small</p>
      <p className="txt--bold">Font Bold</p>
      <p className="txt--red">Font Red</p>
      <p className={styles.textModifier}>Font Modifier Adopted out of sass-flocss</p>
    </section>
  )
}

export default Texts;