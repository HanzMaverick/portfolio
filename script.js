/* ─── TRANSLATIONS ─── */
const i18n = {
  es: {
    "nav.logo": "DEV.",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Desarrollador Full Stack",
    "hero.greeting": "Hola,\nsoy ",
    "hero.name": "Hanz Maverick",
    "hero.desc": "Desarrollo interfaces y sistemas que son tan funcionales como limpios. Construyo desde el frontend hasta el backend con atención al detalle.",
    "hero.cta1": "Ver proyectos",
    "hero.cta2": "Contactar",
    "about.label": "Sobre mí",
    "about.title": "Un poco\nsobre mí.",
    "about.p1": "Soy estudiante de Ingeniería en Sistemas. Desarrollador Full Stack con pasión por construir aplicaciones web <strong>limpias, rápidas y bien estructuradas</strong>. Me enfoco en aprender constantemente y en entregar código de calidad.",
    "about.p2": "Actualmente estoy expandiendo mis conocimientos en arquitecturas modernas, bases de datos y APIs RESTful. Siempre busco el equilibrio entre funcionalidad y buena experiencia de usuario.",
    "about.cta": "Descargar CV →",
    "about.location": "Ubicación",
    "pin.label": "Disponibilidad en remoto o Xela, Guatemala",
    "skills.label": "Habilidades",
    "skills.title": "Stack &\nherramientas.",
    "projects.label": "Proyectos",
    "projects.title": "Trabajo\nseleccionado.",
    "p1.title": "Plataforma para gestión de la Policía Municipal de Tránsito",
    "p1.desc": "Aplicación web full stack con autenticación, dashboard en tiempo real y API REST. Construida con React + TypeScript, Supabase y APIs RESTful con Next.js.",
    "p2.title": "Sistema de comercio electrónico",
    "p2.desc": "E-commerce con carrito de compras, gestión de inventario y pasarela de pagos integrada. Utilizando tecnologías modernas como React, TypeScript y Next.js",
    "contact.label": "Contacto",
    "contact.title": "Trabajemos\njuntos.",
    "contact.desc": "Estoy abierto a oportunidades, colaboraciones y proyectos interesantes. No dudes en escribirme.",
    "form.name": "Nombre",
    "form.msg": "Mensaje",
    "form.send": "Enviar mensaje",
    "form.success_title": "¡Mensaje enviado!",
    "form.success_desc": "Gracias por escribirme. Te responderé pronto.",
    "form.send_another": "Enviar otro",
    "footer.text": "Quetzaltenango, GT"
  },
  en: {
    "nav.logo": "DEV.",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Full Stack Developer",
    "hero.greeting": "Hi,\nI'm ",
    "hero.name": "Hanz Maverick",
    "hero.desc": "I build interfaces and systems that are as functional as they are clean. From frontend to backend, with attention to detail.",
    "hero.cta1": "View projects",
    "hero.cta2": "Get in touch",
    "about.label": "About me",
    "about.title": "About me.",
    "about.p1": "I am a Systems Engineering student. Full Stack Developer passionate about building <strong>clean, fast, and well-structured</strong> web applications. I focus on continuous learning and delivering quality code.",
    "about.p2": "Currently expanding my knowledge in modern architectures, databases, and RESTful APIs. I always seek the balance between functionality and great user experience.",
    "about.cta": "Download CV →",
    "about.location": "Location",
    "pin.label": "Remote availability or Xela, Guatemala",
    "skills.label": "Skills",
    "skills.title": "Stack &\ntools.",
    "projects.label": "Projects",
    "projects.title": "Selected\nwork.",
    "p1.title": "Municipal Traffic Police Management Platform",
    "p1.desc": "Full stack web app with authentication, real-time dashboard, and REST API. Built with React + TypeScript, Supabase, and RESTful APIs with Next.js.",
    "p2.title": "E-commerce System",
    "p2.desc": "E-commerce with shopping cart, inventory management, and integrated payment gateway. Built with React, TypeScript, and Next.js.",
    "contact.label": "Contact",
    "contact.title": "Let's work\ntogether.",
    "contact.desc": "I'm open to opportunities, collaborations, and interesting projects. Feel free to reach out.",
    "form.name": "Name",
    "form.msg": "Message",
    "form.send": "Send message",
    "form.success_title": "Message sent!",
    "form.success_desc": "Thanks for reaching out. I'll get back to you soon.",
    "form.send_another": "Send another",
    "footer.text": "Quetzaltenango, GT"
  }
};

