import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Privacy = () => {
  return (
    <Box bg="gray.100" minH="100vh" p={4}>
      <Heading as="h1" textAlign="center" mb={8}>
        Privacy Policy
      </Heading>
      <Text fontSize="lg" mb={4}>
        At Heyoo, your privacy is of utmost importance to us. We are committed to ensuring that your personal information is protected and secure.
      </Text>
      <Text mb={4}>
        <strong>What Information We Collect:</strong> We collect only the necessary details such as your name, phone number, and interests to create your profile and provide a personalized experience.
      </Text>
      <Text mb={4}>
        <strong>How We Use Your Information:</strong> Your information is used to enhance your experience, such as tailoring content to your interests. We do not sell or share your information with third parties.
      </Text>
      <Text mb={4}>
        <strong>Data Security:</strong> We use industry-standard encryption to ensure your data is safe. Regular audits and updates are performed to maintain security.
      </Text>
      <Text>
        If you have any questions about our privacy policy, please contact us at <strong>support@nanasambia.com</strong>.
      </Text>
    </Box>
  );
};

export default Privacy;
