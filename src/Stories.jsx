import React from 'react'
import { useGlobalContext } from './ContextAPI'

const Stories = () => {
    const { hits, isLoading, removePost } = useGlobalContext();

    if (isLoading) {
        return (
            <>
                <h2 className='loading'>Loading...</h2>
            </>
        )
    }
    console.log(hits);
    return (
        <>
            {hits.map((currentPost) => {
                const { title, author, objectID, url, num_comments } = currentPost;

                return (
                        <div className="news-card" key={objectID} >
                            <h4 className='blue'>{title}</h4>
                            <p>By <span>{author}</span> | <span>{num_comments} comments</span></p>
                            <div className="card-button">
                                <a href={url} target='_blank' id='readmore'>
                                    Read More...
                                </a>
                                <a href='#' id='remove' onClick={() => removePost(objectID)}>Remove</a>
                            </div>
                        </div>
                );

            })}
        </>
    )
}

export default Stories
