const fetchSearch = async ({queryKey}) => {
  const {location, animal, breed} = queryKey[1]

  const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

  if (!res.ok) {
    throw new Error(`fetch no ok ${location} ${animal} ${breed}`);
  }

  return res.json();
}

export default fetchSearch;