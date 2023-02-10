const Course = ({ course }) => {
    let sum = course.parts.map(part => part.exercises).reduce((a, b) => (a + b));
    console.log(sum)
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total sum={sum} />
      </div>
    )
  }
  
  const Header = ({ course }) => <h1>{course.name}</h1>
  
  const Total = ({ sum }) => <h3>total of {sum} exercises</h3>
  
  const Part = ({ part }) =>
    <p>
      {part.name} {part.exercises}
    </p>
  
  const Content = ({ parts }) => {
    const allParts = parts.map(part => <Part key={part.id} part={part} />)
    return allParts
  }

export default Course