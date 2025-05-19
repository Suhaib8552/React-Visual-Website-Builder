import React from 'react'

function Signupform() {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 sidebar-form">
        <label className="fieldset-legend text-center  text-xl">Sign Up Form</label>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <label className="label">Confirm Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Sign Up</button>
      </fieldset>
    </div>
  )
}

export default Signupform