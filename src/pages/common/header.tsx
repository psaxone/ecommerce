import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, 
  ButtonGroup, 
  Flex,
  Box,
  Heading,
} from '@chakra-ui/react'
import { FaShoppingCart } from 'react-icons/fa'
import { ROUTES } from '../../constants';

const Header = () => {

  return (
    <Flex 
        bg='teal' 
        h='100' 
        justifyContent={'space-between'} 
        alignItems={'center'}
      >
        <Link to={ROUTES.HOME}>
          <Box ml='10'>
            <Heading size='md'>Home</Heading>
          </Box>
        </Link>
        <Link to={ROUTES.CART}>
        <ButtonGroup  alignItems={'center'} mr='10'>
          <Button 
            leftIcon={<FaShoppingCart/>}
            h='50'
            w='100'
          >
            Cart
          </Button>
        </ButtonGroup>
      </Link>
    </Flex>
  )
}
export default Header;