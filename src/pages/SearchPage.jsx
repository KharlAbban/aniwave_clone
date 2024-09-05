import React from 'react'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
    const {searchTerm} = useParams();

  return (
    <div>SearchPage. Results for: {searchTerm}</div>
  )
}

export default SearchPage