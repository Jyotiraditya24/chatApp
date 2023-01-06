import React from "react";
import { Box,Container,Text,Tabs,TabList,TabPanels,Tab,TabPanel,
} from "@chakra-ui/react";


const Homepage = () => {
  return (
    <Container maxW="xl" centerContent fontFamily={"'Lato', sans-serif;"}>
      {/* BOX 1 STARTS HERE */}
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"rgb(0,0,0,0.6)"}
        w="100%"
        m="50px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text textAlign="center" color={"yellow.200"} fontSize="2xl">
          Chat App
        </Text>
      </Box>
      {/* BOX 1 ENDS HERE */}

      {/* BOX2 STARTS HERE */}
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"rgb(0,0,0,0.6)"}
        w="100%"
        m="50px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        color={"white"}
      >
        <Tabs variant="soft-rounded" colorScheme="yellow">
          <TabList mb={"1em"}>
            <Tab w={"50%"}>Login In</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* BOX2 ENDS HERE */}
    </Container>
  );
};

export default Homepage;
