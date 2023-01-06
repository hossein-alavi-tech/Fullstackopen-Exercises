const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0]} exercises={props.numbers[0]} />
      <Part name={props.parts[1]} exercises={props.numbers[1]} />
      <Part name={props.parts[2]} exercises={props.numbers[2]} />
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.totalExercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1,part2,part3]} numbers={[exercises1,exercises2,exercises3]} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
