import React from 'react';
import { Box, Heading,Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const Faq = () => {
  return (
    <Box bg="gray.100" minH="100vh" p={4}>
      <Heading as="h1" textAlign="center" mb={8}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do I create an account on Nanasambia?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            You can create an account by signing up with your phone number and verifying it using the OTP.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is the OTP, and why do I need it?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            OTP is a one-time password used to verify your phone number and secure your account.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What information do I need to provide for my profile?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            You only need to provide your name, interests, and a valid phone number to get started.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Can I change my interests after signing up?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Yes, you can update your interests from your profile settings at any time.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Is my personal information safe during the sign-up process?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            Yes, we take data privacy seriously and use encryption to secure your information.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What happens after I've completed the sign-up process?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            After signing up, you can explore feeds, join discussions, and contribute to the community.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How do I manage my privacy settings?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            You can access and manage privacy settings in the "Settings" section of your profile.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How does this platform ensure the safety of children in online communities?
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            We have strict moderation policies and tools to ensure a safe and positive environment for all users.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Faq;
