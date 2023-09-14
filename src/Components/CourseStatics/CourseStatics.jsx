import PropTypes from 'prop-types';
const CourseStatics = ({ totalCredit, titles, totalPrice }) => {
  let serial = 1;
  return (
    <div className='bg-white rounded-lg p-4 space-y-4'>
      <div className='creditRemaining pb-4 border-b border-line'>
        <h1 className='text-blue text-xl font-bold'>
          Credit Hour Remaining {20 - totalCredit} hr
        </h1>
      </div>
      <div className='creditTitle'>
        <h1 className='text-black text-2xl font-bold'>Course Name</h1>
      </div>
      <div className='creditCourseList pb-4 border-b border-line'>
        {titles.map((title, index) => (
          <p key={index} className='text-gray text-base font-normal pb-1'>
            {serial++}. {title}
          </p>
        ))}
      </div>
      <div className='creditTotal pb-4 border-b border-line'>
        <p className='text-darkGray font-medium'>
          Total Credit Hour : <span>{totalCredit}</span> hr
        </p>
      </div>
      <div className='creditTotal'>
        <p className='text-darkGray font-medium'>
          Total Price : <span>{totalPrice}</span> USD
        </p>
      </div>
    </div>
  );
};
CourseStatics.propTypes = {
  totalCredit: PropTypes.number,
  titles: PropTypes.array,
  totalPrice: PropTypes.number,
};
export default CourseStatics;
