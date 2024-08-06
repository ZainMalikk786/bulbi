// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// Function to load the zipped butterfly model
function loadZippedModel(zipUrl, modelName) {
    return fetch(zipUrl)
        .then(response => response.arrayBuffer())
        .then(data => JSZip.loadAsync(data))
        .then(zip => zip.file(modelName).async('arraybuffer'))
        .then(modelData => {
            const loader = new THREE.GLTFLoader();
            return new Promise((resolve, reject) => {
                loader.parse(modelData, '', (gltf) => resolve(gltf.scene), (error) => reject(error));
            });
        });
}

// Load the butterfly model from the zip file
let butterfly;
loadZippedModel('butterfly.glb.zip', 'butterfly.glb')
    .then(model => {
        butterfly = model;
        butterfly.scale.set(0.5, 0.5, 0.5);
        butterfly.position.y = 0;
        scene.add(butterfly);
    })
    .catch(error => console.error(error));

// Advanced particle system
const particleCount = 500;
const particles = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    particlePositions[i] = Math.random() * 2000 - 1000;
}

particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 5,
    sizeAttenuation: true,
    color: new THREE.Color('white'),
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthTest: false,
});

const particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);

// Set camera position
camera.position.z = 500;

// Mouse interaction
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

window.addEventListener('mousemove', onMouseMove);

// Animation function
function animate() {
    requestAnimationFrame(animate);

    // Rotate the particles
    particleSystem.rotation.y += 0.001;

    // Update butterfly position based on mouse
    if (butterfly) {
        raycaster.updateMatrixWorld();
        const intersects = raycaster.intersectObject(butterfly);
        if (intersects.length > 0) {
            butterfly.position.x += (mouse.x - butterfly.position.x) * 0.05;
            butterfly.position.y += ((-mouse.y) - butterfly.position.y) * 0.05;
        }
    }

    controls.update();
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
