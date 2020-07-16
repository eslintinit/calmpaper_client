import React from 'react'

export default ({ chapter }) => (
  <div className="read-book-text">
    <div className="container">
      <div className="row">
        <h4 className="title size04">{chapter.title}</h4>
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: chapter.content.replace(/(?:\r\n|\r|\n)/g, '<br />'),
          }}
        />
        {/*
        <div className="text">{chapter.content}</div>
        */}
      </div>
    </div>
  </div>
)