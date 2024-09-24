import { runes } from '../../../data/data'

const RuneDivisor = () => {
  return (
    <div className='chain-divider my-8 pb-12 text-center flex items-center justify-center w-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 240 10'
        className='mx-auto pt-8'
      >
        <g fontSize='4' textAnchor='middle' className="text-center w-full">
          {runes.map((rune, index) => (
            <text x={5 + index * 10} y='8' key={index}>
              {rune}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default RuneDivisor
