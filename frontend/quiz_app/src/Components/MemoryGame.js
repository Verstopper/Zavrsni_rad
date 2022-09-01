import Cards from '../MemoryGame/Cards'
import '../MemoryGame/memory.css'

function MemoryGame() {
  return (
    <div className='bodyM'>
      <div className='containerM'>
      <h1 className="h1M text-dark">Wiki memory</h1>
      <Cards />
    </div>
    </div>
  );
}

export default MemoryGame;
