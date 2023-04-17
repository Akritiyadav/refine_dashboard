import React from 'react'
import { useList } from '@pankod/refine-core'
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard} from 'components'
import { Typography, Box, Stack } from '@pankod/refine-mui'

const Home = () => {

  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
        pagination: {
            pageSize: 4,
        },
    },
});

const latestProperties = data?.data ?? [];

if (isLoading) return <Typography>Loading...</Typography>;
if (isError) return <Typography>Something went wrong!</Typography>;
   
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D" >
        Dashboard
      </Typography>

      <Box mt="20px"display="flex" flexWrap="wrap" gap={4} >
      <PieChart
          title="Properties for Sale"
          value={684}
          series={[75,25]}
          colors={['#475be8','#e4e8ef']}
          />
          <PieChart
          title="Properties for Rent"
          value={540}
          series={[60,45]}
          colors={['#475ae8','#e4b8ef']}
          />
          <PieChart
          title="Total Customers"
          value={5684}
          series={[75,25]}
          colors={['#275be8','#e4e8ef']}
          />
          <PieChart
          title="Properties for cities"
          value={555}
          series={[75,25]}
          colors={['#475be9','#e4c8ef']}
          />
      </Box>
     <Stack mt="25px" width="100%" direction={{xs:'column',lg:'row' }} gap={4}>
        <TotalRevenue/>
        <PropertyReferrals/>
     </Stack>
     
     <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Latest Properties
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {latestProperties.map((property) => (
                        <PropertyCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                    ))}
                </Box>
            </Box>
    
    </Box>


  )
}

export default Home
