import React from 'react'
import Swal from 'sweetalert2'

function Profile() {
  const updateUser=()=>{
    Swal.fire({
      title: 'success',
      text: 'User Details Updated',
      icon: 'Success',
      confirmButtonText: 'back'
    })
  }
  return (
    <div>
      <div className='text-center'>
        <h3 className='m-5'>My Profile</h3>

        <label>
          <input type='file' style={{display:'none'}}/>
          <img width={'100px'} src="https://w1.pngwing.com/pngs/132/484/png-transparent-circle-silhouette-avatar-user-upload-pixel-art-user-profile-document-black.png" alt=""/>
        </label>
        <div className='mx-5 px-5'>
        <input type="text" placeholder='Name' className='form-control mb-2' />
        <input type="text" placeholder='Github' className='form-control mb-2' />
        <input type="text" placeholder='Live Link' className='form-control mb-2' />
        <button className='btn btn-dark m-4' onClick={updateUser}>update</button>
        </div>
      </div>
    </div>
  )
}

export default Profile