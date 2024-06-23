import Result from './result'
import {notFound} from 'next/navigation'

export const generateMetadata = ({ params }) => {
  if(params.slug.length<2){
    notFound()
  }
  let city = params.slug[0];
  let state = params.slug[1];
  let title = `Restaurants in ${city.toUpperCase()} City, ${state.toUpperCase()} State`;
  let description = `Explore the best dining options in ${city}, ${state}, catering to various dietary preferences including vegan, vegetarian, gluten-free, and more.`;

  return {
    title,
    description
    // alternates: {
    //   canonical: `https://yourwebsite.com/${encodeURIComponent(city)}/${encodeURIComponent(state)}`,
    // },
    // openGraph: {
    //   title,
    //   description,
    //   type: 'website',
    //   url: `https://localhost:3000/${encodeURIComponent(city)}/${encodeURIComponent(state)}`,
    //   images: [
    //     {
    //       url: 'https://https://localhost:3000/og-image.jpg',
    //       width: 800,
    //       height: 600,
    //       alt: `${city} ${state} Restaurants`,
    //     },
    //   ],
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   site: '@yourtwitterhandle',
    //   title,
    //   description,
    //   image: 'https://https://localhost:3000/twitter-image.jpg',
    // },
  };
};

const page = ({params}) => {
  if(params.slug.length<2){
    notFound()
  }
  return (
    <Result params={params} />
  )
}

export default page