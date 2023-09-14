import { useEffect, useState } from 'react';
import CourseStatics from '../CourseStatics/CourseStatics';
import Course from './Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch('courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleTotalCredit = (credit, clickTitle, price) => {
    const sumCredit = totalCredit + credit;
    if (sumCredit > 20) {
      return 0;
    }
    const isMatchTitle = titles.find((title) => title === clickTitle);
    if (isMatchTitle) {
      return 0;
    }
    setTotalPrice(totalPrice + price);
    setTitles([...titles, clickTitle]);
    setTotalCredit(totalCredit + credit);
  };
  return (
    <div className='coursesWraper flex flex-col-reverse lg:flex-row gap-10 justify-between items-start my-10'>
      {/* all Courses container  */}
      <div className='courses w-full lg:w-3/4 grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3'>
        {courses.map((course, index) => (
          <Course
            key={index}
            course={course}
            handleTotalCredit={handleTotalCredit}
          />
        ))}
      </div>
      <div className='courseStatics w-full lg:w-1/4'>
        <CourseStatics
          totalCredit={totalCredit}
          titles={titles}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default Courses;
