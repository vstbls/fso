const Filter = ({filter, handler}) => (
    <div>
        Filter shown results: <input value={filter} onChange={handler} />
    </div>
)

export default Filter