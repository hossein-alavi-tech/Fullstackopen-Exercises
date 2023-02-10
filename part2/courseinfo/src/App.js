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


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courseComponents = courses.map((course, id) => <Course key={id} course={course} />)
  return courseComponents
}

export default App