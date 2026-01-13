const Content = ({parts}) => (
    <>
        {
            parts.map(part => (<p key={part[2]}>{part[0]} {part[1]}</p>))
        }
    </>
)

export default Content