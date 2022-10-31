
const Persons = (props) => {
  return (
    <>
      {
        props.filterPersons.map((person, i) =>{
          return <div key={person.name}>{person.name} {person.phone}</div>;
        })
      }
    </>
  )
}

export default Persons