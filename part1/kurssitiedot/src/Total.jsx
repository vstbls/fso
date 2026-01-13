const Total = ({exercises}) => (
    <p>Number of exercises {exercises.reduce((x,y) => x+y)}</p>
)

export default Total