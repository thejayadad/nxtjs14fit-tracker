'use client'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";


const ExerciseAccorin = ({name, id}) => {
  return (
    <Accordion variant="splitted">
        <AccordionItem key={id} name={name} />

    </Accordion>
  )
}

export default ExerciseAccorin