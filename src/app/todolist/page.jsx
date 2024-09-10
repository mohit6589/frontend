'use client'
import React, { useState } from 'react'


const ToDoList = () => {

    const [count, setCount] = useState(0);

    const [taskList, setTaskList] = useState([
        { text: 'Learn HTML', completed : false, added: new Date() },
        { text: 'Learn CSS', completed : false, added: new Date() },
        { text: 'Learn JS', completed : false, added: new Date() },
        { text: 'Learn TW', completed : false, added: new Date() },
    ]);

    const addTask = ( e ) => {
        if( e.code === 'Enter' ){
            console.log(e.target.value)
            e.target.value = '';
        }
    }

  return (
    <div className='mt-5 mb-5'>
        {/* <h1 className='text-center'>{count}</h1>
        <button
        onClick={ () => { setCount( count + 1 ); console.log(count); } }
        >Add Count</button> */}
        <h1 className='text-center uppercase text-2xl font-bold my-10'>Todo List</h1>
        <div className='border shadow rounded-lg p-6 max-w-2xl mx-auto'>
            <div>
                <input
                onKeyDown={addTask}
                type="text" placeholder='📃Enter a task to add...'
                className='py-1 px-3 w-full bg-gray-300' />
            </div>
            <br/>
            <div>
                {
                    taskList.map( ( task, index ) => { 
                        return<div className='shadow mb-5 p-5 border' key={index}>
                            <p>{task.text}</p>
                            <div className='mt-4 flex justify-end gap-3'>
                                <button className='bg-blue-500 rounded-full text-white px-4 py-1'>
                                    Complete
                                </button>
                                <button  className='bg-red-500 rounded-full text-white px-4 py-1'>
                                    Delete
                                </button>
                            </div>
                         </div> 
                        } )
                }
            </div>
        </div>
    </div>
  )
}

export default ToDoList