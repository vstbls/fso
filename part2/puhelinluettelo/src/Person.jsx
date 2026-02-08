const Person = ({person, onClick}) => (
    <div>
        <p>{person.name} {person.number} <button onClick={() => onClick(person)}>delete</button></p>
    </div>
)

export default Person