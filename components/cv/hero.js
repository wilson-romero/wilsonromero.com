export default function Hero({ name, subTitle, linkedIn, twitter, gitHub }) {
  return (
    <div className='hero'>
      <h1>
        {name.first} <span>{name.last}</span>
      </h1>
      <p>{subTitle}</p>
      <div className='social'>
        <span className='icon l'>
          <a href={linkedIn.url}>{linkedIn.text}</a>
        </span>
        <span className='icon t'>
          <a href={twitter.url}>{twitter.text}</a>
        </span>
        <span className='icon g'>
          <a href={gitHub.url}>{gitHub.text}</a>
        </span>
      </div>
    </div>
  );
}
