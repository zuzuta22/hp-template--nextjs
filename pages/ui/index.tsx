import { NextPage } from 'next';

// const
import PageTitle from '../../const/pageTitle';

// components
import Fonts from './_text';


const Ui:NextPage = () => {
  return (
    <div>
      <section>
        <h2>{ PageTitle.ui }</h2>
        <p>This is the UI introduction.</p>
        {/* <section>
          <h2>Title</h2>
        </section> */}
        <Fonts secName="Font" />
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