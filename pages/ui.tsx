import { NextPage } from 'next';

// const
import PageTitle from '../const/pageTitle';

// components
import Titles from '../components/elements/_titles';
import Texts from '../components/elements/_texts';


const Ui:NextPage = () => {
  return (
    <div>
      <section className="l-section">
        <h1 className="pageTitle">{ PageTitle.ui }</h1>
        <p>This is the UI introduction.</p>
        <Titles sectionName="Titles" />
        <Texts sectionName="Texts" />
        {/* <section>
          <h2>Button</h2>
        </section>
        <section>

        </section>
        <section>
          <h2>Table</h2>
        </section> */}
      </section>
    </div>
  )
}

export default Ui;