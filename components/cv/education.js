export default function Education({ items }) {
  return (
    <div className='block'>
      <div className='title'>Education</div>
      <div className='content'>
        {items.map((item, index) => {
          return (
            <div key={index} className='card'>
              <div className='date'>{item.date}</div>
              <div className='title'>{item.title}</div>
              <div className='school'>{item.school}</div>
              <div className='description'>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
