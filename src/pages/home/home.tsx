import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductList } from '../../actions/list';
import { addCartItems } from '../../actions/cart-items';
import { Loading } from '../../pages/common';
import { Box, Button, Image, Flex } from '@chakra-ui/react';
import { ProductListType } from './types';
import { ROUTES } from '../../constants';
import ProductDetails from '../product-details';

const Home = (props: any) => {
  const [cart, setCart] = React.useState<ProductListType[]>([])
  const dispatch = useDispatch()
  const mainList = useSelector((state: any) => state.list);

  React.useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await dispatch(getProductList())
  }

  if (mainList.loading) {
    return <Loading />;
  }

  function handleAddToCart (data: ProductListType) {
    setCart((cart: any) => cart.concat(data))
    dispatch(addCartItems(cart))
  }

  // const handleItemClick = (data: ProductListType) => {
  //   return (
  //     <ProductDetails data={data}/>
  //   )
  // }

  return (
    <>
      <Flex flexWrap='wrap' justifyContent='center' m='10'>
      {mainList.data.map((lists: any) => (
        lists.map((list :ProductListType) => (
          <Box maxW='sm' borderWidth='1px' borderRadius='5' overflow='hidden' m='10' key={list.title}>
            {/* <Link to={ROUTES.DETAILS} state={{ list: list}}> */}
            <Link to={{
                pathname: `${ROUTES.DETAILS}/:${list.title}`,
                list: true
              }}
            >
              <Image src={list.img} />
              <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {list.title}
                  </Box>
                </Box>
              </Box>
            </Link>
            <Box display='flex' justifyContent='space-between'>
              <Box>
                {list.price}
              </Box>
              <Box>
                <Button onClick={() => handleAddToCart(list)}>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        ))
      ))
    }
    </Flex>
  </>
  )
}
export default Home