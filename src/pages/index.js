import { Box } from "@chakra-ui/layout";
import { Header } from "../components/header";
import { TopWorks } from "../components/works";
import { Footer } from "../components/footer";
const Index = () => (
  <Box>
    <Box>
      <Header />
    </Box>
    <Box>
      <TopWorks />
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
);

export default Index;
