import React from 'react'
import { Link } from 'react-router-dom'

const Stars = ({ reviews, bookId }) => {
  let sum = 0
  for (let i = 0; i < reviews.length; i++) {
    sum += parseInt(reviews[i].stars, 10) //don't forget to add the base
  }

  var avg = sum / reviews.length || 0

  return (
    <Link to={`/books/${bookId}/reviews`}>
      <div className="about-num-panel-info">
        <div className="icon-box icon-box-paint">
          <svg className="icon icon-rating">
            <use xlinkHref="#icon-rating" />
          </svg>
        </div>
        <div className="panel-num">{avg}</div>
      </div>
      <div className="about-num-panel-label">
        {reviews.length === 0 ? 'No reviews' : reviews.length}
      </div>
    </Link>
  )
}

export default ({ chapter }) => (
  <div className="about-num-panel">
    <Stars reviews={chapter.book.reviews} bookId={chapter.book.id} />
    <a href className="all-views">
      <div className="about-num-panel-info">
        <div className="panel-num">{chapter.views}</div>
      </div>
      <div className="about-num-panel-label">All views</div>
    </a>
    {/*
    <a href>
      <div className="about-num-panel-info">
        {/
                  <div class="icon-box">
                      <svg class="icon icon-mark"><use xlink:href="#icon-mark"></use></svg>
                  </div>
        /}
        <div className="panel-num">
          <div className="outline-box">#5 TOP</div>
        </div>
      </div>
      <div className="about-num-panel-label">Reward</div>
    </a>
    */}
  </div>
)