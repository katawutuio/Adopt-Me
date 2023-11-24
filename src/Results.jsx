import Pet from './Pet'

const Results = ({pets}) => {
  console.log(pets)

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
              key={pet.id}
            />
          ))
        )
      }
    </div>
  )
}

export default Results