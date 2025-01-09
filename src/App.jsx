import { Container } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";

export default function App() {

  const navArrayLink = [
    { title: "INICIO", path: "/" },
    { title: "SERVICIOS", path: "/servicios" },
    { title: "PROYECTOS", path: "/proyectos" },
    { title: "IMPRESION 3D", path: "https://www.diseñoseimpresiones3d.com.ar/" },
    { title: "CONTACTO", path: "/contacto", icon: <DraftsIcon />},
  ];

  return (
    <>
      <Navbar navArrayLink={navArrayLink}/>
      <Container 
        maxWidth={false} 
        sx={{
            maxWidth:'100vw',
            display: 'flex',
            flexDirection:'column',
            mx: '0px !important', 
            padding: '0px !important', 
            overflow:'hidden'
        }} 
      >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/servicios" element={<Servicios />} />
          </Routes>
          <Routes>
            <Route path="proyectos" element={<Proyectos />} />
          </Routes>
          <Routes>
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
      </Container>
      <Container 
        maxWidth={false} 
        sx={{
            display: 'flex',
            mx: '0px', 
            padding: '0px !important' 
        }} 
      >
          <Footer />
      </Container>
    </>
  );
}
