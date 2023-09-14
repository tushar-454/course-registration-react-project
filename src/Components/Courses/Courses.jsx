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
    <div className='coursesWraper flex gap-10 justify-between items-start'>
      {/* all Courses container  */}
      <div className='courses grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {courses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
      <div className='courseStatics'>
        <CourseStatics />
      </div>
    </div>
  );
};

export default Courses;
