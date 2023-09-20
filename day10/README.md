## Day 10

## Topics - Context  api  to be continue 

## Different steps Involve in set up (I-B-RR-L-D)

1. I- Install React Router DOM library(react-router-dom)
2. B- BrowserRouter (Provider) around your application
3. RR - Routes and Route Components 

4. L - Link Creating Diffrent Link

5. D - Dynamic Routes and useParams hook

-------------------- Step ---------------

1. - Instal
npm i react-router-dom@6.3.0
2. - Browser Router
In index.js import browserrouter from react-router-dom
3. - RR
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/user' element={<User/>}></Route>
      </Routes>

4. - Link






path - when the path is "/"
element - what do you want to render to user 