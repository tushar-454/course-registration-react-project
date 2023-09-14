const CourseStatics = () => {
  return (
    <div className='bg-white rounded-lg p-4 space-y-4'>
      <div className='creditRemaining pb-4 border-b border-line'>
        <h1 className='text-blue text-xl font-bold'>
          Credit Hour Remaining 7 hr
        </h1>
      </div>
      <div className='creditTitle'>
        <h1 className='text-black text-2xl font-bold'>Course Name</h1>
      </div>
      <div className='creditCourseList pb-4 border-b border-line'>
        <p className='text-gray text-base font-normal pb-1'>
          1. Introduction to C Programming
        </p>
        <p className='text-gray text-base font-normal pb-1'>
          1. Introduction to C Programming
        </p>
        <p className='text-gray text-base font-normal pb-1'>
          1. Introduction to C Programming
        </p>
      </div>
      <div className='creditTotal pb-4 border-b border-line'>
        <p className='text-darkGray font-medium'>
          Total Credit Hour : <span>13</span> hr
        </p>
      </div>
      <div className='creditTotal'>
        <p className='text-darkGray font-medium'>
          Total Price : <span>48000</span> USD
        </p>
      </div>
    </div>
  );
};

export default CourseStatics;
