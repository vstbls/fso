const Country = ({name, setFilter}) => (
    <p>
        {name}
        <button onClick={() => setFilter(name)}>TELL ME MORE......</button>
    </p>
)

export default Country