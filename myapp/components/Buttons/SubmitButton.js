'use client'
import React from 'react'

const SubmitButton = ({ onClick, loading }) => {
  return (
    <button type="button" onClick={onClick} disabled={loading}>
    {loading ? 'Loading...' : 'Create'}
  </button>
  )
}

export default SubmitButton