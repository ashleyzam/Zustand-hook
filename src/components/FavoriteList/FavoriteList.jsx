import React from "react";
import { useMovies } from "../../Zustand/zustand";
import {
  VStack,
  Image,
  Heading,
  Button,
  SimpleGrid,
  Box,
  Container,
} from "@chakra-ui/react";

const FavoriteList = () => {
  const { movies, emptyList, removeMovie } = useMovies();
  return (
    <Container maxW="5xl">
      {!movies.length ? (
        ""
      ) : (
        <Button m={5} colorScheme="yellow" onClick={() => emptyList()}>
          Empty the list
        </Button>
      )}
      {!movies.length ? (
        <Box>There's no favorite movies to show</Box>
      ) : (
        <SimpleGrid columns={[1, null, 3]} gap={5}>
          {movies.map((movie) => (
            <VStack flex="row" p="10" m="10px" key={movie.id}>
              <Image h="xs" src={movie.img} alt={movie.name} />
              <Heading fontSize="30px">{movie.name}</Heading>
              <Button colorScheme="red" onClick={() => removeMovie(movie.id)}>
                - Remove
              </Button>
            </VStack>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export { FavoriteList };
