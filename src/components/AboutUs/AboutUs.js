import { Box, Typography, ButtonBase, Button, Grid } from "@mui/material";
import React from "react";
import aboutGdsc from "../../assets/About_GDSC.jpg";
import "../AboutUs/AboutUs.css";
const AboutUs = () => {
  const Join = () => {
    window.open("https://forms.gle/7GCJFgDamBqM5hxFA", "_blank");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { base: "column-reverse", md: "row", lg: "row" },
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        
        backgroundBlendMode: "overlay",
        color: "white",
        filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25))",
        overflow: "hidden",
      
        zIndex: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '90%',
          height: '100%',
          pointerEvents: 'none', 
          zIndex:-1,
        }}
      >
        <div className="circle1"/>
        <div className="circle2"/>
        <div className="circle3"/>
        <div className="circle4"/>
        <div className="circle5"/>
        <div className="circle6"/>
        <div className="circle7"/>
        <div className="circle8"/>
        <div className="circle9"/>
        <div className="circle10"/>
        <div className="circle11"/>
        <div className="circle12"/>
        <div className="circle13"/>
        <div className="circle14"/>
        <div className="circle15"/>
        <div className="circle16"/>
        </Box>
      <Box
        flex={1}
        sx={{
          mx: { xs: 3, md: 7 },
          my: 14,
          py: 10,
          px: { xs: 6, md: 16 },
          maxW: "1100px",
          backdropFilter: "blur(50px) backdropSaturate(200%)",
          background: "linear-gradient(45deg, #12486B, #1F2F32)",
          borderRadius: "29px",
          overflow: "hidden",
          textAlign: "left",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "auto", 
        }}
      >
<Grid container spacing={2} >
    <Grid item xs={12} sm container sx={{ flexDirection: { xs: 'column', md: 'row', lg:'row' } }}>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
    <Typography variant="h1" fontWeight="bold" fontSize={{ xs: "30px", sm:"40px", md: "50px" }} marginBottom={"2px"}>
    About Us
      <br /> 
  </Typography>
      <Typography variant="h2" fontWeight="bold" fontSize={{ xs: "18px", sm:"20px", md: "20px" }}>
         GDSC Winter of Code is here!
         <br /> <br />
         </Typography>
         <Typography variant="body1" fontWeight={200} fontSize={{ xs: "10px", sm:"10px", md: "15px" }}>
           It is the most extensive open-source program ever organized at IGDTUW, 
           centered around learning opportunities for aspiring developers in technology!
           <br/><br/>
           Our aim is to inspire, challenge and motivate passionate innovators, especially women, 
           to pursue their careers in Open Source and develop solutions to current world problems. 
           We believe that together we can make a difference. Participants can work on numerous projects 
           under our guidance. Our skilled mentors will help all the participants in nurturing and 
           polishing their technical skills and contributing to various projects from the comfort of 
           their homes over our fifty-day contribution period.
           <br/> <br/>
           Join us at GDSC IGDTUW SNOW SCRIPT - Winter of Code ❄️ to revolutionize the Open Source 
           domain by contributing, inspiring and 
           empowering every individual!
         </Typography>
    </Grid>
    <Grid item>
    <Button
        variant="contained"
        sx={{
          backgroundColor: "#648E9B",

          color: 'white',
          "&:hover": {
            backgroundColor: "#111B1E", 
            boxShadow: '0px 2px 2px rgba(150, 150, 150, 0.5)',  
                  
          },
        
        }}
        onClick={Join}
      >
        Register
  </Button>
    </Grid>
</Grid>
<Grid item sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <ButtonBase  sx={{
            backgroundImage: `url(${aboutGdsc})`,
             backgroundSize: "cover",
             backgroundBlendMode: "overlay",
             borderRadius: {xs:"9px", sm:"19px", md:"29px"},
             height: {xs:"40vh", sm:"40vh", md:"50vh"},
             width: {xs:"80vh", sm:"40vh", md:"50vh"},
             marginLeft: { xs: 0, md: "20px" }, 
             marginTop: { xs: "20px", md: 0 },
           }}
         />
</Grid>
</Grid>
</Grid>
</Box>
</Box>
)
}
export default AboutUs;