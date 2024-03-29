import Container from '@/components/ui/Container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <Container
      title="Workflows "
      description={"Everything you need to know about workflows"}
    >
     
     <div className="flex flex-row justify-end items-center">
          <Link href={`/workflows/create`}>
            <Button className="mb-5">
              Create&nbsp; +
            </Button>
          </Link>
        </div>
      
    </Container>
  )
}

export default page