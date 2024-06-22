import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"


function BlogView() {
    const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=> blogObject.id == id
    )
    console.log(selectedBlog);
  return (
        <div className="BlogView-cards">   
            <h1 className="h1">{selectedBlog.title}</h1>
            <div className="flex">
            <p className="BlogView-author-details">
                <img src={selectedBlog.author.avtar} alt="avtar" className="BlogView-avtar"/>
                {selectedBlog.author.name} | {selectedBlog.date}
            </p>
            </div>
            <img src={selectedBlog.imgURL} className="BlogView-img"/> <br/> <br/>
            <p>Description:{selectedBlog.content}</p>
            <p className="price">Price:{selectedBlog.price}</p>
            
        </div>

    )
}

export default BlogView