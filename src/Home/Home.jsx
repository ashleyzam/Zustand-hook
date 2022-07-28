import { useMovies } from "../Zustand/zustand";
import {
  Image,
  Heading,
  Button,
  VStack,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { movies } from "../components/Movies/movies";
const Home = () => {
  const { addFav } = useMovies();

  return (
    <Container maxW="5xl">
      <Heading>Movies list</Heading>
      <SimpleGrid columns={[1, null, 3]} gap={5}>
        {movies.map((movie) => (
          <VStack flex="row" p="10" m="10px" key={movie.id}>
            <Image h="xs" src={movie.img} alt={movie.name} />
            <Heading fontSize="30px">{movie.name}</Heading>
            <Button colorScheme="green" onClick={() => addFav(movie)}>
              + Add
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export { Home };
