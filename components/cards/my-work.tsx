'use client'

import WorkCard from "./work-card";
import MoreCard from "./more-card";
import axios from 'axios'
import { useEffect, useState } from "react";




export default function MyWork() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get('/api/work')
      .then(response => {
        setWorks(response.data);
      })
      .catch(error => {
        console.error('Error fetching work data:', error);
      });
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {works.map((work,index) => (
          <div key={index}>
            <WorkCard work={work} />
          </div>
        ))}
      <MoreCard />
    </div>
  )

}