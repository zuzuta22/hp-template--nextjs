import List from '../../elements/_list';
import CustomTitle from '../../elements/_title';

const Lists = (props:string) => {
  return (
    <section>
      <CustomTitle tagName="h2" classText="pageTitle" titleText={props.sectionName} />
      <List />
      <List classText="disk" />
      <List classText="square" />
      <List classText="decimal" />
      <List classText="kome" />
      <List classText="fusen" />
    </section>
  )
}

export default Lists;