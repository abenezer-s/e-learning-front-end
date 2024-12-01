import { useState } from 'react';
import Home from "./components/Home";
import Auth from "./pages/Auth"
import Course from "./pages/Course"
import { Routes, Route } from 'react-router-dom';
import CourseModule from './pages/CourseModule';
import Learnings from './pages/Learnings'
import Lesson from './components/Lesson';
import LessonItem from './components/LessonItem';
import NotFound from './pages/NotFound';
import About from './components/About';
import SearchResults from './pages/SearchResults';
import ContentOverview from './components/ContentOverview';
import Dashboard from './pages/Dashboard';
import Teachings from './pages/Teachings';
import Create from './pages/Create';
import CreateProg from './pages/CreateProg';
import CreateCourse from './pages/CreateCourse';
import CreateModule from './pages/CreateModule';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} > 
        <Route path='/dashboard' element={<Dashboard />}> 
          <Route path='myLearnings' element={<Learnings />} />
          <Route path='myTeachings' element={<Teachings />} />
          <Route path='create' element={<Create />}> 
            <Route path='program' element={<CreateProg />}/>
            <Route path='course' element={<CreateCourse />}/>
            <Route path='module' element={<CreateModule />}/>
          </Route>
        </Route>
      </Route>
      
      <Route path='/auth' element={<Auth />} />
      <Route path='/course' element={<Course />}>
      
        <Route path='module' element={<CourseModule />} >
          <Route path='lesson' element={<LessonItem />} />
        </Route>

      </Route>
      <Route path="*" element={<NotFound />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/search' element={<SearchResults />} />
      
      <Route path='/programs' element={<ContentOverview content="program" />} />
      <Route path='/courses' element={<ContentOverview content="course"/>} />
      
    </Routes>
    
  );
}

export default App;
