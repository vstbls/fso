const Error = ({err}) => {
    if (err === null) {
        return null
    }

    return (
        <div className="error">
            {err}
        </div>
    )
}

export default Error