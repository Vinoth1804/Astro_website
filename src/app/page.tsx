// src/app/page.tsx
import Layout from './Layout';  // Import the Layout component
import Menu from './component/menu';  // Optional Menu component if needed
import Introduction from './component/Introduction';  // Add the Introduction component if you want
import DynamicBackground from './component/bgimage';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section or other content */}


      {/* Add the Introduction Section */}
      <DynamicBackground />
      <Menu />
      <Introduction />

  
    </Layout>
  );
};

export default Home;
