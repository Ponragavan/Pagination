import React, { useEffect, useState } from "react";

const App = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const res = await fetch("https://dummyjson.com/recipes?limit=50");
    const data = await res.json();
    if (data && data.recipes) {
      setRecipes(data.recipes);
    }
  };

  const handlePageChange = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(recipes.length / 5)) {
      setPage(selectedPage);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h3 className="text-center font-bold text-xl mt-2">Pagination Technique</h3>
      <div className="flex justify-center gap-3 my-3 max-mb:gap-1">
        <span
          className={`px-3 py-3 rounded cursor-pointer ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(page - 1)}
        >
          ◀️
        </span>
        <div className="flex items-center gap-1">
          {[...Array(Math.ceil(recipes.length / 5))].map((_, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded cursor-pointer ${
                page === i + 1 ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <span
          className={`px-3 py-3 rounded cursor-pointer ${
            page === Math.ceil(recipes.length / 5)
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          ▶️
        </span>
      </div>
      {recipes.length > 0 && (
        <div className="grid grid-cols-5 gap-10 m-10 my-5 max-md:grid-cols-3 max-mb:grid-cols-2 max-mb:gap-5 max-mb:m-5">
          {recipes.slice(page * 5 - 5, page * 5).map((recipe, index) => {
            return (
              <div
                className="bg-yellow-300 p-5 text-center rounded-md"
                key={index}
              >
                <img src={recipe.image} alt={recipe.name} className="mb-3" />
                <h2 className="text-lg max-mb:text-base">{recipe.name}</h2>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex justify-center gap-3 my-3 max-mb:gap-1">
        <span
          className={`px-3 py-3 rounded cursor-pointer ${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(page - 1)}
        >
          ◀️
        </span>
        <div className="flex items-center gap-1">
          {[...Array(Math.ceil(recipes.length / 5))].map((_, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded cursor-pointer ${
                page === i + 1 ? "bg-gray-300" : "hover:bg-gray-200"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>
        <span
          className={`px-3 py-3 rounded cursor-pointer ${
            page === Math.ceil(recipes.length / 5)
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          ▶️
        </span>
      </div>
    </div>
  );
};

export default App;
