import "./BlogCard.css"
import { Link } from "react-router-dom"

function BlogCard({id, title, content, author, date, categories}) {
  return (
    <Link className="blog-card" to={`/blog/${id}`}>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-content-preview">{content.substring(0, 100)}...</p>
        <div className="author-card">
            <img src={author.avtar} alt="avtar" className="author-avtar"/>
            <span className="author-name">{author.name}</span>
            <span className="blog-date">{date}</span>
        </div>
        {categories.map((category , i)=>{
            return <span key={i} className="category-badge">{category}</span>
        })}
    </Link>
  )
}

export default BlogCard