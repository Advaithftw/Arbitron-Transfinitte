import React from 'react'
import { Article } from '../../components'
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js"

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          MEDIA COVERAGE OF COMPETITORS
        </h1>
      </div>
      <div className="gpt3__blog-container">
        
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02}  title="Reliance Digital" link="https://www.consumercomplaints.in/reliance-digital-b104202" Senti="Sentiment:Negative" />
          <Article imgUrl={blog03}  title="Vijay Sales" link="https://www.glassdoor.co.in/Reviews/Vijay-Sales-Reviews-E522471.htm" Senti="Sentiment:Neutral"/>
          <Article imgUrl={blog04}  title="Aditya Visions" link="https://www.ambitionbox.com/reviews/aditya-vision-reviews" Senti="Sentiment:Positive"/>
          <Article imgUrl={blog05}  title="Bajaj Electronics" link="https://in.indeed.com/cmp/Bajaj-Electronics/reviews" Senti="Sentiment:Neutral"/>
        </div>
      </div>
    </div>
  )
}

export default Blog