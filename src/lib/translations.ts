
export type Language = 'en' | 'es';

type BlogPosts = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    aiHint: string;
    content: string;
  }
}

const blogPostsEn: BlogPosts = {
  'tech-trends-2024': {
      title: "Top 5 Tech Trends for SMBs in 2024",
      description: "Discover the technologies that can give your business a competitive edge this year.",
      image: "https://placehold.co/600x400.png",
      aiHint: "futuristic technology interface",
      content: `
        <p>The business landscape is constantly evolving, and technology is at the forefront of this change. For Small to Medium Businesses (SMBs), staying ahead of the curve is crucial for growth and competitiveness. Here are the top 5 tech trends you should be watching in 2024:</p>
        
        <h3>1. Artificial Intelligence (AI) and Machine Learning</h3>
        <p>AI is no longer just for large corporations. SMBs can leverage AI for everything from customer service chatbots to predictive analytics for sales. Implementing AI-powered tools can automate repetitive tasks, provide valuable insights, and enhance customer experiences.</p>

        <h3>2. Advanced Cybersecurity Measures</h3>
        <p>With the rise of remote work, cybersecurity has become more critical than ever. SMBs are increasingly targeted by cyberattacks. Investing in robust cybersecurity solutions, including multi-factor authentication, regular security audits, and employee training, is essential.</p>

        <h3>3. Cloud Computing and Hybrid Work Models</h3>
        <p>The shift to remote and hybrid work is here to stay. Cloud platforms like Google Workspace are essential for enabling seamless collaboration, communication, and access to data from anywhere. This flexibility boosts productivity and employee satisfaction.</p>

        <h3>4. Data Analytics and Business Intelligence (BI)</h3>
        <p>Making data-driven decisions is key to success. BI tools can help SMBs analyze their data to understand customer behavior, optimize operations, and identify new market opportunities. These insights can transform your business strategy.</p>

        <h3>5. Automation of Business Processes</h3>
        <p>Automation helps streamline workflows, reduce errors, and free up your team to focus on more strategic tasks. From marketing automation to automated invoicing, implementing these tools can significantly improve efficiency and cut costs.</p>

        <blockquote>Leveraging these trends can be a game-changer for your business. At Stertup Consulting, we specialize in helping SMBs navigate the complexities of digital transformation.</blockquote>
        <p>Ready to embrace the future? <a href="/contact">Contact us for a free consultation</a> to discuss how we can implement these technologies in your business.</p>
        `
  },
  'google-workspace-tips': {
      title: "Boost Productivity with Google Workspace",
      description: "Unlock hidden features and best practices to get the most out of your Google tools.",
      image: "https://placehold.co/600x400.png",
      aiHint: "office collaboration online",
      content: `
        <p>Google Workspace is a powerful suite of tools that can dramatically improve your team's productivity and collaboration. However, many businesses only scratch the surface of what's possible. Here are some tips to unlock its full potential:</p>
        
        <h3>1. Master Google Drive for Seamless File Management</h3>
        <p>Use Shared Drives (formerly Team Drives) to store company files. Unlike "My Drive," files in a Shared Drive belong to the team, not an individual. This prevents data loss when an employee leaves. Also, take advantage of features like file and folder starring, color-coding, and advanced search operators.</p>

        <h3>2. Leverage Templates in Docs, Sheets, and Slides</h3>
        <p>Create and save custom templates for frequently used documents like invoices, project plans, or presentation decks. This ensures brand consistency and saves your team valuable time. Google also offers a gallery of pre-made templates to get you started.</p>

        <h3>3. Use Google Calendar for More Than Just Meetings</h3>
        <p>Create shared team calendars for projects or vacation tracking. Use "Appointment Slots" to allow clients or colleagues to book time with you effortlessly. You can also set working hours and locations to better manage expectations in a hybrid work environment.</p>

        <h3>4. Automate with Google Apps Script</h3>
        <p>For those with a bit of technical know-how, Google Apps Script can connect your Workspace apps and automate workflows. Create custom functions in Sheets, build add-ons for Docs, or automate email responses in Gmail. The possibilities are endless.</p>

        <h3>5. Integrate Third-Party Apps from the Marketplace</h3>
        <p>The Google Workspace Marketplace has thousands of apps that integrate directly with your tools. From project management apps like Asana to CRM tools, you can create a fully integrated digital headquarters.</p>

        <blockquote>Properly configured and utilized, Google Workspace is more than just a set of apps—it's a comprehensive platform for business operations.</blockquote>
        <p>If you're looking to set up Google Workspace for the first time or optimize your existing setup, <a href="/services">our experts are here to help</a>.</p>
      `
  },
  'social-media-smb': {
      title: "Why Social Media is Crucial for SMBs",
      description: "Learn how a strong social media strategy can drive growth and customer loyalty.",
      image: "https://placehold.co/600x400.png",
      aiHint: "social media marketing",
      content: `
        <p>In today's digital world, a strong social media presence is not just a "nice-to-have" for small and medium businesses (SMBs)—it's a necessity. It's one of the most effective ways to reach new customers, build brand loyalty, and drive sales. Here's why it's so crucial:</p>

        <h3>1. Increase Brand Awareness</h3>
        <p>Social media platforms allow you to reach a vast audience. By consistently sharing valuable content, you can increase your brand's visibility and stay top-of-mind with potential customers. It's a powerful tool for introducing your business to people who might not have found you otherwise.</p>

        <h3>2. Build a Community and Foster Loyalty</h3>
        <p>Social media is about two-way communication. It gives you a direct line to your customers, allowing you to engage with them, answer their questions, and gather feedback. This interaction builds a sense of community around your brand, fostering trust and loyalty.</p>

        <h3>3. Drive Website Traffic and Generate Leads</h3>
        <p>By sharing links to your blog posts, product pages, and special offers, you can drive significant traffic to your website. With targeted social media advertising, you can also generate high-quality leads by reaching users who are most likely to be interested in your products or services.</p>
        
        <h3>4. Gain Valuable Customer Insights</h3>
        <p>Social media analytics provide a wealth of data about your audience. You can learn about their demographics, interests, and behavior. These insights are invaluable for refining your marketing strategies, developing new products, and improving the customer experience.</p>
        
        <h3>5. Showcase Your Brand's Personality and Values</h3>
        <p>Social media allows you to show the human side of your business. You can share behind-the-scenes content, highlight your company culture, and talk about your brand's values. This authenticity helps you connect with customers on a deeper level.</p>
        
        <blockquote>An effective social media strategy isn't just about posting content; it's about building relationships and driving real business results.</blockquote>
        
        <p>Don't have the time or expertise to manage your social media? <a href="/services">Check out our Social Media Services</a>. We can help you create a strategy that works.</p>
      `
  }
};

