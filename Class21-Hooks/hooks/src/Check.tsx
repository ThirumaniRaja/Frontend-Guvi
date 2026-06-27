
import React, { useState } from 'react'

function Check() {
  const [skills, setSkills] = useState<string[]>([])

  function handleSkill(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked, value } = event.target
    if (checked) {
      setSkills((prev) => [...prev, value])
    } else {
      setSkills((prev) => prev.filter((s) => s !== value))
    }
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value="React"
          onChange={handleSkill}
          checked={skills.includes('React')}
        />
        React
      </label>

      <label style={{ marginLeft: 12 }}>
        <input
          type="checkbox"
          value="Angular"
          onChange={handleSkill}
          checked={skills.includes('Angular')}
        />
        Angular
      </label>

      <label style={{ marginLeft: 12 }}>
        <input
          type="checkbox"
          value="Vue"
          onChange={handleSkill}
          checked={skills.includes('Vue')}
        />
        Vue
      </label>

      <div style={{ marginTop: 12 }}>
        Selected skills: {skills.length ? skills.join(', ') : 'None'}
      </div>
    </>
  )
}

export default Check
