import React from 'react';
import Gif from './Gif';

const GifList = props =>{
    const {giffs} = props

    return(<div id="giflist">
        {
            giffs.map(gif =>{
                return(
                    <Gif key={gif.id}gif={gif}/>
                )
            })
        }
    </div>)
}
export default GifList
