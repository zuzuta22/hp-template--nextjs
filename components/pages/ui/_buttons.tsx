import Button from '../../elements/_button';

import projectStyles from '../../../styles/sass/obj-project/pages/_p-aboutButtons.module.scss';

const Buttons = (props:string) => {
  return (
    <section>
      <h2 className="pageTitle">{props.sectionName}</h2>
      <div className={projectStyles['p-about-buttons']}>
        <Button styleClass="c-button" buttonName="Button" />
        <Button styleClass="c-button c-button--cubic" buttonName="Cubic Button" />
        <Button styleClass="c-button c-button--arrow" buttonName="Button with arrow" />
      </div>
    </section>
  )
}

export default Buttons;