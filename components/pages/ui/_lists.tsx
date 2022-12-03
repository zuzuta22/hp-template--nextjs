import List from '../../elements/_list';
import CustomTitle from '../../elements/_title';

const Lists = (props:string) => {
  return (
    <section className="l-section">
      <CustomTitle tagName="h2" classText="pageTitle" titleText={props.sectionName} />
      <div className="l-section__inner">
      <h3 className="title2">Normal List</h3>
        <List />
      </div>
      <div className="l-section__inner">
        <h3 className="title2">Disk List</h3>
        <List classText="disk" />
      </div>
      <div className="l-section__inner">
      <h3 className="title2">Square List</h3>
        <List classText="square" />
      </div>
      <div className="l-section__inner">
      <h3 className="title2">Decimal List</h3>
        <List classText="decimal" />
      </div>
      <div className="l-section__inner">
      <h3 className="title2">Kome List</h3>
        <List classText="kome" />
      </div>
      <div className="l-section__inner">
      <h3 className="title2">Fusen List</h3>
        <List classText="fusen" />
      </div>
    </section>
  )
}

export default Lists;