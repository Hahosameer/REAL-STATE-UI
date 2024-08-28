import React from 'react'
import "./list.scss";
import { listData } from '../../lib/dummyData';
import Card from '../card/Card';
function List() {
  return (
    <div className='List'>
        {listData.map(item=> (
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default List