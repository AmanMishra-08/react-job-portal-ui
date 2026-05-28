import React from 'react'
import Card from './components/card'

const App = () => {
   const jobs = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi4Vk21FM38m3NyEa0E2anJEmJanNZVzYNw&s",
    company: "Google",
    posted: "5 Days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://media.licdn.com/dms/image/v2/D4D12AQF083mMinXCtQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686067344413?e=2147483647&v=beta&t=nm30MQ8OI-9VSUXR95shyABNZfOmt-f5f9R4zf9_yeU",
    company: "Amazon",
    posted: "2 Weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    company: "Meta",
    posted: "1 Week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpoGhnWW9wN-P9X7Ckt3y0snA59WDlcsjeHg&s",
    company: "Apple",
    posted: "3 Days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "California, USA"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s",
    company: "Netflix",
    posted: "10 Days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Los Angeles, USA"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
    company: "Microsoft",
    posted: "1 Month ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Seattle, USA"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sYXeIVDVKMwpoYJh-dtKXdnylp4I1Tb7Jw&s",
    company: "Tesla",
    posted: "4 Days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Austin, USA"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    company: "Adobe",
    posted: "2 Weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
    company: "Uber",
    posted: "6 Days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrp5-KbTXvCQaA9WQLdMq8NBRMmRdC1LwjQ&s",
    company: "Airbnb",
    posted: "3 Weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "San Francisco, USA"
  }
];
console.log(jobs);
  return (
    <div className='Parent'>
      {jobs.map(function(elem){
          return <Card  company={elem.company} posted={elem.posted}  post={elem.post} location={elem.location} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2} img={elem.brandlogo}/>
      })}
    
      
    </div>
  )
}

export default App
