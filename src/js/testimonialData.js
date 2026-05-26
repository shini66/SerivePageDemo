const testimonials = [
    {
        name: "María López",
        msg: "Excelente servicio, recuperaron toda la información perdida en tiempo récord. Muy profesionales y atentos.",
        imagen: "",
    },
    {
        name: "Carlos Pérez",
        msg: "La auditoría de seguridad nos ayudó a detectar vulnerabilidades críticas. Recomendados al 100%.",
        imagen: "/public/avatar2.png",
    },
    {
        name: "Lucía Fernández",
        msg: "Soporte técnico impecable, resolvieron problemas de red que llevábamos semanas intentando arreglar.",
        imagen: "",
    },
    {
        name: "Andrés Gómez",
        msg: "Servicio muy profesional y comunicación clara. El equipo supo explicar todo paso a paso.",
        imagen: "",
    },
    {
        name: "Sofía Martínez",
        msg: "Gran experiencia, el proceso fue rápido y transparente. Volvería a contratar sin dudar.",
        imagen: "",
    },
];

function createCardTestimonial(testimonial) {
    return `
        <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div class="w-full h-48 md:h-56 flex items-center justify-center bg-gray-50 p-4">
                <img src="${testimonial.imagen ?? '/public/default-avatar.png'}" alt="${testimonial.name}" class="max-h-full w-auto object-contain">
            </div>
            <div class="card-body p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-semibold mb-2">${testimonial.name}</h3>
                    <p class="text-gray-600">${testimonial.msg}</p>
                </div>
                
            </div>
        </article>
    `;
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = testimonials.map(createCardTestimonial).join('');
}

document.addEventListener('DOMContentLoaded', renderTestimonials);

export default testimonials;