let currentLang = 'es';

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      const val = i18n[lang][key];
      if (val.includes('\n')) {
        el.innerHTML = val.replace(/\n/g, '<br>');
      } else if (val.includes('<strong>')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });
  document.getElementById('langBtn').textContent = lang === 'es' ? 'EN' : 'ES';
  currentLang = lang;

  // Swap CV download link based on active language
  const cvBtn = document.querySelector('[data-i18n="about.cta"]');
  if (cvBtn) {
    cvBtn.href     = lang === 'es' ? './cv.pdf'    : './cv_en.pdf';
    cvBtn.download = lang === 'es' ? 'CV_Hanz.pdf' : 'CV_Hanz_EN.pdf';
  }
}

document.getElementById('langBtn').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

/* ─── THEME ─── */
const themeBtn = document.getElementById('themeBtn');
let dark = true;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeBtn.textContent = dark ? '☀' : '☾';
});

/* ─── 3D GLOBE – CLEAN PREMIUM PRO FINAL ─── */
(function initGlobe() {

  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  script.onload = buildGlobe;
  document.head.appendChild(script);

  function buildGlobe() {

    const canvas = document.getElementById('globeCanvas');
    const SIZE = Math.min(canvas.parentElement.offsetWidth, 320);

    canvas.width = SIZE;
    canvas.height = SIZE;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SIZE, SIZE);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 2.6;

    const R = 1;

    function latLonToVec3(lat, lon, r) {
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lon + 180) * Math.PI / 180;
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
         r * Math.cos(phi),
         r * Math.sin(phi) * Math.sin(theta)
      );
    }

    const isDark = () =>
      document.documentElement.getAttribute('data-theme') !== 'light';

    const globe = new THREE.Group();
    scene.add(globe);

    /* 🌍 ESFERA BASE */
    const baseMat = new THREE.MeshPhongMaterial({
      color: 0xf4f4f4,
      shininess: 8
    });

    const base = new THREE.Mesh(
      new THREE.SphereGeometry(R, 64, 64),
      baseMat
    );

    globe.add(base);

    /* 💡 Iluminación */
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const directional = new THREE.DirectionalLight(0xffffff, 0.6);
    directional.position.set(3, 2, 4);
    scene.add(directional);

    /* 🌫 Atmosfera */
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x99bbff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    });

    const atmo = new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.03, 64, 64),
      atmoMat
    );

    globe.add(atmo);

    /* =========================
       🌍 CONTINENTES CON PUNTOS
    ========================== */

    let continentMat; // referencia global para theme

    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then(res => res.json())
      .then(data => {

        const positions = [];
        const basePositions = [];

        const XELA_LAT = 14.85;
        const XELA_LON = -91.52;

        function pointInPolygon(point, vs) {
          const x = point[0], y = point[1];
          let inside = false;
          for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            const xi = vs[i][0], yi = vs[i][1];
            const xj = vs[j][0], yj = vs[j][1];
            const intersect =
              ((yi > y) !== (yj > y)) &&
              (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
          }
          return inside;
        }

        data.features.forEach(feature => {

          const geometry = feature.geometry;
          const polygons = geometry.type === "MultiPolygon"
            ? geometry.coordinates
            : [geometry.coordinates];

          polygons.forEach(polygon => {

            const outerRing = polygon[0];

            const lons = outerRing.map(p => p[0]);
            const lats = outerRing.map(p => p[1]);

            const minLon = Math.min(...lons);
            const maxLon = Math.max(...lons);
            const minLat = Math.min(...lats);
            const maxLat = Math.max(...lats);

            const containsPin = pointInPolygon(
              [XELA_LON, XELA_LAT],
              outerRing
            );

            const step = containsPin ? 0.1 : 0.65;

            for (let lon = minLon; lon <= maxLon; lon += step) {
              for (let lat = minLat; lat <= maxLat; lat += step) {

                if (pointInPolygon([lon, lat], outerRing)) {

                  const vec = latLonToVec3(lat, lon, R + 0.003);

                  positions.push(vec.x, vec.y, vec.z);
                  basePositions.push(vec.x, vec.y, vec.z);
                }
              }
            }
          });
        });

        const geo = new THREE.BufferGeometry();
        geo.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(positions, 3)
        );

        continentMat = new THREE.PointsMaterial({
          color: 0xbcbcbc,
          size: 0.012,
          transparent: true,
          opacity: 0.9,
          depthWrite: false
        });

        const points = new THREE.Points(geo, continentMat);
        globe.add(points);

        /* 💫 Respiración */
        function animatePoints() {

          const posAttr = geo.attributes.position;

          for (let i = 0; i < posAttr.count; i++) {

            const bx = basePositions[i * 3];
            const by = basePositions[i * 3 + 1];
            const bz = basePositions[i * 3 + 2];

            const breathe = 1 + Math.sin(Date.now() * 0.001 + i) * 0.01;

            posAttr.array[i * 3]     = bx * breathe;
            posAttr.array[i * 3 + 1] = by * breathe;
            posAttr.array[i * 3 + 2] = bz * breathe;
          }

          posAttr.needsUpdate = true;
          requestAnimationFrame(animatePoints);
        }

        animatePoints();
      });

    /* =========================
       📍 PIN MONOCROMO + PULSO
    ========================== */

    const XELA_LAT = 14.85;
    const XELA_LON = -91.52;
    const xelaPos = latLonToVec3(XELA_LAT, XELA_LON, R + 0.02);

    const pinGroup = new THREE.Group();
    pinGroup.position.copy(xelaPos);

    const pinCoreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const pinCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 16, 16),
      pinCoreMat
    );

    pinGroup.add(pinCore);

    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4
    });

    const pulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 32, 32),
      pulseMat
    );

    pinGroup.add(pulse);
    globe.add(pinGroup);

    let pulseScale = 1;

    function animatePulse() {
      pulseScale += 0.01;
      if (pulseScale > 3) pulseScale = 1;

      pulse.scale.setScalar(pulseScale);
      pulse.material.opacity = 0.5 * (1 - (pulseScale - 1));

      requestAnimationFrame(animatePulse);
    }

    animatePulse();

    /* 🌗 THEME SYNC CORRECTO */

    function syncTheme() {

      const dark = isDark();

      baseMat.color.setHex(dark ? 0x1c1c1e : 0xc6c6c6);
      atmoMat.color.setHex(dark ? 0x3355aa : 0x99bbff);

      if (continentMat) {
        continentMat.color.setHex(dark ? 0xbcbcbc : 0x1c1c1e);
      }

      pinCoreMat.color.setHex(dark ? 0xffffff : 0x818181);
      pulseMat.color.setHex(dark ? 0xffffff : 0xffffff);
    }

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    syncTheme();

    /* ROTACIÓN */

    globe.rotation.y =
      -((XELA_LON + 210) * Math.PI / 180) + Math.PI / 2;

    globe.rotation.x =
      -XELA_LAT * Math.PI / 180 * -0.9;

      /* 🖱 Drag para rotar */

