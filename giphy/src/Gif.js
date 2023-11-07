import React from 'react';

const Gif = (props) =>{
    const {gif} = props
    return(<div className='gif'>
        <h3>{gif.title}</h3>
        <p><span style={{color:'green',fontWeight:"bold"}}>username:</span> {gif.username}</p>
        <img width="200" height="200" src={gif.images.original.url} alt='images'/>
            <p>
          <span style={{color:'green'}}> rating:</span> <strong>{gif.rating}</strong>
            </p>
        <a  target="_blank" href={gif.url}><button id='check-out'>Check it out</button></a>
    </div>)
}
export default Gif;

// import React from 'react';

// const Gif = (props) => {
//     const { gif } = props;
//     return (
//         <div className='gif'>
//             <h3>{gif.title}</h3>
//             <p>username: {gif.username}</p>
//             <img width="200" height="200" src={gif.images.original.url} alt='images' />
//             <p>
//                 <span style={{ color: 'green' }}>rating:</span> <strong>{gif.rating}</strong>
//             </p>
//             <a target="_blank" href={gif.url}>Check it out</a>
//         </div>
//     )
// }

// export default Gif;
