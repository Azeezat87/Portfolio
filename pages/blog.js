import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Blog() {
 const [posts, setPosts] = useState([])

 useEffect(() => {
  fetch('https://im1kr0uw.directus.app/items/Articles')
   .then(response => response.json())
   .then(data => {
    console.log(data)
    setPosts(data.data)
   })
   .catch((err) => {
    console.log(err.message)
   })
}, [] )

 return (
  <>
   {posts.map((post) => {
    return (
     <div key={post.id}>
      <h2>{post.title}</h2>
     </div>
    )
   })}
   <h2>
    <Link href="/">Back to home</Link>
   </h2>
    </>
 )
}