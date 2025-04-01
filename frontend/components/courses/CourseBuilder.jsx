import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ModuleEditor from './ModuleEditor';

const CourseBuilder = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newModuleTitle, setNewModuleTitle] = useState('');
  const [addingModule, setAddingModule] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/courses/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch course');
        setLoading(false);
        console.error(err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleAddModule = async () => {
    if (!newModuleTitle.trim()) {
      return;
    }

    try {
      setAddingModule(true);
      const response = await axios.post(`/api/courses/${id}/modules`, {
        title: newModuleTitle
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      setCourse(response.data);
      setNewModuleTitle('');
      setAddingModule(false);
    } catch (err) {
      console.error(err);
      setAddingModule(false);
    }
  };

  const handleUpdateModule = (updatedModule) => {
    setCourse(prevCourse => ({
      ...prevCourse,
      modules: prevCourse.modules.map(m => 
        m._id === updatedModule._id ? updatedModule : m
      )
    }));
  };

  const handleDeleteModule = async (moduleId) => {
    if (!window.confirm('Are you sure you want to delete this module?')) {
      return;
    }

    try {
      // In a real app, you'd call the API to delete the module
      // For this example, we'll just update the state
      setCourse(prevCourse => ({
        ...prevCourse,
        modules: prevCourse.modules.filter(m => m._id !== moduleId)
      }));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-10">Loading course content...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!course) return <div className="text-center py-10">Course not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Link to="/courses" className="text-blue-600 hover:underline mb-2 inline-block">
            ← Back to courses
          </Link>
          <h1 className="text-2xl font-bold">{course.title}</h1>