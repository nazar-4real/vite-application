import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import GoBackBtn from "../shared/GoBackBtn";
import Loading from "../shared/Loading";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setLoading(false);
      })
  }, [id])

  return (
    <>
      {loading ? <Loading /> : (
        <section className="single-post">
          {post && (
            <>
              <h2 className="article-link">
                {post.title}
              </h2>
              <p className="article-text">
                {post.body}
              </p>
            </>
          )}
          <GoBackBtn />
        </section>
      )}
    </>
  )
}

export default SinglePost