const services = [
    {
        titulo: 'Auditoria de Seguridad',
        descripcion: 'Evaluación de vulnerabilidades en redes y sistemas web.',
        url: '#',
        imagen: '/public/seguridad.png'
    },
    {
        titulo: 'Recuperación de Datos',
        descripcion: 'Recuperación de datos perdidos o eliminados accidentalmente.',
        url: '#',
        imagen: '/public/respaldo.png'
    },
    {
        titulo: 'Configuración de Redes',
        descripcion: 'Configuración y optimización de redes para empresas y hogares.',
        url: '#',
        imagen: '/public/coneccion.png'
    }
];


function createCard(service) {
    return `
        <article class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div class="w-full h-48 md:h-56 flex items-center justify-center bg-gray-50 p-4">
                <img src="${service.imagen}" alt="${service.titulo}" class="max-h-full w-auto object-contain">
            </div>
            <div class="card-body p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-semibold mb-2">${service.titulo}</h3>
                    <p class="text-gray-600">${service.descripcion}</p>
                </div>
                <div class="mt-4">
                    <a href="${service.url}" data-service="${service.titulo}" class="services-info inline-block px-3 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-hover)]">Mas información</a>
                </div>
            </div>
        </article>
    `;
}

function renderServices() {
    const container = document.getElementById('services-container');
    container.innerHTML = services.map(createCard).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices();

    document.querySelectorAll('.services-info').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const service = services.find(s => s.titulo === button.getAttribute('data-service'));
            console.log(service);
            alert(`Más información sobre: ${service.titulo}`);
        });
    });
});