
import { useState } from "react";
import {useFetchSpacialNewsQuery } from "../app/features/News/NewsSlice"
import TextSlice from "../utlts/TextSlice"
import INews from "../interfaces/News";
import { Loading } from "../ui/Loading";
const newsCategories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];
const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const { data, isLoading } = useFetchSpacialNewsQuery({ category: selectedCategory });
  if (isLoading) return <Loading/>;
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  
const ArticleCard = ({ article }: { article: INews }) => (
  <div className="bg-white rounded-lg shadow-lg p-2 cursor-pointer" onClick={() => window.open(article.url, '_blank')}>
    <div className="overflow-hidden">
      <img
        src={article.urlToImage ?? ''}
        alt={article.title}
        className="object-cover w-full h-56 rounded-lg hover:scale-110"
      />
    </div>
    <div className="mt-1 p-1">
      <p className="text-sm opacity-75">{article.source.name}</p>
      <h3 className="text-2xl font-semibold py-1"><TextSlice text={article.title} /></h3>
      <p className="text-slate-500 py-1">{article.description}</p>
    </div>
  </div>
);

 

  return (
    <div className="">
      <div className="text-center">
        {newsCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className="bg-slate-800 text-white text-2xl px-2 py-2 rounded-lg m-1 hover:bg-slate-600 hover:scale-105"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
        {data?.articles.slice(0, 6).map((article: INews, index: number) =>(
          <ArticleCard key={index} article={article}  />
        ))}
      </div>
    </div>
  );
};



export default News