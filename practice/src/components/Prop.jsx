import React from 'react';
import bat from '../assets/bat.jpg'
import react from '../assets/react.svg';

function Image({person,size,alt}){
    return(
    <img src={person.name} alt={alt} width={size} height={size} />            
    )
};
const Prop = () => {
    return (
        <div>
            <Image 
            size={100}
            person={
                {
                    name:bat,
                    imageId:'01',
                    alt:'bat man'                   
                }
            }
             /> 

             <Image
             size ={80}
            person={
                {
                    name:react,
                    imageId : '02',
                    alt:'react'
                }
            }
             />

        </div>
    );
}

export default Prop;
