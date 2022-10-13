import React from 'react'
import {Container}from 'react-bootstrap'
import '../styleSheets/blog.css'

const BlogItem = (props) => {
 
 
    return(
    <>
        <Container className="box" style={{width:'25rem'}}>
        <img src={props.icon} alt={props.icon} className="box-picture"/><hr/>
        <p className="title-item"> <b> {props.name }</b> </p>
        <p> {props.description}
        <hr/>
        <p> <b> Un Color:  </b> 
        {props.color}
        </p> 
        <hr/>
        <p> <b> Una cancion:  </b> </p> 
        <p> {props.song}</p>
        <b > {props.songName} </b> </p>
                <br/>
        <hr/>
                 
        <p> <b> Momento del día sugerido::  </b> </p>
        <p> {props.moment} </p>
        <hr/> 
        <p> <b> Ingredientes:  </b> </p> 
        <p> {props.ingredients}</p>
        <p> <b> Inspiración:  </b> </p> 
        <p> {props.inspiration}</p>
        </Container>
    </>
  )
}

export default BlogItem