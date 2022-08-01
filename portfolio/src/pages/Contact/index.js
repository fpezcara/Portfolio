import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="xl">
      <Heading as="h2" mt={2} mb={8}>
        Contact me:
      </Heading>
      <Box p="5" as="form" justify="center">
        <FormControl id="first-name">
          <FormLabel>First name: </FormLabel>
          <Input
            placeholder="Enter your first name"
            type="text"
            id="first-name"
          />
        </FormControl>
        <FormControl id="last-name">
          <FormLabel>Last name:</FormLabel>
          <Input
            placeholder="Enter your last name"
            type="text"
            id="last-name"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>E-mail address:</FormLabel>
          <Input
            placeholder="Enter your e-mail address"
            type="text"
            id="email"
          />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Leave a message:</FormLabel>
          <Textarea
            placeholder="Please leave a message"
            type="text"
            id="message"
          ></Textarea>
        </FormControl>
        <Button type="submit" mt={2}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
