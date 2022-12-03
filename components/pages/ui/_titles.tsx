import CustomTitle from '../../elements/_title';

const Titles = (props:string) => {
  return (
    <section className="l-section l-section--bgWhite">
      <CustomTitle tagName="h2" classText="pageTitle" titleText={props.sectionName} />
      <section>
        <CustomTitle tagName="h2" classText="title1" titleText="H2 Title" />
        <CustomTitle tagName="h3" classText="title2" titleText="H3 Title" />
        <h3 className="title2">H3 Static Declaration</h3>
      </section>
    </section>
  )
}

export default Titles;