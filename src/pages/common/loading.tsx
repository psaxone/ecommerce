import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner color='black' thickness='4px' width={'100px'} h='100' />
    </Box>
  );
};

export default Loading;