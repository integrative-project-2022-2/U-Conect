export default function participantsList({children, name}) {
  return (
    <div>
      {children}
      <table>
        <tr>{name}</tr>
      </table>
    </div>
  )
}
