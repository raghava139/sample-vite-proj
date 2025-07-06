import React from 'react'
import UserComponent from './userComponent'
import { WithLogger } from './WithLogger'

const EnhancedComponent = () => {
    const EnhancedData = WithLogger(UserComponent)
    
  return (
    <>
    <div>EnhancedComponent</div>
    <EnhancedData name='raghavendra'/>
    </>
  )
}

export default EnhancedComponent