// const Header = ({ course }) => <h1>{course}</h1>;

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

// const Part = ({ part }) => (
//    <p>
//       {part.name} {part.exercises}
//    </p>
// );

// const Content = ({ parts }) => (
//    <>
//       <Part part={parts[0]} />
//       <Part part={parts[1]} />
//       <Part part={parts[2]} />
//    </>
// );

const Course = ({ course }) => {
   console.log("all the props:", course);
   return (
      <div>
         <Header header={course.name} />
         <Content parts={course.parts} />
      </div>
   );
};

const Header = ({ header }) => {
   console.log("header:", header);
   return <h1>{header}</h1>;
};

const Content = ({ parts }) => {
   console.log("parts:", parts);
   return (
      <div>
         {parts.map((part) => (
            <Part key={part.id} part={part} />
         ))}
      </div>
   );
};

const Part = ({ part }) => {
   console.log("part:", part);
   return (
      <p>
         {part.name} {part.exercises}
      </p>
   );
};

const App = () => {
   const course = {
      id: 1,
      name: "Half Stack application development",
      parts: [
         {
            name: "Fundamentals of React",
            exercises: 10,
            id: 1,
         },
         {
            name: "Using props to pass data",
            exercises: 7,
            id: 2,
         },
         {
            name: "State of a component",
            exercises: 14,
            id: 3,
         },
      ],
   };

   return <Course course={course} />;
};

export default App;
