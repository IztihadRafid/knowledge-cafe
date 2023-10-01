import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';
const Blog = ({blog,handleAddtoBookmark,handleMarkAsRead}) => {
    const {id,title,cover,reading_time,author,author_img,posted_date,hashtags}= blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4 '>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h5 className='text-2xl'>{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddtoBookmark(blog)} className='ml-3 text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button 
                className='text-purple-600 text-lg underline' 
                onClick={()=> handleMarkAsRead(id,reading_time)}>Mark as read
            </button>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired

}
export default Blog;