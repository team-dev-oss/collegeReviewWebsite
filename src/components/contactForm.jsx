"use client"
import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
  // import { sendContactForm } from "../lib/api";
import { contactform } from "@/lib/action";
import { useEmailContext } from "@/context/EmailContext";
  
 
  
  export default function ContactForm() {
    
    let {isEmpty} = useEmailContext();
    const initValues = { name: "", email: isEmpty, phone: "Your Number", message: "" };
  
    const initState = { isLoading: false, error: "", values: initValues };

    const [state, setState] = useState(initState);
    const { values, isLoading, error } = state;
  
    const handleChange = ({ target }) =>
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));

      
    return (
      <Container id="contactform" maxW="450px" mt={12}>
        <Heading>Contact</Heading>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <form action={contactform}  >
  
        <FormControl isRequired  mb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
  
        <FormControl isRequired  mb={5}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            
            
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
  
        <FormControl
          mb={5}
          isRequired
        >
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            name="phone"
            errorBorderColor="red.300"
            value={values.phone}
            onChange={handleChange}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
  
        <FormControl
          mb={5}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            type="text"
            name="message"
            rows={4}
            errorBorderColor="red.300"
            value={values.message}
            onChange={handleChange}
           
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
  
        <Button
          variant="outline"
          colorScheme="blue"
          isLoading={isLoading}
          disabled={
            !values.name || !values.email || !values.phone 
          }
          // onClick={onSubmit}
          type="submit"
        >
          Submit
        </Button>
        </form>
      </Container>
    );
  }