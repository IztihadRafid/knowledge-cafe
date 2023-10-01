import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 m-5 bg-gray-100 rounded-xl">
            <div>
                <h3 className="text-2xl p-8">Reading Time: {readingTime}minutes</h3>
            </div>
            <h3 className="text-3xl p-3 text-center">Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;