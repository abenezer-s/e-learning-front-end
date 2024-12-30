import { useEffect, useState } from 'react';
import Home from "./components/Home";
import Auth from "./pages/Auth"
import Course from "./pages/Course"
import { Routes, Route } from 'react-router-dom';
import CourseModule from './pages/CourseModule';
import Learnings from './pages/Learnings'

import LessonItem from './components/LessonItem';
import NotFound from './pages/NotFound';
import About from './components/About';
import SearchResults from './pages/SearchResults';
import ContentOverview from './components/ContentOverview';
import Dashboard from './pages/Dashboard';
import Teachings from './pages/Teachings';
import Create from './pages/create/Create';
import CreateProg from './pages/create/CreateProg';
import CreateCourse from './pages/create/CreateCourse';
import CreateModule from './pages/create/CreateModule';
import CreateQuiz from './pages/create/CreateQuiz';
import Applications from './components/Applications';
import LearningItem from './components/LearningItem';

function App() {
  useEffect (()=>{
    const user = {
      isCreator: null,
      loggedIn: null,
    };
    localStorage.setItem('user', JSON.stringify(user));
  }, [])

  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} > 
            <Route path='/dashboard' element={<Dashboard />}> 
              <Route path='myLearnings' element={<Learnings />} />
              <Route path='myTeachings' element={<Teachings />} />
              <Route path='applications' element={<Applications />} />
            </Route>
          </Route>
        </Routes>

      <Routes>
        <Route path='/create' element={<Create />}> 
              <Route path='program' element={<CreateProg />}/>
              <Route path='course' element={<CreateCourse />}/>
              <Route path='module' element={<CreateModule />}>
                <Route path='quiz' element={<CreateQuiz />} />
              </Route>

        </Route>
      
        <Route path='/auth' element={<Auth />} />
        <Route path='/course' element={<Course />}>

          <Route path='module' element={<CourseModule />} >
            <Route path='learningItem' element={<LearningItem />} />
          </Route>

        </Route>
        <Route path="*" element={<NotFound />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<SearchResults />} />

        <Route path='/program-overview' element={<ContentOverview content="program" />} />
        <Route path='/course-overview' element={<ContentOverview content="course"/>} />
      
      </Routes>        
    </>    
  );
}

export default App;
