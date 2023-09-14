import { useEffect, useState } from 'react';
import CourseStatics from '../CourseStatics/CourseStatics';
import Course from './Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className='coursesWraper flex flex-col-reverse lg:flex-row gap-10 justify-between items-start'>
      {/* all Courses container  */}
      <div className='courses w-full lg:w-3/4 grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3'>
        {courses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
      <div className='courseStatics w-full lg:w-1/4'>
        <CourseStatics />
      </div>
    </div>
  );
};

export default Courses;
