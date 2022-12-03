type Props = {
  classText: string
}

const List = ({classText}) => {
  return (
    <ul className={classText}>
      <li>list A</li>
      <li>list B</li>
    </ul>
  )
}

export default List;