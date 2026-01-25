const FormField = ({label, value, onChange}) => (
    <div>
        {label}: <input value={value} onChange={onChange} />
    </div>
)

export default FormField