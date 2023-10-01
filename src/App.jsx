import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 const [bookmarks,setBookmarks]=useState([]);
 const [readingTime,setReadingTime]=useState(0)

 //Adding bookmark
const handleAddtoBookmark =blog=>{
  // console.log(blog)
  const newBookmarks = [...bookmarks,blog]
  setBookmarks(newBookmarks)
}
//calculate time of reading
const handleMarkAsRead = (id,time)=>{
  // console.log("marking as read",time)
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)

  //remove  rad blog
  console.log("remove",id)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id)
  setBookmarks(remainingBookmarks)
}

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
      <Blogs handleAddtoBookmark={handleAddtoBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
