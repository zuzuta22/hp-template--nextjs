type Props = {
  titleText: string
  tagName?: keyof JSX.IntrinsicElements | ''
  classText: string
}

const DynamicCustomTitle = ({ titleText, classText, tagName = ''}: Props) => {
  const CustomTag = tagName !== '' ? tagName : 'div'

  return <CustomTag className={classText}>{titleText}</CustomTag>
}

export default DynamicCustomTitle;

