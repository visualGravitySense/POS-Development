import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CourseForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [course, setCourse] = useState({
    title: '',
    subtitle: '',
    description: '',
    price: 0,
    category: '',
    level: 'All Levels',
    whatYouWillLearn: [''],
    prerequisites: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (e, index, field) => {
    const newArray = [...course[field]];
    newArray[index] = e.target.value;
    setCourse(prev => ({
      ...prev,
      [field]: newArray
    }));
  };

  const addArrayItem = (field) => {
    setCourse(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (index, field) => {
    const newArray = [...course[field]];
    newArray.splice(index, 1);
    setCourse(prev => ({
      ...prev,
      [field]: newArray
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!course.title || !course.description || !course.category) {
      setError('Please fill in all required fields');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post('/api/courses', course, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setLoading(false);
      navigate(`/courses/${response.data._id}/edit`);
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.error || 'Failed to create course');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">
            Subtitle
          </label>
          <input
            type="text"
            name="subtitle"
            value={course.subtitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">
              Price ($) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={course.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              min="0"
              step="0.01"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={course.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">Select Category</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
              <option value="Marketing">Marketing</option>
              <option value="Photography">Photography</option>
              <option value="Music">Music</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">
            Level
          </label>
          <select
            name="level"
            value={course.level}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="All Levels">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">
            What You Will Learn
          </label>
          {course.whatYouWillLearn.map((item, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(e, index, 'whatYouWillLearn')}
                className="flex-grow border border-gray-300 rounded-l px-3 py-2"
                placeholder="e.g., Build a complete web application"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'whatYouWillLearn')}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-r"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('whatYouWillLearn')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded text-sm"
          >
            + Add Learning Objective
          </button>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-2">
            Prerequisites
          </label>
          {course.prerequisites.map((item, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(e, index, 'prerequisites')}
                className="flex-grow border border-gray-300 rounded-l px-3 py-2"
                placeholder="e.g., Basic JavaScript knowledge"
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'prerequisites')}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-r"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('prerequisites')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded text-sm"
          >
            + Add Prerequisite
          </button>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Course'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;