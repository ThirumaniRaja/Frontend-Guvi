import React, { useState } from 'react'

function Hooks() {
  // state value
  const [country, setCountry] = useState<string>('') // country selection

  // gender selection
  const [gender, setGender] = useState<string>('')

  // function for the dropdown
  function handleCountry(event: React.ChangeEvent<HTMLSelectElement>) {
    setCountry(event.target.value)
  }

  // function for the gender selection
  function handleGender(event: React.ChangeEvent<HTMLInputElement>) {
    setGender(event.target.value)
  }

  return (
    <>
      <select onChange={handleCountry} value={country}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>

      <div>Selected country is: {country}</div>

      <br />
      <br />

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleGender}
            checked={gender === 'Male'}
          />
          Male
        </label>

        <label style={{ marginLeft: 12 }}>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleGender}
            checked={gender === 'Female'}
          />
          Female
        </label>

        <label style={{ marginLeft: 12 }}>
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={handleGender}
            checked={gender === 'Other'}
          />
          Other
        </label>
      </div>

      <div>Selected gender is: {gender}</div>
    </>
  )
}

export default Hooks