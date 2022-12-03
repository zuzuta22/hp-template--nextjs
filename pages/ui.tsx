import { NextPage } from 'next';

// const
import PageTitle from '../const/pageTitle';

// components
import Titles from '../components/pages/ui/_titles';
import Texts from '../components/pages/ui/_texts';
import Lists from '../components/pages/ui/_lists';
import Buttons from '../components/pages/ui/_buttons'


const Ui:NextPage = () => {
  return (
    <section>
      <h1 className="pageTitle">{ PageTitle.ui }</h1>
      <p className="txt--center">This is the UI introduction.</p>
      <Titles sectionName="Titles" />
      <Texts sectionName="Texts" />
      <Buttons sectionName="Buttons" />
      <Lists sectionName="Lists" />
    </section>
  )
}

export default Ui;