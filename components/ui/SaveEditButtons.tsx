import React from 'react'
import { Button } from '@tremor/react';
import { PencilIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';

// Handle Edit Button
const handleEdit = () => {
  console.log('edit button clicked!')
}

// Handle Save Button
const handleSave = () => {
  console.log('save button clicked!')
}

function SaveEditButtons() {
  return (
    <div className='flex space-x-3'>
      <Button
          text="Edit"
          icon={PencilIcon}
          iconPosition="left"
          size="sm"
          color="gray"
          importance="secondary"
          handleClick={handleEdit}
          disabled={false}
          marginTop="mt-0"
      />
      <Button
          text="Save"
          icon={CloudArrowDownIcon}
          iconPosition="left"
          size="sm"
          color="gray"
          importance="secondary"
          handleClick={handleSave}
          disabled={false}
          marginTop="mt-0"
      />
    </div>

  )
}

export default SaveEditButtons