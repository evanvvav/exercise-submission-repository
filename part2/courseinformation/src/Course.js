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
   return <h3>{header}</h3>;
};

const Content = ({ parts }) => {
   console.log("parts:", parts);
   return (
      <div>
         {parts.map((part) => (
            <Part key={part.id} part={part} />
         ))}
         <Total parts={parts} />
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

const Total = ({ parts }) => {
   console.log("total props:", parts);
   return (
      <b>total of {parts.reduce((s, p) => s + p.exercises, 0)} exercises</b>
   );
};

export default Course;
