import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductList } from '../../actions/list';
import { addCartItems } from '../../actions/cart-items';
import { Loading } from '../../pages/common';
import { Box, Button, Image, Flex } from '@chakra-ui/react';
import { ProductListType } from '../home/types';


const ProductDetails = () => {
  const [cart, setCart] = React.useState<ProductListType[]>([])
  const { list } = useParams()
  const dispatch = useDispatch()
  const mainList = useSelector((state: any) => state.list);

  React.useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await dispatch(getProductList())
  }

  const item = mainList?.data[0].filter((id) => {
    return id.title.includes(list.substring(1))
  })

  function handleAddToCart (data: ProductListType) {
    setCart((cart: any) => cart.concat(data))
    dispatch(addCartItems(cart))
  }

  if (mainList.loading) {
    return <Loading />;
  }
  
  return (
    <Flex flexWrap='wrap' justifyContent='center' m='10'>
      <Box maxW='sm' borderWidth='1px' borderRadius='5' overflow='hidden' m='10' key={item[0].img}>
        <Box p='6'>
          <Image src={item[0].img} />
          <Box >
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
            {item[0].title}
          </Box>
        </Box>
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          {item[0].price}
        </Box>
        <Box>
          <Button onClick={() => handleAddToCart(item[0])}>
            Add to cart
          </Button>
        </Box>
        </Box>
      </Box>
    </Flex>
  )
}
export default ProductDetails