const blogPostsEs: BlogPosts = {
  'tech-trends-2024': {
      title: "Top 5 Tendencias Tecnológicas para PyMEs en 2024",
      description: "Descubra las tecnologías que pueden dar a su negocio una ventaja competitiva este año.",
      image: "https://placehold.co/600x400.png",
      aiHint: "futuristic technology interface",
      content: `
        <p>El panorama empresarial está en constante evolución, y la tecnología está a la vanguardia de este cambio. Para las Pequeñas y Medianas Empresas (PyMEs), mantenerse a la vanguardia es crucial para el crecimiento y la competitividad. Aquí están las 5 principales tendencias tecnológicas que debe observar en 2024:</p>
        
        <h3>1. Inteligencia Artificial (IA) y Aprendizaje Automático</h3>
        <p>La IA ya no es solo para las grandes corporaciones. Las PyMEs pueden aprovechar la IA para todo, desde chatbots de servicio al cliente hasta análisis predictivos para ventas. La implementación de herramientas impulsadas por IA puede automatizar tareas repetitivas, proporcionar información valiosa y mejorar las experiencias de los clientes.</p>

        <h3>2. Medidas Avanzadas de Ciberseguridad</h3>
        <p>Con el auge del trabajo remoto, la ciberseguridad se ha vuelto más crítica que nunca. Las PyMEs son un objetivo cada vez más frecuente de los ciberataques. Es esencial invertir en soluciones de ciberseguridad robustas, incluida la autenticación multifactor, auditorías de seguridad periódicas y capacitación de los empleados.</p>

        <h3>3. Computación en la Nube y Modelos de Trabajo Híbridos</h3>
        <p>El cambio hacia el trabajo remoto e híbrido llegó para quedarse. Las plataformas en la nube como Google Workspace son esenciales para permitir una colaboración, comunicación y acceso a datos sin problemas desde cualquier lugar. Esta flexibilidad aumenta la productividad y la satisfacción de los empleados.</p>

        <h3>4. Análisis de Datos e Inteligencia de Negocios (BI)</h3>
        <p>Tomar decisiones basadas en datos es clave para el éxito. Las herramientas de BI pueden ayudar a las PyMEs a analizar sus datos para comprender el comportamiento del cliente, optimizar las operaciones e identificar nuevas oportunidades de mercado. Estos conocimientos pueden transformar su estrategia comercial.</p>

        <h3>5. Automatización de Procesos de Negocio</h3>
        <p>La automatización ayuda a optimizar los flujos de trabajo, reducir errores y liberar a su equipo para que se concentre en tareas más estratégicas. Desde la automatización del marketing hasta la facturación automatizada, la implementación de estas herramientas puede mejorar significativamente la eficiencia y reducir los costos.</p>

        <blockquote>Aprovechar estas tendencias puede ser un punto de inflexión para su negocio. En Stertup Consulting, nos especializamos en ayudar a las PyMEs a navegar las complejidades de la transformación digital.</blockquote>
        <p>¿Listo para abrazar el futuro? <a href="/contact">Contáctenos para una consulta gratuita</a> y discutir cómo podemos implementar estas tecnologías en su negocio.</p>
        `
  },
  'google-workspace-tips': {
      title: "Aumente la Productividad con Google Workspace",
      description: "Desbloquee funciones ocultas y mejores prácticas para sacar el máximo provecho de sus herramientas de Google.",
      image: "https://placehold.co/600x400.png",
      aiHint: "office collaboration online",
      content: `
        <p>Google Workspace es un potente conjunto de herramientas que puede mejorar drásticamente la productividad y colaboración de su equipo. Sin embargo, muchas empresas solo aprovechan una pequeña parte de lo que es posible. Aquí hay algunos consejos para desbloquear todo su potencial:</p>
        
        <h3>1. Domine Google Drive para una Gestión de Archivos Fluida</h3>
        <p>Use Unidades Compartidas (anteriormente Unidades de Equipo) para almacenar archivos de la empresa. A diferencia de "Mi unidad", los archivos en una Unidad Compartida pertenecen al equipo, no a un individuo. Esto evita la pérdida de datos cuando un empleado se va. Además, aproveche funciones como destacar archivos y carpetas, codificación por colores y operadores de búsqueda avanzada.</p>

        <h3>2. Aproveche las Plantillas en Documentos, Hojas de Cálculo y Presentaciones</h3>
        <p>Cree y guarde plantillas personalizadas para documentos de uso frecuente como facturas, planes de proyecto o presentaciones. Esto garantiza la coherencia de la marca y ahorra un tiempo valioso a su equipo. Google también ofrece una galería de plantillas pre-hechas para empezar.</p>

        <h3>3. Use el Calendario de Google para Más que Solo Reuniones</h3>
        <p>Cree calendarios de equipo compartidos para proyectos o seguimiento de vacaciones. Use los "Espacios para citas" para permitir que clientes o colegas reserven tiempo con usted sin esfuerzo. También puede establecer horarios y lugares de trabajo para gestionar mejor las expectativas en un entorno de trabajo híbrido.</p>

        <h3>4. Automatice con Google Apps Script</h3>
        <p>Para aquellos con un poco de conocimiento técnico, Google Apps Script puede conectar sus aplicaciones de Workspace y automatizar flujos de trabajo. Cree funciones personalizadas en Hojas de Cálculo, construya complementos para Documentos o automatice respuestas de correo electrónico en Gmail. Las posibilidades son infinitas.</p>

        <h3>5. Integre Aplicaciones de Terceros desde el Marketplace</h3>
        <p>El Google Workspace Marketplace tiene miles de aplicaciones que se integran directamente con sus herramientas. Desde aplicaciones de gestión de proyectos como Asana hasta herramientas de CRM, puede crear una sede digital totalmente integrada.</p>

        <blockquote>Configurado y utilizado correctamente, Google Workspace es más que un conjunto de aplicaciones: es una plataforma integral para las operaciones comerciales.</blockquote>
        <p>Si busca configurar Google Workspace por primera vez u optimizar su configuración existente, <a href="/services">nuestros expertos están aquí para ayudarle</a>.</p>
      `
  },
  'social-media-smb': {
      title: "Por Qué las Redes Sociales son Cruciales para las PyMEs",
      description: "Aprenda cómo una estrategia sólida en redes sociales puede impulsar el crecimiento y la lealtad del cliente.",
      image: "https://placehold.co/600x400.png",
      aiHint: "social media marketing",
      content: `
        <p>En el mundo digital actual, una fuerte presencia en las redes sociales no es solo algo "agradable de tener" para las pequeñas y medianas empresas (PyMEs), es una necesidad. Es una de las formas más efectivas de llegar a nuevos clientes, construir lealtad de marca e impulsar las ventas. He aquí por qué es tan crucial:</p>

        <h3>1. Aumentar el Reconocimiento de Marca</h3>
        <p>Las plataformas de redes sociales le permiten llegar a una audiencia masiva. Al compartir contenido valioso de manera consistente, puede aumentar la visibilidad de su marca y mantenerse en la mente de los clientes potenciales. Es una herramienta poderosa para presentar su negocio a personas que de otro modo no lo habrían encontrado.</p>

        <h3>2. Construir una Comunidad y Fomentar la Lealtad</h3>
        <p>Las redes sociales se tratan de comunicación bidireccional. Le dan una línea directa con sus clientes, permitiéndole interactuar con ellos, responder sus preguntas y recopilar comentarios. Esta interacción construye un sentido de comunidad en torno a su marca, fomentando la confianza y la lealtad.</p>

        <h3>3. Dirigir Tráfico al Sitio Web y Generar Clientes Potenciales</h3>
        <p>Al compartir enlaces a sus publicaciones de blog, páginas de productos y ofertas especiales, puede dirigir un tráfico significativo a su sitio web. Con la publicidad dirigida en redes sociales, también puede generar clientes potenciales de alta calidad al llegar a los usuarios que tienen más probabilidades de estar interesados en sus productos o servicios.</p>
        
        <h3>4. Obtener Valiosos Conocimientos sobre los Clientes</h3>
        <p>Las analíticas de redes sociales proporcionan una gran cantidad de datos sobre su audiencia. Puede aprender sobre su demografía, intereses y comportamiento. Estos conocimientos son invaluables para refinar sus estrategias de marketing, desarrollar nuevos productos y mejorar la experiencia del cliente.</p>
        
        <h3>5. Mostrar la Personalidad y los Valores de su Marca</h3>
        <p>Las redes sociales le permiten mostrar el lado humano de su negocio. Puede compartir contenido detrás de cámaras, destacar la cultura de su empresa y hablar sobre los valores de su marca. Esta autenticidad le ayuda a conectar con los clientes a un nivel más profundo.</p>
        
        <blockquote>Una estrategia efectiva en redes sociales no se trata solo de publicar contenido; se trata de construir relaciones e impulsar resultados comerciales reales.</blockquote>
        
        <p>¿No tiene el tiempo o la experiencia para gestionar sus redes sociales? <a href="/services">Consulte nuestros Servicios de Redes Sociales</a>. Podemos ayudarle a crear una estrategia que funcione.</p>
      `
  }
};

