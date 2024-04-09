import { getRating } from '../../utils'

const charactersAdapter = (originCharacters, favs) => {
    const mappedCharacters = originCharacters.map((originCharacter) => {
        const { id, image, name, status, species, gender } = originCharacter;
        const mappedObj = {
            id,
            image,
            name,
            species,
            status,
            gender,
            rating: getRating(),
            isFav: favs.includes(id)
            // Math.random() > 0.5 ? true : false,
        };

        return mappedObj;
    });
    
    return mappedCharacters;
};

// With JSON DATA MODIFIED
// const charactersAdapter = (originCharacters) => {
//     const mappedCharacters = originCharacters.map((originCharacter) => {
//       const { id, img, name, status, specie, gender } = originCharacter;
//       const mappedObj = {
//         id,
//         image: img,
//         name,
//         species: specie,
//         status,
//         gender,
//         rating: Math.ceil(Math.random() * 9),
//         isFav: Math.random() > 0.5 ? true : false,
//       };

//       return mappedObj;
//     });
//     return mappedCharacters;
//   };

export default charactersAdapter;
