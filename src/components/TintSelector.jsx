import { useState, useRef, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

const tintOptions = [5, 20, 35, 50, 70]; // Tint percentages

export default function TintSelector() {
    const [selectedTint, setSelectedTint] = useState(35);
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        img.src = "/TintTek-Website/tesla-model.jpg"; // 🔹 Replace with actual vehicle image
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            // Apply tint overlay
            ctx.fillStyle = `rgba(0, 0, 0, ${1 - selectedTint / 100})`; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };
    }, [selectedTint]);

    return (
        <Box sx={{ textAlign: "center", p: 2 }}>
            <Typography variant="h5">Select Your Tint</Typography>
            <canvas ref={canvasRef} width={500} height={300} style={{ borderRadius: 10 }} />

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {tintOptions.map((tint) => (
                    <Grid item key={tint}>
                        <Button 
                            variant={selectedTint === tint ? "contained" : "outlined"} 
                            onClick={() => setSelectedTint(tint)}
                        >
                            {tint}%
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
