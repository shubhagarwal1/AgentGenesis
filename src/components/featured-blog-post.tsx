import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { BlogParams } from '@/types/blog';
import Link from 'next/link';

const FeaturedBlogPost = ({ title, slug, imageUrl }: BlogParams) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-8 items-center text-white rounded-lg p-8 shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 animate-liquid"></div>
      <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link href={`/blogs/${slug}`}>
          <Button className="mt-4 py-2 px-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100">
            Read More
          </Button>
        </Link>
      </div>
      <Image
        width={300}
        height={200}
        src={imageUrl}
        alt="Featured Post Image"
        className="rounded-lg relative z-10 w-full md:w-auto"
      />
    </div>
  );
};

export default FeaturedBlogPost;
