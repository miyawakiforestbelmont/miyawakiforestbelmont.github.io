// src/components/UpdatesList.jsx
import React, { useState, useEffect } from "react";

const UpdatesList = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const loadUpdates = async () => {
      try {
        // Import all JSON files from updates folder
        const updateModules = import.meta.glob("../content/updates/*.json");
        const updatePromises = Object.entries(updateModules).map(
          async ([path, importFn]) => {
            const updateData = await importFn();
            const filename = path.split("/").pop().replace(".json", "");

            return {
              ...updateData.default,
              slug: filename,
            };
          }
        );

        const loadedUpdates = await Promise.all(updatePromises);
        // Sort by date, newest first
        loadedUpdates.sort((a, b) => new Date(b.date) - new Date(a.date));

        setUpdates(loadedUpdates);
      } catch (error) {
        console.error("Error loading updates:", error);
      }
    };

    loadUpdates();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Project Updates</h2>

      {updates.map((update) => (
        <article
          key={update.slug}
          className="mb-8 p-6 bg-white rounded-lg shadow"
        >
          <h3 className="text-2xl font-semibold mb-2">{update.title}</h3>
          <p className="text-gray-600 mb-4">
            {new Date(update.date).toLocaleDateString()}
          </p>
          {update.featured_image && (
            <img
              src={update.featured_image}
              alt={update.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
          )}
          <p className="text-gray-700 mb-4">{update.summary}</p>
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: update.content }}
          />
          {update.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {update.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
};

export default UpdatesList;
