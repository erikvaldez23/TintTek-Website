import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, Suspense } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

function CarModel({ tintOpacity }) {
    const gltf = useLoader(GLTFLoader, "/car-model.glb");

    if (!gltf || !gltf.scene) {
        console.error("Error: 3D model failed to load.");
        return null;
    }

    gltf.scene.traverse((child) => {
        if (child.isMesh && child.material.name.includes("Glass")) {
            child.material.transparent = true;
            child.material.opacity = tintOpacity;
        }
    });

    // Make model larger
    gltf.scene.scale.set(1.2, 1.2, 1.2); // Increased size

    return <primitive object={gltf.scene} />;
}

export default function TintedCar() {
    const [tint, setTint] = useState(0.3);

    return (
        <Box sx={{ textAlign: "center", p: 2, backgroundColor: "black", color: "white" }}>
            <Typography variant="h4" gutterBottom>
                3D Tint Selector
            </Typography>

            <Canvas style={{ height: "500px", width: "100%", backgroundColor: "black" }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[2, 2, 5]} />
                <Suspense fallback={<Typography>Loading Model...</Typography>}>
                    <CarModel tintOpacity={1 - tint} />
                </Suspense>
                <OrbitControls />
                {/* Environment lighting for better reflections */}
                <Environment preset="night" background />
            </Canvas>

            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                {[0.05, 0.2, 0.35, 0.5, 0.7].map((opacity) => (
                    <Grid item key={opacity}>
                        <Button
                            variant={tint === opacity ? "contained" : "outlined"}
                            onClick={() => setTint(opacity)}
                            sx={{ color: "white", borderColor: "white" }}
                        >
                            {opacity * 100}%
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
