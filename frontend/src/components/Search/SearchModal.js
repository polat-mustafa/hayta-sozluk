import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Link
  } from '@chakra-ui/react'
import unidecode from 'unidecode';

import { fetchAllCategories } from '../../features/categories/index'
import { useDispatch, useSelector } from 'react-redux'

function SearchModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const dispatch = useDispatch()

    const categoriess = useSelector(state => state.category.categories)


    const [searchResult, setSearchResult] = useState('#')

    console.log("category", categoriess);
    console.log("searchResult", searchResult);

  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])

  const handleSearch = (e) => {
    const searchValue = e;
    const searchName = categoriess.map(category => category.name)
    const searchResults = searchName.filter(name => unidecode(name).toLowerCase().includes(unidecode(searchValue).toLowerCase()))
    console.log("searchResults", searchResults);
    setSearchResult(searchResults[0]);
  };


  const uniCode = searchResult && unidecode(searchResult)

    

    return (
      <>
        
        <Button onClick={onOpen} variant='ghost' style={{color: 'orange'}} _hover='none'>&#x1F50E; Search</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{margin: '0 auto'}}>Merak ettiğin bir boş mu var?</ModalHeader>
            <Input
        placeholder="Search"
        style={{
          width: "300px",
          height: "35px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "5px",
          underline: "none",
          textDecoration: "none",
          color: "orange",
          fontWeight: "revert-layer",
          fontFamily: "cursive",
          margin: "0 auto",

        }}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
            <ModalCloseButton />
            <ModalBody>
              {
                searchResult !== [] && <Link href={`
                /${uniCode}
                `} style={{textDecoration: "none"}}><span style={{
                  color: "orange",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  width: "100%",
                  height: "100%",
                  padding: "10px",
                  display: "flex",

                }}>{
                  searchResult && searchResult
                }</span></Link> 
              }

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default SearchModal