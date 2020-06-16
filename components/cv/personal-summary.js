export default function PersonalSummary({ text }) {
  return (
    <div className='block'>
      <div className='title'>Personal Summary</div>
      <div className='content'>{text}</div>
    </div>
  );
}
