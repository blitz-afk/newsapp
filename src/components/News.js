import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps={
    pageSize:'5',
    category:'sports',
    API:""
  }
  static propTypes={
    category:PropTypes.string,
    pageSize:PropTypes.number,
    API:PropTypes.string
  }
  constructor(props){
    super(props);
    this.state ={
      articles:[],
      loading:false,
      page:1,
      totalResults:0,
      pageSize:20,
      publishedAt:'',
      author:'',
      source:""
    }
    
  }
  capitalize=(s)=>{
    return s.charAt(0).toUpperCase()+ s.slice(1);
  }
  fetchData= async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.API}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });
  }
  componentDidMount(){
    this.fetchData();
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.page!==this.state.page || prevProps.category !== this.props.category){
      this.fetchData();
    }
    document.title= `${this.capitalize(this.props.category)} - NewsMonkey`
  }
  toggleNext = () => {
    const totalPages = Math.ceil(
      this.state.totalResults / this.state.pageSize
    );
    if(this.state.page<totalPages){
      this.setState(prevState => ({
        page: prevState.page + 1,
        loading: true
      }));
    }
  };
  togglePrev=()=>{
    if(this.state.page>1){
      this.setState(prevState=>({
        page:prevState.page-1,
        loading:true
      }));
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='d-flex justify-content-center'>NewsMotion -Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
          </div>
        ):(
          
          <div className="row">
            {this.state.articles.map((element,index)=>{
              return(
              <div className="col-md-3 my-2 d-flex" key={`${element.url}-${index}`}>
                  <Newsitem title={element.title} description={element.description} Imgurl={element.urlToImage} newsUrl={element.url} publishDate={element.publishedAt} Author={element.author==null? "Anonymous": element.author} />
              </div>
              );
            })}
          </div>
        )}
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page===1? true:false} type="button" className="btn btn-dark" onClick={this.togglePrev}>&larr; Prev</button>
          <button disabled={this.state.page===Math.ceil(this.state.totalResults / this.state.pageSize)? true:false} type="button" className="btn btn-dark" onClick={this.toggleNext}>Next  &#8594;</button>
        </div>
      </div>
    )
  }
}


