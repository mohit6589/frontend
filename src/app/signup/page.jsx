import Button from '@/components/Button'
import  Input  from '@/components/Input'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1 className='ml-5 text-5xl'>Signup Page</h1>
      <br/>
       <Button>Submit</Button>
       <Button>Submit Now</Button>
       <Button>Press Submit</Button>

       <Input id='name' label='Name' type='text' placeholder='Enter Name' />
       <Input id='email' label='Email' type='text' placeholder='Enter Email' />
       <Input id='phone' label='Phone' type='text' placeholder='Enter Phone' />
    </div>
  )
}

export default Signup