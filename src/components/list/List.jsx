import React from 'react'
import "./list.scss";
// import { listData } from '../../lib/dummyData';
import Card from '../card/Card';
function List({posts}) {

  
  return (
    <div className='List'>
        {posts.map(item=> (
            <Card key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default List