let autoRotate = true;
let isDragging = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', e => {
  isDragging = true;
  autoRotate = false;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  setTimeout(() => autoRotate = true, 1500);
});

window.addEventListener('mousemove', e => {
  if (!isDragging) return;

  globe.rotation.y += (e.clientX - lastX) * 0.005;
  globe.rotation.x += (e.clientY - lastY) * 0.003;

  globe.rotation.x = Math.max(
    -Math.PI / 2.5,
    Math.min(Math.PI / 2.5, globe.rotation.x)
  );

  lastX = e.clientX;
  lastY = e.clientY;
});

    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.0045;
      renderer.render(scene, camera);
    }

    animate();
  }

})();

/* ─── CONTACT FORM (Formspree) ─── */
(function initForm() {
  // ⚠️  REEMPLAZA ESTO con tu endpoint de Formspree:
  //     1. Ve a https://formspree.io → crea cuenta gratis
  //     2. New Form → copia el endpoint que te dan
  //     3. Pégalo aquí abajo
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xreadyjk';

  const form       = document.getElementById('contactForm');
  const successDiv = document.getElementById('formSuccess');
  const resetBtn   = document.getElementById('resetFormBtn');
  const submitBtn  = document.getElementById('submitBtn');
  const btnText    = document.getElementById('btnText');
  const btnSpinner = document.getElementById('btnSpinner');
  const errorMsg   = document.getElementById('formError');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsg.style.display = 'none';

    // Loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnSpinner.style.display = 'inline';

    try {
      const data = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        // Success
        form.style.display = 'none';
        successDiv.style.display = 'flex';
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Error');
      }
    } catch (err) {
      errorMsg.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnSpinner.style.display = 'none';
    }
  });

  resetBtn.addEventListener('click', () => {
    successDiv.style.display = 'none';
    form.style.display = 'flex';
  });
})();

/* ─── SCROLL REVEAL ─── */
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
        }
    });
    }, { threshold: 0.1 });
revealEls.forEach(el => obs.observe(el));
