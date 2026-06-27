import React, { useState } from 'react'

function Verify() {
  const [otp, setOtp] = useState<string>('')
  const [status, setStatus] = useState<string>('Order Placed')

  function verifyOTP() {
    if (otp === '123456') {
      alert('OTP is verified')
    } else {
      alert('invalid OTP')
    }
  }

  function nextStatus() {
    if (status === 'Order Placed') {
      setStatus('Preparing Food')
    } else if (status === 'Preparing Food') {
      setStatus('Out for Delivery')
    } else if (status === 'Out for Delivery') {
      setStatus('Delivered')
    }
  }

  return (
    <>
      <div>
        <input
          maxLength={6}
          value={otp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button onClick={verifyOTP}>Verify</button>
      </div>

      <div style={{ marginTop: 12 }}>
        <div>Current status: {status}</div>
        <button onClick={nextStatus} style={{ marginTop: 8 }}>
          Next Status
        </button>
      </div>
    </>
  )
}

export default Verify