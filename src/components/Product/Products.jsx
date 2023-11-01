/* eslint-disable react/prop-types */
export default function Products({list, removeItem}) {
  return (
    <div>
      {list.map((item) =>{
        return (
          <div key={item.id}>
            <h2>{item.image}</h2>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <button onClick={() => removeItem(item.id) }>Delete</button>
          </div>
        )
      })}
    </div>
  )
}