import React from 'react'

export default function Banner(props) {

    return (
        <div>
            <div class="card" >
                <img src={props.imgUrl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title?props.title.slice(0,40):""}</h5>
                        <p class="card-text">{props.description?props.description.slice(0,90):""}</p>
                        <a href={props.srcurl?props.srcurl:""} class="btn btn-primary">Go To Video</a>
                     </div>
            </div>
        </div>
    )
}
