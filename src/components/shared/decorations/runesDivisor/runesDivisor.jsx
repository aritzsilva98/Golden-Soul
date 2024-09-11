import { runes } from '../../../../data/data'

const RuneDivisor = () => {
  return (
    <div className='chain-divider my-8 pb-12'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 240 10'
        className='mx-auto pt-8'
      >
        <g fontSize='8' textAnchor='middle' fill='black'>
          {runes.map((rune, index) => (
            <text x={10 + index * 20} y='8' key={index}>
              {rune}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default RuneDivisor
