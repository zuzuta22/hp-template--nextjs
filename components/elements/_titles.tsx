const Titles = (props:string) => {
  return (
    <section>
      <h2 className="pageTitle">{props.sectionName}</h2>
      <section>
        <h2 className="title1">H2 Title</h2>
        <h3 className="title2">H3 Title</h3>
      </section>
    </section>
  )
}

export default Titles;