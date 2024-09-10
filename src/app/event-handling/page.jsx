'use client';
import React from 'react'


const EventHandling = () => {
    const previewImage = ( s ) => { const file = s.target.files[0];
    const reader = new FileReader();

    reader.onload = (output) => { 
        const img = new Image();
        img.src = output.target.result;
        document.body.appendChild(img);
     }

    reader.readAsDataURL(file);

     }

  return (
    <div className='max-w-2xl mx-auto text-center mt-5 mb-5'
        onMouseMove={ (d) => { console.log(d.clientX, d.clientY, d.movementX, d.movementY) }}
    >
     <h1 className='text-center font-bold mt-5 text-3xl'>EventHandling</h1>
     <button className='bg-black p-3 text-white rounded mt-4'
     onClick={ () => { alert('Button was clicked!') } }
     > Click Me
     </button>

     <input
     className='w-full border py-1 px-3 rounded mt-4'
     onChange={ ( m ) => {console.log(m.target.value) }}
     type="text" />

     <input type="color" className='mt-4'
     onChange={ ( s ) => { document.body.style.backgroundColor = s.target.value; }}
     />

     <input className='block mt-5'
     type="file" 
     onChange={ ( s ) => { console.log( s.target.files )} }
     multiple
     />
     
     <input className='block mt-5' type="file" onChange={previewImage} />

     <input className='py-1 px-3 rounded mt-5 bg-gray-200'
      onKeyDown={ (d) => { console.log(d.code) } }
      type="text" />



    </div>
  )
}

export default EventHandling