export const translations = {
  en: {
    logo: {
      consulting: "Consulting",
    },
    header: {
      services: 'Services',
      about: 'About Us',
      blog: 'Blog',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    hero: {
      title: 'Technology Solutions for Your Business',
      subtitle: 'We provide expert consulting, social media services, and Google Workspace solutions to help your small or medium business thrive in the digital age.',
      ctaPrimary: 'Get Free Consultation',
      ctaSecondary: 'Explore Our Services',
    },
    services: {
      title: 'Our Core Services',
      subtitle: 'Tailored technology solutions to drive growth and efficiency in your business.',
      items: {
        consulting: {
          title: 'Technology Consulting',
          description: 'IT strategy, digital transformation, and system integration to optimize your operations.',
        },
        social: {
          title: 'Social Media Services',
          description: 'Strategy, content creation, and community management to grow your online presence.',
        },
        assistants: {
          title: 'Virtual Assistants',
          description: 'Reliable administrative, customer service, and data entry support for your business needs.',
        },
        gworkspace: {
          title: 'Google Workspace Setup',
          description: 'Complete implementation, user training, and ongoing support for Google Workspace.',
        },
        migration: {
          title: 'Office 365 to Google Migration',
          description: 'Seamless data migration from Office 365 to Google Workspace with minimal downtime.',
        },
      },
    },
    aboutPreview: {
        title: "Your Local Tech Partner in Miami",
        description: "Stertup Consulting LLC is a Miami-based technology consulting firm dedicated to helping small and medium businesses leverage technology for growth. Our bilingual team understands the local market and is committed to your success.",
        cta: "Learn More About Us",
        imageAlt: "A diverse team of professionals collaborating in a modern office in Miami."
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'We are proud to partner with businesses across Miami. Here’s what they have to say about our work.',
      items: {
        client1: {
          name: 'Maria Rodriguez',
          company: 'CEO, Miami Innovations',
          quote: 'The migration to Google Workspace was seamless. Stertup’s team was professional and efficient. Highly recommended!',
        },
        client2: {
          name: 'John Davis',
          company: 'Owner, Sunshine Cafe',
          quote: 'Their social media services doubled our online engagement. A fantastic partner for any small business.',
        },
        client3: {
          name: 'Carlos Gomez',
          company: 'Founder, Gomez Legal',
          quote: 'The tech consultation provided a clear roadmap for our digital transformation. Invaluable advice.',
        },
      },
    },
    blogPreview: {
        title: "From Our Blog",
        subtitle: "Stay updated with the latest tech tips, industry insights, and company news.",
        posts: { // This is only for the preview, full content is in blog object
            'tech-trends-2024': {
                title: blogPostsEn['tech-trends-2024'].title,
                description: blogPostsEn['tech-trends-2024'].description,
            },
            'google-workspace-tips': {
                title: blogPostsEn['google-workspace-tips'].title,
                description: blogPostsEn['google-workspace-tips'].description,
            },
            'social-media-smb': {
                title: blogPostsEn['social-media-smb'].title,
                description: blogPostsEn['social-media-smb'].description,
            }
        },
        readMore: "Read More",
        viewAll: "View All Posts"
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Have questions? Find quick answers here or ask our AI assistant.",
        commonQuestions: "Common Questions",
        askAi: "Ask Our AI Assistant",
        placeholder: "Type your question here...",
        submit: "Ask AI",
        loading: "Thinking...",
        error: "Sorry, I couldn't find an answer. Please try rephrasing your question or contact us directly.",
        validation: {
            question: "Question must be at least 10 characters."
        },
        questions: {
            q1: {
                q: "What types of businesses do you work with?",
                a: "We specialize in providing technology solutions for small to medium-sized businesses (SMBs) across various industries in the Miami area."
            },
            q2: {
                q: "Do you offer services in Spanish?",
                a: "Yes, our team is fully bilingual. We offer all our services, consultations, and support in both English and Spanish to best serve the diverse Miami community."
            },
            q3: {
                q: "How long does an Office 365 to Google Workspace migration take?",
                a: "The timeline for a migration depends on the size of your organization and the amount of data. We create a detailed plan to ensure a smooth transition with minimal downtime, typically completed within a few days to a week."
            },
            q4: {
                q: "Why should I choose a local Miami-based consultant?",
                a: "Working with a local consultant means you get a partner who understands the specific challenges and opportunities of the Miami market. We offer on-site support and personalized service that remote providers can't match."
            }
        }
    },
    contact: {
        title: "Get in Touch",
        subtitle: "Ready to start a project or have a question? We'd love to hear from you. Fill out the form or use the contact details below.",
        form: {
            name: { label: "Your Name", placeholder: "John Doe" },
            email: { label: "Your Email", placeholder: "you@example.com" },
            subject: { label: "Subject", placeholder: "e.g., Google Workspace Migration" },
            message: { label: "Your Message", placeholder: "Tell us about your project..." },
            submit: "Send Message"
        },
        address: { title: "Our Office", value: "Miami, Florida, USA" },
        email: { title: "Email Us", value: "contact@stertup.com" },
        phone: { title: "Call Us", value: "+1 (234) 567-890" },
        validation: {
            name: "Name must be at least 2 characters.",
            email: "Please enter a valid email address.",
            subject: "Subject must be at least 5 characters.",
            message: "Message must be at least 10 characters."
        },
        toast: {
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you shortly."
        }
    },
    footer: {
        tagline: "Tech for your Business.",
        links: "Quick Links",
        about: "About Us",
        services: "Services",
        blog: "Blog",
        contact: "Contact",
        contactInfo: "Contact Info",
        followUs: "Follow Us",
        copyright: "Stertup Consulting LLC. All Rights Reserved."
    },
    aboutPage: {
        title: "Empowering Miami's Businesses with Technology",
        subtitle: "We are a team of passionate tech experts dedicated to helping local businesses thrive in the digital world.",
        story: {
            title: "Our Story",
            paragraph1: "Founded in the heart of Miami, Stertup Consulting LLC was born from a desire to bridge the technology gap for small and medium-sized businesses. We saw too many local companies struggling with outdated systems or missing out on the power of digital tools. Our founders, with decades of combined experience in IT and digital marketing, decided to create a consulting firm that speaks the language of business, not just tech jargon.",
            paragraph2: "Today, we are proud to be a trusted technology partner for numerous businesses across South Florida. Our bilingual approach and deep understanding of the local market make us uniquely positioned to serve our vibrant community.",
            imageAlt: "A beautiful skyline of Miami at sunset."
        },
        mission: {
            title: "Our Mission",
            text: "To provide accessible, effective, and affordable technology solutions that drive growth, efficiency, and innovation for small and medium businesses."
        },
        local: {
            title: "Proudly Miami",
            text: "We are committed to the success of our local community. Being based in Miami allows us to offer personalized, on-the-ground support to our clients."
        },
        team: {
            title: "Meet Our Team",
            subtitle: "The experts behind your technological success.",
            role1: "Lead Technology Consultant",
            role2: "Head of Digital Marketing",
            role3: "Client Success Manager"
        }
    },
    servicesPage: {
        title: "Our Services",
        subtitle: "Comprehensive technology solutions designed for your business needs.",
        items: {
            consulting: {
                title: 'Technology Consulting',
                description: 'We provide strategic guidance to align your technology with your business goals. From planning to execution, we are your partners in digital transformation.',
                points: ["IT Strategy & Planning", "Digital Transformation", "Tech Assessments", "System Integration"]
            },
            social: {
                title: 'Social Media Services',
                description: 'Build a powerful online presence with our expert social media services. We create engaging content and manage your communities to grow your brand.',
                points: ["Strategy Development", "Content Creation", "Ad Campaigns", "Community Management"]
            },
            assistants: {
                title: 'Virtual Assistants',
                description: "Delegate your administrative tasks to our reliable virtual assistants. Free up your time to focus on what you do best: growing your business.",
                points: ["Admin Support", "Customer Service", "Data Entry", "Scheduling"]
            },
            gworkspace: {
                title: 'Google Workspace Setup',
                description: "Harness the power of collaboration with Google Workspace. We offer complete setup, training, and support to get your team working efficiently.",
                points: ["Full Implementation", "User Onboarding", "Custom Configuration", "Ongoing Support"]
            },
            migration: {
                title: 'Office 365 to Google Migration',
                description: "Make a seamless switch to Google Workspace. Our proven migration process ensures your data is safe and your business experiences zero disruptions.",
                points: ["Seamless Planning", "Secure Data Transfer", "User Training", "Minimal Downtime"]
            },
        }
    },
    blog: {
      title: "Our Blog",
      subtitle: "Tech tips, industry insights, and company updates to keep you ahead of the curve.",
      back_to_blog: "Back to Blog",
      posts: blogPostsEn
    }
  },
  es: {
    logo: {
      consulting: "Consultoría",
    },
    header: {
      services: 'Servicios',
      about: 'Nosotros',
      blog: 'Blog',
      contact: 'Contacto',
      getQuote: 'Obtener Cotización',
    },
    hero: {
      title: 'Soluciones Tecnológicas para su Negocio',
      subtitle: 'Ofrecemos consultoría experta, servicios de redes sociales y soluciones de Google Workspace para ayudar a su pequeña o mediana empresa a prosperar en la era digital.',
      ctaPrimary: 'Obtener Consulta Gratis',
      ctaSecondary: 'Explore Nuestros Servicios',
    },
    services: {
      title: 'Nuestros Servicios Principales',
      subtitle: 'Soluciones tecnológicas a medida para impulsar el crecimiento y la eficiencia en su negocio.',
      items: {
        consulting: {
          title: 'Consultoría Tecnológica',
          description: 'Estrategia de TI, transformación digital e integración de sistemas para optimizar sus operaciones.',
        },
        social: {
          title: 'Servicios de Redes Sociales',
          description: 'Estrategia, creación de contenido y gestión de comunidades para hacer crecer su presencia en línea.',
        },
        assistants: {
          title: 'Asistentes Virtuales',
          description: 'Soporte confiable en administración, servicio al cliente y entrada de datos para las necesidades de su negocio.',
        },
        gworkspace: {
          title: 'Configuración de Google Workspace',
          description: 'Implementación completa, capacitación de usuarios y soporte continuo para Google Workspace.',
        },
        migration: {
          title: 'Migración de Office 365 a Google',
          description: 'Migración de datos sin problemas de Office 365 a Google Workspace con un tiempo de inactividad mínimo.',
        },
      },
    },
    aboutPreview: {
        title: "Su Socio Tecnológico Local en Miami",
        description: "Stertup Consulting LLC es una firma de consultoría tecnológica con sede en Miami dedicada a ayudar a las pequeñas y medianas empresas a aprovechar la tecnología para el crecimiento. Nuestro equipo bilingüe entiende el mercado local y está comprometido con su éxito.",
        cta: "Conozca Más Sobre Nosotros",
        imageAlt: "Un equipo diverso de profesionales colaborando en una oficina moderna en Miami."
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Estamos orgullosos de asociarnos con empresas en todo Miami. Esto es lo que tienen que decir sobre nuestro trabajo.',
      items: {
        client1: {
          name: 'Maria Rodriguez',
          company: 'CEO, Miami Innovations',
          quote: 'La migración a Google Workspace fue perfecta. El equipo de Stertup fue profesional y eficiente. ¡Muy recomendable!',
        },
        client2: {
          name: 'John Davis',
          company: 'Dueño, Sunshine Cafe',
          quote: 'Sus servicios de redes sociales duplicaron nuestra interacción en línea. Un socio fantástico para cualquier pequeña empresa.',
        },
        client3: {
          name: 'Carlos Gomez',
          company: 'Fundador, Gomez Legal',
          quote: 'La consulta tecnológica nos proporcionó una hoja de ruta clara para nuestra transformación digital. Un consejo invaluable.',
        },
      },
    },
    blogPreview: {
        title: "De Nuestro Blog",
        subtitle: "Manténgase actualizado con los últimos consejos tecnológicos, conocimientos de la industria y noticias de la compañía.",
        posts: {
          'tech-trends-2024': {
            title: blogPostsEs['tech-trends-2024'].title,
            description: blogPostsEs['tech-trends-2024'].description
          },
          'google-workspace-tips': {
            title: blogPostsEs['google-workspace-tips'].title,
            description: blogPostsEs['google-workspace-tips'].description
          },
          'social-media-smb': {
            title: blogPostsEs['social-media-smb'].title,
            description: blogPostsEs['social-media-smb'].description
          }
        },
        readMore: "Leer Más",
        viewAll: "Ver Todas las Publicaciones"
    },
    faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Tiene preguntas? Encuentre respuestas rápidas aquí o pregúntele a nuestro asistente de IA.",
        commonQuestions: "Preguntas Comunes",
        askAi: "Pregúntele a Nuestra IA",
        placeholder: "Escriba su pregunta aquí...",
        submit: "Preguntar a la IA",
        loading: "Pensando...",
        error: "Lo siento, no pude encontrar una respuesta. Por favor, intente reformular su pregunta o contáctenos directamente.",
        validation: {
            question: "La pregunta debe tener al menos 10 caracteres."
        },
        questions: {
            q1: {
                q: "¿Con qué tipo de empresas trabajan?",
                a: "Nos especializamos en proporcionar soluciones tecnológicas para pequeñas y medianas empresas (PyMEs) en diversas industrias en el área de Miami."
            },
            q2: {
                q: "¿Ofrecen servicios en español?",
                a: "Sí, nuestro equipo es completamente bilingüe. Ofrecemos todos nuestros servicios, consultas y soporte tanto en inglés como en español para servir mejor a la diversa comunidad de Miami."
            },
            q3: {
                q: "¿Cuánto tiempo toma una migración de Office 365 a Google Workspace?",
                a: "El cronograma para una migración depende del tamaño de su organización y la cantidad de datos. Creamos un plan detallado para garantizar una transición fluida con un tiempo de inactividad mínimo, generalmente completado en unos pocos días a una semana."
            },
            q4: {
              q: "¿Por qué debería elegir un consultor local en Miami?",
              a: "Trabajar con un consultor local significa que obtiene un socio que comprende los desafíos y oportunidades específicos del mercado de Miami. Ofrecemos soporte en el sitio y un servicio personalizado que los proveedores remotos no pueden igualar."
            }
        }
    },
    contact: {
        title: "Póngase en Contacto",
        subtitle: "¿Listo para comenzar un proyecto o tiene una pregunta? Nos encantaría saber de usted. Complete el formulario o use los datos de contacto a continuación.",
        form: {
            name: { label: "Su Nombre", placeholder: "Juan Pérez" },
            email: { label: "Su Correo Electrónico", placeholder: "usted@ejemplo.com" },
            subject: { label: "Asunto", placeholder: "Ej: Migración de Google Workspace" },
            message: { label: "Su Mensaje", placeholder: "Cuéntenos sobre su proyecto..." },
            submit: "Enviar Mensaje"
        },
        address: { title: "Nuestra Oficina", value: "Miami, Florida, USA" },
        email: { title: "Envíenos un Correo", value: "contacto@stertup.com" },
        phone: { title: "Llámenos", value: "+1 (234) 567-890" },
        validation: {
            name: "El nombre debe tener al menos 2 caracteres.",
            email: "Por favor, ingrese una dirección de correo electrónico válida.",
            subject: "El asunto debe tener al menos 5 caracteres.",
            message: "El mensaje debe tener al menos 10 caracteres."
        },
        toast: {
            title: "¡Mensaje Enviado!",
            description: "Gracias por contactarnos. Nos pondremos en contacto con usted en breve."
        }
    },
    footer: {
        tagline: "Tecnología para su Negocio.",
        links: "Enlaces Rápidos",
        about: "Nosotros",
        services: "Servicios",
        blog: "Blog",
        contact: "Contacto",
        contactInfo: "Información de Contacto",
        followUs: "Síganos",
        copyright: "Stertup Consulting LLC. Todos los derechos reservados."
    },
    aboutPage: {
        title: "Empoderando a los Negocios de Miami con Tecnología",
        subtitle: "Somos un equipo de apasionados expertos en tecnología dedicados a ayudar a los negocios locales a prosperar en el mundo digital.",
        story: {
            title: "Nuestra Historia",
            paragraph1: "Fundada en el corazón de Miami, Stertup Consulting LLC nació del deseo de cerrar la brecha tecnológica para las pequeñas y medianas empresas. Vimos demasiadas empresas locales luchando con sistemas obsoletos o perdiéndose el poder de las herramientas digitales. Nuestros fundadores, con décadas de experiencia combinada en TI y marketing digital, decidieron crear una firma de consultoría que habla el idioma de los negocios, no solo la jerga tecnológica.",
            paragraph2: "Hoy, estamos orgullosos de ser un socio tecnológico de confianza para numerosas empresas en todo el sur de Florida. Nuestro enfoque bilingüe y nuestro profundo conocimiento del mercado local nos posicionan de manera única para servir a nuestra vibrante comunidad.",
            imageAlt: "Un hermoso horizonte de Miami al atardecer."
        },
        mission: {
            title: "Nuestra Misión",
            text: "Proveer soluciones tecnológicas accesibles, efectivas y asequibles que impulsen el crecimiento, la eficiencia y la innovación para las pequeñas y medianas empresas."
        },
        local: {
            title: "Orgullosamente de Miami",
            text: "Estamos comprometidos con el éxito de nuestra comunidad local. Estar basados en Miami nos permite ofrecer un soporte personalizado y presencial a nuestros clientes."
        },
        team: {
            title: "Conozca a Nuestro Equipo",
            subtitle: "Los expertos detrás de su éxito tecnológico.",
            role1: "Consultor Tecnológico Principal",
            role2: "Directora de Marketing Digital",
            role3: "Gerente de Éxito del Cliente"
        }
    },
    servicesPage: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones tecnológicas integrales diseñadas para las necesidades de su negocio.",
        items: {
            consulting: {
                title: 'Consultoría Tecnológica',
                description: 'Ofrecemos orientación estratégica para alinear su tecnología con sus objetivos de negocio. Desde la planificación hasta la ejecución, somos sus socios en la transformación digital.',
                points: ["Estrategia y Planificación de TI", "Transformación Digital", "Evaluaciones Tecnológicas", "Integración de Sistemas"]
            },
            social: {
                title: 'Servicios de Redes Sociales',
                description: 'Construya una poderosa presencia en línea con nuestros servicios expertos en redes sociales. Creamos contenido atractivo y gestionamos sus comunidades para hacer crecer su marca.',
                points: ["Desarrollo de Estrategia", "Creación de Contenido", "Campañas Publicitarias", "Gestión de Comunidad"]
            },
            assistants: {
                title: 'Asistentes Virtuales',
                description: "Delegue sus tareas administrativas a nuestros asistentes virtuales de confianza. Libere su tiempo para centrarse en lo que mejor sabe hacer: hacer crecer su negocio.",
                points: ["Soporte Administrativo", "Servicio al Cliente", "Entrada de Datos", "Programación de Citas"]
            },
            gworkspace: {
                title: 'Configuración de Google Workspace',
                description: "Aproveche el poder de la colaboración con Google Workspace. Ofrecemos configuración completa, capacitación y soporte para que su equipo trabaje de manera eficiente.",
                points: ["Implementación Completa", "Capacitación de Usuarios", "Configuración Personalizada", "Soporte Continuo"]
            },
            migration: {
                title: 'Migración de Office 365 a Google',
                description: "Realice un cambio sin problemas a Google Workspace. Nuestro proceso de migración probado garantiza que sus datos estén seguros y que su negocio no experimente interrupciones.",
                points: ["Planificación Fluida", "Transferencia Segura de Datos", "Capacitación de Usuarios", "Mínimo Tiempo de Inactividad"]
            },
        }
    },
    blog: {
      title: "Nuestro Blog",
      subtitle: "Consejos tecnológicos, perspectivas de la industria y actualizaciones de la empresa para mantenerlo a la vanguardia.",
      back_to_blog: "Volver al Blog",
      posts: blogPostsEs
    }
  },
};
