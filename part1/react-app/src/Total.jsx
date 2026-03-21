const Total = ({ course }) => {
  const totalOfExercises = course.parts.reduce(
    (acc, part) => part.exercises + acc,
    0,
  );
  return <h4>Total of {totalOfExercises} exercises</h4>;
};

export default Total;
