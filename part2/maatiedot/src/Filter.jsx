const Filter = ({filter, handler}) => (
    <div>
        FIND COUNTRIES??: <input value={filter} onChange={handler} />
    </div>
)

export default Filter