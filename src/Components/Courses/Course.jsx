import PropTypes from 'prop-types';
import book from '../../assets/images/book.svg';
import doller from '../../assets/images/doller.svg';
const Course = ({ course }) => {
  const { image, title, desc, price, credit } = course;
  return (
    <div className='bg-white rounded-lg  space-y-4 p-4'>
      <div className='courseImg'>
        <img src={image} className='w-full' />
      </div>
      <div className='courseTitle'>
        <h1 className='text-black text-xl font-semibold'>{title}</h1>
      </div>
      <div className='courseDesc'>
        <p className='text-gray text-lg font-normal'>{desc}</p>
      </div>
      <div className='priceCreditWrap flex gap-4 justify-between'>
        <div className='coursePrice flex gap-3'>
          <img src={doller} />
          <p className='text-gray text-base font-semibold'>
            Price : <span className='font-medium'>{price}</span>
          </p>
        </div>
        <div className='courseCredit flex gap-3'>
          <img src={book} />
          <p className='text-gray text-base font-semibold'>
            Credit : <span className='font-medium'>{credit}hr</span>
          </p>
        </div>
      </div>
      <div className='courseButton'>
        <button className='w-full text-xl font-semibold bg-blue text-white text-center rounded-lg py-2'>
          Select
        </button>
      </div>
    </div>
  );
};
Course.propTypes = {
  course: PropTypes.object,
};
export default Course;
