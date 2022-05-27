import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCartItems } from '../../actions/cart-items';
import { Loading } from '../../pages/common';
import { Box, Button, Image, Flex, StatHelpText } from '@chakra-ui/react';
import { ProductListType } from '../home/types';
import { ROUTES } from '../../constants';

const Cart = () => {
  const items = useSelector((state: any) => state.cartItems);
  
  if (items.loading) {
    return <Loading />;
  }

  return (
    <>
      <Flex flexDirection='column' justifyContent='center' m='10'>
        {items.data.map((item: ProductListType) => (
        <Box maxW='sm' borderWidth='1px' borderRadius='5' overflow='hidden' m='10' key={item.img}>
          <Box p='6'>
            <Box display='flex' alignItems='center' justifyContent='space-around'>
              <Image src={item.img} h='50'/>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {item.title}
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {item.price}
              </Box>
            </Box>
          </Box>
        </Box>
          

        ))}
          <Link to={ROUTES.CHECKOUT}>
            <Button float={'right'}>
              Checkout
            </Button>
          </Link>
      </Flex>
    </>
  )
}
export default Cart