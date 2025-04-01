import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative pt-[56.25%] bg-gray-200">
        {course.thumbnail ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-500">
            No thumbnail
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm">
          {course.isPublished ? (
            <span className="text-green-600">Published</span>
          ) : (
            <span className="text-yellow-600">Draft</span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 truncate">{course.title}</h2>
        <p className="text-sm text-gray-500 mb-3">{course.category}</p>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-4">
              {course.modules.length} {course.modules.length === 1 ? 'Module' : 'Modules'}
            </span>
            <span className="text-sm text-gray-700">
              {course.totalDuration} min
            </span>
          </div>
          <div className="text-lg font-bold">
            ${course.discountPrice || course.price}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            to={`/courses/${course._id}/edit`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-center text-sm"
          >
            Edit
          </Link>
          <Link 
            to={`/courses/${course._id}`}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-3 rounded text-center text-sm"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;