export default function NumberBlock({ index, title, list }) {
  return (
    <div class='number-block'>
      <div class='number'>{index}</div>
      <article>
        <div class='title'>{title}</div>
        <div class='content'>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
