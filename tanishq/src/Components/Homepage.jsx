import React from 'react' 
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import "./Css/Homepage.css"


const Homepage = () =>
{

const router = useNavigate(); 
const {state, dispatch} = useContext(AuthContext);

const logout = () => {
    dispatch({
        type: "Logout"
    })
    router("/login");
}

  return (
    <div>
      <div className="screen">
        <div className="navbar">
            <div className="Left">
                <div>
                    <img src ="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4NiAyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgODYgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojODMyNzI5O30KPC9zdHlsZT4KPHJlY3QgeD0iLTIiIHk9IjMuMiIgY2xhc3M9InN0MCIgd2lkdGg9IjkwLjEiIGhlaWdodD0iMzMiLz4KPGc+Cgk8cGF0aCBpZD0icGF0aDQ0LTIiIGNsYXNzPSJzdDEiIGQ9Ik0yNy41LDIwLjNoMS4zdi05LjZsMCwwYzAuNiwxLjksMy44LDQuMywzLjgsNC4zYzEuNSwxLjQsMi44LDMsMy42LDQuOWwwLDBsMC44LDAuNFY2LjNoLTEuMwoJCXY5LjhsMCwwYy0wLjctMS45LTMuNS00LTMuNS00Yy0xLjctMS41LTMuMS0zLjUtMy44LTUuN2wwLDBsLTAuOC0wLjNMMjcuNSwyMC4zTDI3LjUsMjAuM3ogTTQxLjUsNi4zaDEuOHYxMy45aC0xLjhWNi4zegoJCSBNNDAuNiwyLjJjMC0xLDAuNy0xLjgsMS43LTEuOGMwLDAsMC4xLDAsMC4xLDBjMSwwLDEuNywwLjgsMS43LDEuOGMwLDEtMC44LDEuNy0xLjcsMS44QzQxLjQsNCw0MC42LDMuMiw0MC42LDIuMgoJCUM0MC42LDIuMiw0MC42LDIuMiw0MC42LDIuMkw0MC42LDIuMnogTTU1LjksOS41Yy0wLjUsMC4xLTEtMC4xLTEuMy0wLjRjLTAuNi0wLjYtMC45LTEuMi0xLjctMS43Yy0wLjktMC41LTItMC41LTIuOSwwLjEKCQlDNDkuMyw4LDQ5LjIsOSw0OS44LDkuNmMwLjEsMC4xLDAuMSwwLjIsMC4yLDAuMmMxLjYsMS4xLDMuMiwyLDQuOSwyLjhjMy40LDEuOCw0LDQuOSwxLjYsNi42Yy0yLDEuMy00LjUsMS41LTYuNywwLjYKCQljLTEuNy0wLjYtMy0yLjEtMy4zLTMuOWMwLjksMCwxLjYsMC40LDIsMS4yYzAuNSwwLjgsMS4zLDEuNCwyLjIsMS44YzEuMywwLjUsMi44LDAuNSw0LjEtMC4yYzEtMC41LDEuMy0xLjgsMC44LTIuNwoJCWMtMC4xLTAuMi0wLjMtMC41LTAuNi0wLjZjLTIuMS0yLTQuNy0yLjYtNi4yLTRjLTEuMy0xLjMtMS43LTIuNy0wLjQtNC4yYzEuOC0xLjQsNC4yLTEuNCw2LTAuMUM1NS4yLDcuNyw1NS43LDguNiw1NS45LDkuNQoJCUw1NS45LDkuNXogTTYxLjEsMTkuOUg2M3YtMy44aDUuMXY0SDcwVjYuM2gtMS45VjE1SDYzVjYuM2gtMS45TDYxLjEsMTkuOXogTTEuOCw3LjJDMS41LDYuNywxLjksNS40LDMuNCw1LjVIMTEKCQljMSwwLjEsMS41LTAuNiwyLjgtMC41Yy0xLjIsMC44LTIsMi0yLjIsMy41bDAsMGwtMS4yLDEwbDAsMGMtMC41LDMuOCwxLDcuNiwzLjgsMTAuMmMtMS45LDAuMy01LjktMi43LTYtOC4xCgkJQzgsMTcuOCw4LjcsOS4yLDguNyw5LjJjMC4xLTAuOSwwLjUtMS43LDEuMS0yLjRIMi43QzIuMiw2LjgsMiw2LjgsMS44LDcuMkwxLjgsNy4yeiBNNzkuMSwxOS40Yy0xLjQtMS4xLTIuNi0yLjYtMy4zLTQuMgoJCWMtMC44LTEuNy0xLTMuNi0wLjYtNS40YzAuNS0xLjQsMS40LTIuNywyLjYtMy42YzEuMywwLjksMi40LDIsMy4zLDMuM2MxLjQsMiwxLjYsNC42LDAuNSw2LjdDODEuMSwxNy42LDgwLjIsMTguNyw3OS4xLDE5LjQKCQlMNzkuMSwxOS40eiBNNzguMyw0LjZjLTEuOSwxLjUtMy40LDIuOC00LjIsNC43Yy0xLDIuMi0xLDQuOCwwLDcuMWMxLjEsMi4yLDIuNiw0LjEsNC41LDUuOGMxLjIsMS40LDMuNSw0LDIuOCw2LjQKCQljMC42LDAsMS4zLTEuNCwxLjUtMS45YzAuNC0xLjMsMC4xLTIuNi0wLjYtMy43Yy0wLjYtMC45LTEuMy0xLjctMi4xLTIuNWMxLjEtMSwyLjEtMi4xLDMtMy4zYzEuNS0yLDEuNi00LjcsMC40LTYuOQoJCUM4Mi4xLDcuNyw3OC40LDUuNCw3OC4zLDQuNnogTTE2LjcsMTYuMWg1LjRWMTBsMCwwQzIwLjcsMTIuNSwxNy41LDEzLjgsMTYuNywxNi4xTDE2LjcsMTYuMXogTTE2LDIwLjNjLTAuNC0xLjEtMC4zLTIuMiwwLjItMy4yCgkJaDUuOHYzLjJoMS41VjYuMWwwLDBjLTAuMywwLTAuNiwwLjItMC44LDAuNGMtMi4yLDMuNS0zLjgsNC40LTYuMyw2LjhjLTIsMi4xLTMuNiw0LjQtMi44LDYuOUwxNiwyMC4zTDE2LDIwLjN6Ii8+CjwvZz4KPC9zdmc+Cg=="/>
                </div>
            <div>
                <div>
                  <input type="search" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"/>
                </div>
                <div>
                   <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNvbXBvbmVudF8yMTdfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IgoJIHk9IjBweCIgdmlld0JveD0iMCAwIDI3IDI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNyAyNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuMnB4O30KCS5zdDF7ZmlsbDpub25lO30KCS5zdDJ7ZmlsbDojODMyNzI5O3N0cm9rZS13aWR0aDoxLjJweDt9Cgkuc3Qze29wYWNpdHk6MC44O30KCS5zdDR7ZmlsbDpub25lO3N0cm9rZTojODMyNzI5O3N0cm9rZS13aWR0aDoxO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDV7ZmlsbDpub25lO3N0cm9rZTojODMyNzI5O3N0cm9rZS13aWR0aDoxO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9Cgkuc3Q2e2ZpbGw6bm9uZTtzdHJva2U6IzgzMjcyOTtzdHJva2Utd2lkdGg6MTt9Cjwvc3R5bGU+CjxnPgoJPGNpcmNsZSBpZD0iRWxsaXBzZV8xMiIgY2xhc3M9InN0MCIgY3g9IjEzLjMiIGN5PSIxMy41IiByPSIxMiIvPgoJPHBhdGggaWQ9IlBhdGhfMjUzIiBjbGFzcz0ic3QxIiBkPSJNMCwwaDI3djI3SDBWMHoiLz4KCTxnIGlkPSJQYXRoXzQzOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy43NyA0LjAxMSkiPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05LjUsMEMxNC44LDAsMTksNC4zLDE5LDkuNWMwLDUuMi00LjMsOS41LTkuNSw5LjVDNC4yLDE5LDAsMTQuNywwLDkuNUMwLDQuMiw0LjMsMCw5LjUsMHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNOS41LDAuNWMtNSwwLTksNC05LDlzNCw5LDksOXM5LTQsOS05UzE0LjUsMC41LDkuNSwwLjUgTTkuNSwwQzE0LjgsMCwxOSw0LjIsMTksOS41UzE0LjgsMTksOS41LDE5CgkJCVMwLDE0LjcsMCw5LjVTNC4zLDAsOS41LDB6Ii8+Cgk8L2c+Cgk8ZyBpZD0iYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4yNDIgNS40NSkiPgoJCTxnIGlkPSJjIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA1IDAuMDUpIj4KCQkJPGcgaWQ9Ikdyb3VwXzE0MzQ2IiBjbGFzcz0ic3QzIj4KCQkJCTxwYXRoIGlkPSJQYXRoXzE0NDAiIGNsYXNzPSJzdDEiIGQ9Ik0wLDB2MTZoMTZWMEgweiBNMTUsMTVIMVYxaDE0TDE1LDE1eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIGlkPSJiLTIiPgoJCQk8ZyBpZD0iYy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA1IDAuMDUpIj4KCQkJCTxnIGlkPSJHcm91cF8xNDM0NyIgY2xhc3M9InN0MyI+CgkJCQkJPHBhdGggaWQ9IlBhdGhfMTQ0NSIgY2xhc3M9InN0MSIgZD0iTTAsMHYxNmgxNlYwSDB6IE0xNSwxNUgxVjFoMTRMMTUsMTV6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQkJPGcgaWQ9ImQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuODk0IDIuNjcpIj4KCQkJCTxwYXRoIGlkPSJQYXRoXzE0NDYiIGNsYXNzPSJzdDQiIGQ9Ik03LjIsOC4yQzUuNyw4LjIsNC41LDcsNC41LDUuNXMxLjItMi43LDIuNy0yLjdTOS44LDQsOS44LDUuNWMwLDAsMCwwLDAsMAoJCQkJCUM5LjgsNyw4LjYsOC4yLDcuMiw4LjJ6Ii8+CgkJCQk8cGF0aCBpZD0iUGF0aF8xNDQ3IiBjbGFzcz0ic3Q1IiBkPSJNMTMsMnY3LjRjMCwwLjEtMC4xLDAuMi0wLjIsMC4yYzAsMCwwLDAsMCwwSDEuNmMtMC4xLDAtMC4yLTAuMS0wLjMtMC4yYzAsMCwwLDAsMCwwVjIKCQkJCQljMC0wLjEsMC4xLTAuMiwwLjMtMC4yaDEuOGwxLjEtMS42SDEwbDEsMS42aDEuOEMxMi45LDEuOCwxMywxLjksMTMsMnoiLz4KCQkJCTxnIGlkPSJSZWN0YW5nbGVfOTk0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuOTkgMy4wMDIpIj4KCQkJCQk8cmVjdCB4PSIwIiB5PSIwIiBjbGFzcz0ic3QwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIi8+CgkJCQkJPHBvbHlnb24gY2xhc3M9InN0NiIgcG9pbnRzPSIwLjUsMC41IDAuNSwwLjUgMC41LDAuNSAJCQkJCSIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="alt="image"/>
                </div>
                <div>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4zLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAzMCAzMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAgMzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOm5vbmU7fQ0KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojNjMxNjE3O3N0cm9rZS13aWR0aDoxLjE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KPC9zdHlsZT4NCjxnIGlkPSJNaWNyb3Bob25lX0hvdmVyIj4NCgk8ZyBpZD0iYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSI+DQoJCTxnIGlkPSJjIj4NCgkJCTxwYXRoIGlkPSJQYXRoXzE0MDIiIGNsYXNzPSJzdDAiIGQ9Ik0wLDB2MjhoMjhWMEwwLDB6IE0yNi4yLDI2LjJIMS44VjEuOGgyNC41VjI2LjJ6Ii8+DQoJCTwvZz4NCgkJPGcgaWQ9ImQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuOTkyIDIuMzc0KSI+DQoJCQk8ZyBpZD0iR3JvdXBfMTQzMTIiPg0KCQkJCTxwYXRoIGlkPSJQYXRoXzE0MDMiIGNsYXNzPSJzdDEiIGQ9Ik0xMS41LDkuNVYyLjlDMTEuNiwwLjMsOS42LTEuOSw3LTJDNC40LTEuOSwyLjQsMC4zLDIuNSwyLjl2Ni42Yy0wLjEsMi42LDEuOSw0LjgsNC41LDQuOQ0KCQkJCQlDOS42LDE0LjMsMTEuNiwxMi4xLDExLjUsOS41eiIvPg0KCQkJCTxwYXRoIGlkPSJQYXRoXzE0MDQiIGNsYXNzPSJzdDEiIGQ9Ik0wLDcuNHYzLjljMCw0LjQsMy4xLDcuOSw3LDcuOXM3LTMuNSw3LTcuOVY3LjQiLz4NCgkJCQk8bGluZSBpZD0iTGluZV8xMTUiIGNsYXNzPSJzdDEiIHgxPSI3IiB5MT0iMTkuMSIgeDI9IjciIHkyPSIyMy45Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" alt="image"/>
                </div>       
                <div>       
                     <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PGRlZnM+PHN0eWxlPi5ie2ZpbGw6IzgzMjcyOTt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImIiIGQ9Ik00LjA4LDExLjA3YzAtMy44NiwzLjEzLTYuOTksNi45OS02Ljk5czYuOTksMy4xMyw2Ljk5LDYuOTktMy4xMyw2Ljk5LTYuOTksNi45OWMtMy44NiwwLTYuOTktMy4xMy02Ljk5LTYuOTloMFptMTkuNDIsMTEuMzNsLTUuODctNS44N2MyLjkzLTMuNTIsMi41Ny04LjcxLS44MS0xMS44cy04LjU5LTIuOTctMTEuODIsLjI3Yy0zLjI0LDMuMjMtMy4zNSw4LjQ0LS4yNywxMS44MnM4LjI4LDMuNzMsMTEuOCwuODFsNS44Nyw1Ljg3LDEuMS0xLjFaIi8+PC9zdmc+"alt="image" className="default-img" />
                </div>
            </div>     
                </div>
        
                <div className="right">
                <div>
                    {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyOCAyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjggMjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0NzkxMzg0Nzg0NTA1MDEwMjA1MDAwMDAwOTgxNjUwODMxODQwMjc0MjcxOV8pO30NCgkuc3Qxe29wYWNpdHk6MC40Njt9DQoJLnN0MntmaWxsOm5vbmU7fQ0KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojODMyNzI5O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9DQo8L3N0eWxlPg0KPGc+DQoJPGRlZnM+DQoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ii8+DQoJPC9kZWZzPg0KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwMjY4NDE4MTM5MjEwNjUyNzkyNzAwMDAwMTIxNjI5NzI0MzkxMDQ1MDMxNzFfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGlkPSJTdG9yZV9JY29uX0RlZmF1bHRfU3RhdGVfMSIgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMDI2ODQxODEzOTIxMDY1Mjc5MjcwMDAwMDEyMTYyOTcyNDM5MTA0NTAzMTcxXyk7Ij4NCgkJPGcgaWQ9ImIiPg0KCQkJPGcgaWQ9ImMiPg0KCQkJCTxnIGlkPSJHcm91cF8xNDIwOSIgY2xhc3M9InN0MSI+DQoJCQkJCTxwYXRoIGlkPSJQYXRoXzEzNjkiIGNsYXNzPSJzdDIiIGQ9Ik0wLDB2MjhoMjhWMEgweiBNMjYuMiwyNi4ySDEuOFYxLjhoMjQuNVYyNi4yeiIvPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJCTxnIGlkPSJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjUwNCAzLjUwNCkiPg0KCQkJCTxnIGlkPSJlIj4NCgkJCQkJPGcgaWQ9Ikdyb3VwXzE0MjExIj4NCgkJCQkJCTxyZWN0IGlkPSJSZWN0YW5nbGVfOTkyNCIgeD0iOC43IiB5PSI4LjciIGNsYXNzPSJzdDMiIHdpZHRoPSIxMS4xIiBoZWlnaHQ9IjExLjkiLz4NCgkJCQkJCTxwYXRoIGlkPSJQYXRoXzEzNzAiIGNsYXNzPSJzdDMiIGQ9Ik0yMSw0LjN2NC4zSDBWNC4zTDMuNSwwaDE0TDIxLDQuM3oiLz4NCgkJCQkJCTxsaW5lIGlkPSJMaW5lXzgzIiBjbGFzcz0ic3QzIiB4MT0iNC45IiB5MT0iOC40IiB4Mj0iNC45IiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NCIgY2xhc3M9InN0MyIgeDE9IjEwLjUiIHkxPSI4LjQiIHgyPSIxMC41IiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NSIgY2xhc3M9InN0MyIgeDE9IjE2LjEiIHkxPSI4LjQiIHgyPSIxNi4xIiB5Mj0iNC41Ii8+DQoJCQkJCQk8bGluZSBpZD0iTGluZV84NiIgY2xhc3M9InN0MyIgeDE9IjEuMiIgeTE9IjguNCIgeDI9IjEuMiIgeTI9IjIxIi8+DQoJCQkJCTwvZz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="  alt="image" className="default-img" /> */}
                    <h4>Store</h4>
                </div>
                    <div id="Switch">
                        <h4>{state?.user?.name}</h4>
                    </div>
                    <div>
                        {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNiAyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYgMjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojODMyNzI5O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRUZFM0UzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuMSwyMC41TDEzLDIwLjZsLTAuMS0wLjFDNy4xLDE1LjQsMy4zLDEyLDMuMyw4LjZjMC0yLjQsMS44LTQuMSw0LjMtNC4xYzEuOSwwLDMuNywxLjIsNC40LDIuOGgyLjMKCQljMC42LTEuNiwyLjUtMi44LDQuMy0yLjhjMi40LDAsNC4zLDEuOCw0LjMsNC4xQzIyLjgsMTIuMSwxOC45LDE1LjQsMTMuMSwyMC41eiBNMTguNSwyLjJjLTIuMSwwLTQuMiwxLTUuNSwyLjUKCQljLTEuMy0xLjUtMy40LTIuNS01LjUtMi41QzMuNywyLjIsMC44LDUsMC44LDguN2MwLDQuNSw0LjEsOC4xLDEwLjQsMTMuNmwxLjgsMS41bDEuOC0xLjZjNi4zLTUuNSwxMC40LTkuMiwxMC40LTEzLjYKCQlDMjUuMiw1LDIyLjIsMi4yLDE4LjUsMi4yeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzLjEsMjAuNUwxMywyMC42bC0wLjEtMC4xQzcuMSwxNS40LDMuMywxMiwzLjMsOC42YzAtMi40LDEuOC00LjEsNC4zLTQuMWMxLjksMCwzLjcsMS4yLDQuNCwyLjhoMi4zCgkJYzAuNi0xLjYsMi41LTIuOCw0LjMtMi44YzIuNCwwLDQuMywxLjgsNC4zLDQuMUMyMi44LDEyLjEsMTguOSwxNS40LDEzLjEsMjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOC41LDIuMmMtMi4xLDAtNC4yLDEtNS41LDIuNWMtMS4zLTEuNS0zLjQtMi41LTUuNS0yLjVDMy43LDIuMiwwLjgsNSwwLjgsOC43YzAsNC41LDQuMSw4LjEsMTAuNCwxMy42CgkJbDEuOCwxLjVsMS44LTEuNmM2LjMtNS41LDEwLjQtOS4yLDEwLjQtMTMuNkMyNS4yLDUsMjIuMiwyLjIsMTguNSwyLjJ6Ii8+CjwvZz4KPC9zdmc+Cg==" alt="image" className="default-img"/> */}
                        <h4>WishList</h4>
                    </div>
                    <div>
                        {/* <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNiAyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjYgMjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojODMyNzI5O30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRUZFM0UzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuMSwyMC41TDEzLDIwLjZsLTAuMS0wLjFDNy4xLDE1LjQsMy4zLDEyLDMuMyw4LjZjMC0yLjQsMS44LTQuMSw0LjMtNC4xYzEuOSwwLDMuNywxLjIsNC40LDIuOGgyLjMKCQljMC42LTEuNiwyLjUtMi44LDQuMy0yLjhjMi40LDAsNC4zLDEuOCw0LjMsNC4xQzIyLjgsMTIuMSwxOC45LDE1LjQsMTMuMSwyMC41eiBNMTguNSwyLjJjLTIuMSwwLTQuMiwxLTUuNSwyLjUKCQljLTEuMy0xLjUtMy40LTIuNS01LjUtMi41QzMuNywyLjIsMC44LDUsMC44LDguN2MwLDQuNSw0LjEsOC4xLDEwLjQsMTMuNmwxLjgsMS41bDEuOC0xLjZjNi4zLTUuNSwxMC40LTkuMiwxMC40LTEzLjYKCQlDMjUuMiw1LDIyLjIsMi4yLDE4LjUsMi4yeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzLjEsMjAuNUwxMywyMC42bC0wLjEtMC4xQzcuMSwxNS40LDMuMywxMiwzLjMsOC42YzAtMi40LDEuOC00LjEsNC4zLTQuMWMxLjksMCwzLjcsMS4yLDQuNCwyLjhoMi4zCgkJYzAuNi0xLjYsMi41LTIuOCw0LjMtMi44YzIuNCwwLDQuMywxLjgsNC4zLDQuMUMyMi44LDEyLjEsMTguOSwxNS40LDEzLjEsMjAuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOC41LDIuMmMtMi4xLDAtNC4yLDEtNS41LDIuNWMtMS4zLTEuNS0zLjQtMi41LTUuNS0yLjVDMy43LDIuMiwwLjgsNSwwLjgsOC43YzAsNC41LDQuMSw4LjEsMTAuNCwxMy42CgkJbDEuOCwxLjVsMS44LTEuNmM2LjMtNS41LDEwLjQtOS4yLDEwLjQtMTMuNkMyNS4yLDUsMjIuMiwyLjIsMTguNSwyLjJ6Ii8+CjwvZz4KPC9zdmc+Cg==" alt="image" className="default-img"/> */}
                        <h4>Cart</h4>
                    </div>
                    <div id ="logout">
                    <button onClick={() => dispatch({type:"Logout"})}>Logout</button>
                    </div>
                </div>
                </div>
                <div className="cat">
                    <div>
                            <div>All Jewellery</div>
                            <div>Gold</div>
                            <div>Diamond</div>
                            <div>Earning</div>
                            <div>Rings</div>
                            <div>Mia</div>
                            <div>collection</div>
                            <div>rivaah</div>
                            <div>golden harvest</div>
                            <div>coporate gifting</div>
                            <div>more</div>
                    </div>
                </div>
                <div className="image">
                    <img src ="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwad7e546e/homepage/HeroBanner/ae-desktop.jpg"/>
                </div>
                <div className="shop">
                    <h1>Shop Jewellery By Category</h1>
                    <p>Browse through your favourite categories. We've got them all!</p>
                </div>
                <div className="hr">
                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw78fb320b/images/home/Line-Design.svg"/>
                </div>
            <div className="catlog"> 
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/GoldCoin.webp"/>
                        <h6>Gold Coin</h6>
                        <p>Explore</p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/earrings-new.webp"/>
                        <h6>Earrings</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Pendant.webp"/>
                        <h6>Pendants</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Ring.webp"/>
                        <h6>Finger Rings</h6>
                        <p>Explore</p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/mangalsutras-new.webp"/>
                        <h6>Mangalsutras</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Neckwear.webp"/>
                        <h6>Neckwear</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/CoupleRing.webp"/>
                        <h6>Engagement Rings</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Chain.webp"/>
                        <h6>Chains</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/Bangle.webp"/>
                        <h6>Bangles</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/bracelets-new.webp"/>
                        <h6>Bracelets</h6>
                        <p>Explore </p>
                    </div>
                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/nosepins-new.webp"/>
                        <h6>Nose Pins</h6>
                        <p>Explore </p>
                    </div>

                    <div>
                        <img src="https://staticimg.titan.co.in/Tanishq/Banners/home/ShopByCategory/pendant-set-new.webp"/>
                        <h6>Pendant Sets</h6>
                        <p>Explore </p>
                    </div>
                </div>
                
            </div> 
    </div>
  )
}

export default Homepage
