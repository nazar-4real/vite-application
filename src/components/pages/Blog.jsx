import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";

import Search from "../shared/Search";
import Loading from "../shared/Loading";

import FetchResource from '../../services/FetchResource';

export const upperFirstLetter = text => text[0].toUpperCase() + text.substring(1);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [disabledInput, setDisabledInput] = useState(true);

  const data = new FetchResource();

  useEffect(() => {
    data.getData('posts')
      .then(posts => {
        setPosts(posts.slice(0, 10));
        setLoading(false);
        setDisabledInput(false);
      })
  }, [])

  const updateTerm = term => setTerm(term);

  const filterHandler = (posts, term) => {
    if (term.length === 0) {
      return posts;
    }

    return posts.filter(post => post.title.indexOf(term) > -1);
  }

  const filteredPosts = filterHandler(posts, term);

  const articles = filteredPosts.map(post => {
    const { id, title, body: text } = post;

    return (
      <article className="article" key={id}>
        <Link
          className="article-link"
          to={`/blog/${id}`}>
          {upperFirstLetter(title)}
        </Link>
        <p className="article-text">
          {upperFirstLetter(text)}
        </p>
      </article>
    )
  });

  const visisblePosts = articles.length === 0 ? <span>There is nothing here yet</span> : articles;

  return (
    <>
      <Search onTermUpdate={updateTerm} disabledInput={disabledInput} />
      <section className="articles">
        {loading ? <Loading /> : visisblePosts}
      </section>
    </>
  )
}

export default Blog