import React, { useState } from 'react'
import { Input } from 'antd';

function SearchFeature(props) {
    const [SearchTerm, setSearchTerm] = useState('');
    const searchHandler = (e) => {
        setSearchTerm(e.currentTarget.value);
        props.refreshFunction(e.currentTarget.value);
    }
    return (
        <div>
            <Input placeholder="Basic usage" onChange={searchHandler} value={SearchTerm}/>
        </div>
    )
}

export default SearchFeature
