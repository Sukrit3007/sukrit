'use client'

import React, { useEffect, useState } from 'react'
import MoreCard from './more-card'
import WorkCard from './work-card'
import { client } from '@/lib/sanity'
import { useQuery, useIsFetching } from "@tanstack/react-query";
import CardSkeleton from '../loading/card-skeleton'

const MyWork = () => {
  const query= `*[_type == 'mywork']`

  const {data:work, isLoading} = useQuery<any>({
    queryKey:['work'],
    queryFn: () =>
      client.fetch(query)
  })

  if (isLoading) {
    return (
      <CardSkeleton/>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {work?.map((work:any) => (
        <div key={work._id}>
          <WorkCard work={work} />
        </div>
      ))}
      <MoreCard />
    </div>
  )
}

export default MyWork
