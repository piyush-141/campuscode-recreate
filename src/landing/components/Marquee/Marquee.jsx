import './Marquee.css'

const labels = ['INNOVATION', 'COMMUNITY', 'IDEAS', 'PEOPLE', 'PRODUCTS']
const items = [...labels, 'INNOVATION', ...labels]

export default function Marquee() {
  return (
    <div className="mq-wrap" aria-label="Innovation, community, ideas, people, products">
      <div className="mq-track" aria-hidden="true">
        {items.map((label, i) => (
          <span className="mq-item" key={`${label}-${i}`}>
            {label}<span className="mq-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
