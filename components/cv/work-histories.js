export default function WorkHistories({ items }) {
  return (
    <div className='block'>
      <div className='title'>Work History</div>
      <div className='content'>
        {items.map((item, index) => {
          return (
            <div key={index} className='card'>
              <div className='date'>{item.date}</div>
              <div className='position'>{item.position}</div>
              <div className='company'>{item.company}</div>
              {item.descriptions.map((description, indexDescription) => (
                <p key={indexDescription}>{description}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
