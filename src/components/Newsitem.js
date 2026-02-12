import React, { Component } from 'react'


export class Newsitem extends Component {
  render() {
    let {title,description,Imgurl,newsUrl,publishDate,Author}=this.props;
    return (
      <div>
        
        <div className="card h-100 border-1 border-dark">
            <div className="ratio ratio-4x3"> 
                <img src={Imgurl? Imgurl:"Image not found"} className="card-img-top" alt=''/>  
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title clamp-title">{title}</h5>
                <p className="card-text clamp-desc">{description}</p>
                
                <p className="card-text"> 
                  <small className='text-muted'>By {Author} on {publishDate.slice(0,10)}</small>
                </p>
                <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark mt-auto">Read More</a>
                
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
