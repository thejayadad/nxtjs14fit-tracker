'use client'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";


const Modals = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
    <Button onPress={onOpen} className="max-w-fit">Open Modal</Button>
    <Modal 
        isOpen={isOpen} 
        placement='bottom'
        onOpenChange={onOpenChange} 
      >
    <ModalContent>
    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
    <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
    </ModalContent>
    </Modal>
    </div>
  )
}

export default Modals