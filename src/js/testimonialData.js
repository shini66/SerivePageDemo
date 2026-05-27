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

function initials(name) {
    if (!name) return '';
    return name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
}

function createCardTestimonial(testimonial) {

    const imgHtml = `<div class="w-16 h-16 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold">${initials(testimonial.name)}</div>`;

    return `
        <article class="bg-white rounded-lg shadow p-4 flex items-start gap-4">
            <div class="flex-shrink-0">${imgHtml}</div>
            <div class="text-left">
                <h3 class="font-semibold">${testimonial.name}</h3>
                <p class="text-gray-600">${testimonial.msg}</p>
            </div>
        </article>
    `;
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;
    container.innerHTML = testimonials.map(createCardTestimonial).join('');
}

document.addEventListener('DOMContentLoaded', renderTestimonials);
