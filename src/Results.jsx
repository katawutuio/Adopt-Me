import Pet from './Pet'

const Results = ({pets}) => {
  return (
    <div className='search'>
      {
        pets.length < 1 ? (
          <h1>Pet not found</h1>
        )
        : (
          pets.map((pet) => (
            <Pet 
              name={pet.name}
              animal={pet.animal}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
              key={pet.id}
            />
          ))
        )
      }
    </div>
  )
}

export default Results