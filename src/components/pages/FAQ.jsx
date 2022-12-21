import { useState, useEffect, useRef } from "react";

import Loading from "../shared/Loading";

import FetchResource from "../../services/FetchResource";

import { upperFirstLetter } from "./Blog";

const FAQ = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = new FetchResource();

  useEffect(() => {
    data.getData('comments')
      .then(comments => {
        setQuestions(comments.slice(0, 10));
        setLoading(false);
      })
  }, [])

  const questionsList = questions.map(question => {
    const { id, name: heading, body: text } = question;

    const toggleQuestion = (el) => {
      const element = el.querySelector('.faq__item-text');
      const elHeight = window.getComputedStyle(element).height;
      if (elHeight === '0px') {
        document.querySelectorAll('.faq__item-text').forEach(item => item.style.height = '0px');
        element.style.height = `${element.scrollHeight}px`;
      } else {
        element.style.height = '0';
      }
    }

    return (
      <article
        className={`faq__item`}
        key={id}
        onClick={(e) => toggleQuestion(e.currentTarget)}
      >
        <h3 className="faq__item-title">
          {upperFirstLetter(heading)}
        </h3>
        <p className="faq__item-text">
          {upperFirstLetter(text)}
        </p>
      </article>
    )
  })

  return (
    <section className="faq">
      {loading ? <Loading /> : questionsList}
    </section>
  )
}

export default FAQ