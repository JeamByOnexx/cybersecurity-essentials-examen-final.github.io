
const questions = [
    {
        question: "Los técnicos están probando la seguridad de un sistema de autenticación que utiliza contraseñas. ¿Cuáles son las dos causas de que los valores de hash difieran entre sistemas?",
        options: [
            "Un sistema utiliza el hash y el otro utiliza el hash y el salt.",
            "Ambos sistemas utilizan MD5.",
            "Un sistema utiliza el hash simétrico y el otro utiliza el hash asimétrico.",
            "Los sistemas utilizan diferentes algoritmos de hash.",
            "Ambos sistemas codifican las contraseñas antes del hash."
        ],
        correct: [0, 3]
    },
    {
        question: "¿Qué tipo de ataque realiza un delincuente cibernético al enviar paquetes maliciosos al servidor que no puede procesarlos y se bloquea?",
        options: ["DoS", "Inyección SQL", "Man-in-the-middle", "Inyección de paquete"],
        correct: [0]
    },
    {
        question: "¿Qué tecnología se podría utilizar para evitar que un descifrador lance un ataque de diccionario o fuerza bruta a un hash?",
        options: ["MD5", "AES", "Tablas de arcoíris", "HMAC"],
        correct: [3]
    },
    {
        question: "¿Qué tipo de ataque a la aplicación se produce cuando los datos van más allá de las áreas de memoria asignadas a la aplicación?",
        options: ["Inyección SQL", "Desbordamiento de búfer", "Falsificación de RAM", "Inyección de RAM"],
        correct: [1]
    },
    {
        question: "¿Qué tipo de control es mantener las copias de respaldo de datos externos como recuperación tras un desastre?",
        options: ["de archivos", "Control preventivo", "Control de detección", "Control correctivo"],
        correct: [1]
    },
    {
        question: "¿Qué características tiene una función criptográfica de hash?",
        options: [
            "La salida tiene una longitud variable.",
            "El hash requiere una clave pública y una clave privada.",
            "La entrada de hash se puede calcular según el valor de salida.",
            "La función de hash es una función matemática unidireccional."
        ],
        correct: [3]
    },
    {
        question: "¿Qué tipo de ataque interferiría en la comunicación de red establecida mediante el uso de paquetes falsificados que parecen normales?",
        options: ["Programas detectores de paquetes", "Falsificación de DNS", "AP WiFi no confiable", "Falsificación de paquetes"],
        correct: [3]
    },
    {
        question: "¿Qué amenaza se mitiga mediante la capacitación de conocimiento del usuario y vinculando la seguridad a revisiones de rendimiento?",
        options: [
            "Amenazas relacionadas con el usuario",
            "Amenazas físicas",
            "Amenazas relacionadas con el dispositivo",
            "Amenazas relacionadas con la nube"
        ],
        correct: [0]
    },
    {
        question: "¿Qué tecnología se utilizaría para aplicar la política de que un dispositivo informático debe tener actualizaciones de antivirus antes de conectarse a la red del campus?",
        options: ["SAN", "NAC", "VPN", "NAS"],
        correct: [1]
    },
    {
        question: "Un empleado recibe un correo que solicita restablecer la contraseña inmediatamente. ¿Qué tipo de ataque es esto?",
        options: [
            "Suplantación de identidad",
            "Ataque de DDoS",
            "Ataque combinado",
            "Correo engañoso"
        ],
        correct: [3]
    },
    {
        question: "¿Qué marco de trabajo se debe recomendar para establecer un sistema completo de administración de seguridad informática en una organización?",
        options: [
            "ISO/IEC 27000",
            "Modelo de OSI ISO",
            "Marco de trabajo de NIST/NICE",
            "Tríada de CIA"
        ],
        correct: [0]
    },
    {
        question: "¿Qué estrategias de mitigación de riesgos incluyen servicios de tercerización y seguro de compra?",
        options: ["de desastres", "Aceptación", "Transferencia", "de reducción"],
        correct: [2]
    },
    {
        question: "Se le solicita a un especialista en ciberseguridad que identifique a los delincuentes potenciales que se conocer por atacar a la organización. ¿Con qué tipos de hackers tendría menos preocupación el especialista?",
        options: [
            "Script kiddies",
            "Hackers de sombrero gris",
            "Hackers de sombrero blanco",
            "Hackers de sombrero negro"
        ],
        correct: [3]
    },
    {
        question: "En qué dominios de ciberseguridad se incluyen los sistemas de HVAC, de agua y de incendio?",
        options: [
            "red",
            "instalaciones físicas",
            "dispositivo",
            "usuario"
        ],
        correct: [2]
    },
    {
        question: "Que control de acceso debe utilizar el departamento de TI para restaurar un sistema a su estado normal?",
        options: [
            "Control de compensación",
            "Control de detección",
            "Control preventivo",
            "Control correctivo"
        ],
        correct: [2]
    },
    {
        question: "¿Qué tipo de redes presentan desafíos cada vez mayores para los especialistas en ciberseguridad debido al crecimiento de BYOD en el campus?",
        options: ["red de transferencia", "redes cableadas", "redes inalámbricas", "redes virtuales"],
        correct: [2]
    },
    {
        question: "¿Qué tipo de ataque puede evitar la autenticación mutua?",
        options: ["Man-in-the-middle", "Análisis inalámbrico", "Suplantación inalámbrica de direcciones IP", "Envenenamiento inalámbrico"],
        correct: [0]
    },
    {
        question: "¿Qué utilidad de Windows debe utilizarse para configurar las reglas de contraseña y las políticas de bloqueo de cuenta en un sistema que no es parte de un dominio?",
        options: [
            "Administración de equipos",
            "Herramienta de seguridad de Active Directory",
            "Registro de seguridad del visor de eventos",
            "Herramienta de política de seguridad local"
        ],
        correct: [3]
    },
    {
        question: "Una organización planea implementar la capacitación en seguridad para capacitar a los empleados sobre las políticas de seguridad. ¿Qué tipo de control de acceso intenta implementar la organización?",
        options: ["Físico", "Lógico", "Administrativo", "Tecnológico"],
        correct: [2]
    },
    {
        question: "Una organización ha determinado que un empleado ha estado descifrando las contraseñas en cuentas administrativas para acceder a información altamente confidencial de la nómina. ¿Qué herramientas debería buscar en el sistema del empleado? (Elija tres opciones)",
        options: [
            "Tablas de algoritmo",
            "Puntos de acceso dudosos",
            "Tablas de búsqueda",
            "Tablas de búsqueda inversas",
            "Tablas de arcoíris",
            "Compendio de contraseñas"
        ],
        correct: [2, 3, 4]
    },
    {
        question: "¿Qué enfoque en la disponibilidad proporciona la protección más integral porque las múltiples defensas se coordinan para prevenir ataques?",
        options: ["Limitación", "Diversidad", "Organización en capas", "Oscuridad"],
        correct: [2]
    },
    {
        question: "¿Qué recurso nacional se desarrolló como resultado de un pedido del Poder Ejecutivo de EE. UU., después de un estudio de colaboración de diez meses que involucra a más de 3000 profesionales de seguridad?",
        options: [
            "Marco de trabajo de NIST",
            "Modelo de OSI ISO",
            "ISO/IEC 27000",
            "La base de datos nacional de vulnerabilidad (NVD)"
        ],
        correct: [0]
    },
    {
        question: "¿Qué técnica crea diferentes hashes para la misma contraseña?",
        options: ["HMAC", "SHA-256", "Técnica de «salting»", "CRC"],
        correct: [2]
    },
    {
        question: "¿Qué protocolos presentan amenazas al switching? (Elija dos opciones).",
        options: ["IP", "WPA2", "STP", "RIP", "ICMP", "ARP"],
        correct: [2, 5]
    },
    {
        question: "¿Qué tipo de integridad tiene una base de datos cuando todas las filas tienen un identificador único llamado clave principal?",
        options: [
            "Integridad referencial",
            "Integridad de la entidad",
            "Integridad del dominio",
            "Integridad definida por el usuario"
        ],
        correct: [1]
    },
    {
        question: "¿Qué declaración describe de mejor manera la motivación de los hacktivistas?",
        options: [
            "Son parte del grupo de protesta detrás de una causa política.",
            "Están interesados en la detección de nuevos ataques.",
            "Intentan alardear sus habilidades de hacking.",
            "Son curiosos y aprenden las habilidades de hacking."
        ],
        correct: [0]
    },
    {
        question: "¿Qué tipo de ataque realiza un delincuente al intentar saturar los resultados de búsqueda con sitios web maliciosos?",
        options: ["Envenenamiento SEO", "Spam", "Secuestrador de navegadores", "Envenenamiento de DNS"],
        correct: [0]
    },
    {
        question: "¿Qué algoritmo de hash se recomienda para la protección de información confidencial, no clasificada?",
        options: ["MD5", "3DES", "SHA-256", "AES-256"],
        correct: [2]
    },
    {
        question: "¿Qué grupo de elementos describe los componentes de la tríada de CIA?",
        options: [
            "Confidencialidad, integridad y autenticación",
            "Disponibilidad, encriptación y autorizaciones",
            "Confidencialidad, integridad y disponibilidad",
            "Autorización, privacidad y control"
        ],
        correct: [2]
    },
    {
        question: "¿Qué tecnología se utiliza para garantizar la confidencialidad de los datos?",
        options: ["Encriptación", "RAID", "Administración de identidades", "Hash"],
        correct: [0]
    },
    {
        question: "¿Qué tipo de ataque implica que un delincuente intercepte y modifique la comunicación entre dos partes sin que lo sepan?",
        options: ["Man-in-the-middle", "Ataque DoS", "Envenenamiento DNS", "Pharming"],
        correct: [0]
    },
    {
        question: "¿Qué estrategia de control de acceso permite al propietario de un objeto decidir quién puede acceder a él?",
        options: ["ACL", "DAC", "MAC", "RBAC"],
        correct: [1]
    },
    {
        question: "¿Qué tipo de ataque se produce cuando los datos van más allá de las áreas de memoria asignadas?",
        options: [
            "Inyección SQL",
            "Desbordamiento de búfer",
            "Falsificación de identidad",
            "Inyección de paquetes"
        ],
        correct: [1]
    },
    {
        question: "¿Qué control de recuperación tras un desastre se demuestra al mantener copias de respaldo externas?",
        options: [
            "Control preventivo",
            "Control de detección",
            "Control correctivo",
            "Control compensativo"
        ],
        correct: [0]
    },
    {
        question: "¿Qué herramienta debe utilizar un especialista para identificar vulnerabilidades en la configuración del sistema operativo?",
        options: [
            "Análisis de línea de base de Microsoft",
            "Sistemas de auditoría de red",
            "Visor de eventos de Windows",
            "Software de monitoreo en tiempo real"
        ],
        correct: [0]
    },
    {
        question: "¿Qué tipo de integridad se garantiza en una base de datos si las filas tienen un identificador único?",
        options: [
            "Integridad de la entidad",
            "Integridad referencial",
            "Integridad de dominio",
            "Integridad definida por el usuario"
        ],
        correct: [0]
    },
    {
        question: "¿Qué protocolo se utiliza para asegurar las comunicaciones remotas a través de la red?",
        options: ["Telnet", "SSH", "WPA2", "HTTP"],
        correct: [1]
    },
    {
        question: "¿Qué tipo de ataque intenta engañar a los usuarios para que revelen información confidencial mediante tácticas de ingeniería social?",
        options: ["Phishing", "Ransomware", "Man-in-the-middle", "SQL Injection"],
        correct: [0]
    },
    {
        question: "¿Qué medida de seguridad debe implementar para evitar que hosts no autorizados accedan a la red?",
        options: ["Implementar un firewall", "Utilizar un VLAN", "Usar RAID", "Configurar una VPN"],
        correct: [0]
    },
    {
        question: "¿Qué tipo de malware puede introducirse si un empleado descarga un programa de análisis de terceros para la impresora?",
        options: ["Gusano", "Spam", "Phishing", "Troyano"],
        correct: [0]
    },
    {
        question: "¿Qué característica permite a los cifrados por bloque diferenciarse de los cifrados de flujo?",
        options: [
            "Procesan datos por bloques en lugar de un flujo continuo.",
            "Generan salidas más grandes que los datos de entrada.",
            "Cifran cada bit individualmente.",
            "Son más rápidos que los cifrados de flujo."
        ],
        correct: [0]
    },
    {
        question: "¿Qué tecnología de almacenamiento asegura alta disponibilidad mediante redundancia?",
        options: ["RAID", "SAN", "VLAN", "VPN"],
        correct: [0]
    },
    {
        question: "¿Qué técnica permite ocultar texto dentro de imágenes mediante la manipulación de bits?",
        options: [
            "El bit menos significativo",
            "Enmascaramiento de datos",
            "El bit más significativo",
            "Codificación avanzada"
        ],
        correct: [0]
    },
    {
        question: "¿Qué recurso debe consultar para identificar detalles específicos de vulnerabilidades conocidas?",
        options: [
            "Base de datos de vulnerabilidades CVE",
            "Modelo de OSI",
            "Infragard",
            "Proyecto Honeynet"
        ],
        correct: [0]
    },
    {
        question: "¿Qué combinación de principios de seguridad constituye la base de un plan de seguridad informática?",
        options: [
            "Tecnologías, políticas y conocimiento",
            "Encriptación, autenticación e identificación",
            "Privacidad, identificación y no rechazo",
            "Confidencialidad, integridad y disponibilidad"
        ],
        correct: [3]
    },
    {
        question: "¿Qué tipo de ataque implica que un atacante sobrecargue un sistema para que no pueda atender solicitudes legítimas?",
        options: ["DoS", "Phishing", "Man-in-the-middle", "Inyección SQL"],
        correct: [0]
    },
    {
        question: "¿Qué tipo de malware restringe el acceso a los datos de una víctima exigiendo un pago?",
        options: ["Ransomware", "Troyano", "Gusano", "Spyware"],
        correct: [0]
    },
    {
        question: "¿Qué técnica se utiliza para reemplazar datos confidenciales con datos ficticios en entornos no productivos?",
        options: [
            "Esteganografía",
            "Ofuscación de software",
            "Enmascaramiento de datos",
            "Estegoanálisis"
        ],
        correct: [2]
    },
    {
        question: "¿Qué algoritmo de hash requiere el uso de claves para garantizar la integridad y autenticidad de los datos?",
        options: ["HMAC", "MD5", "SHA-256", "CRC"],
        correct: [0]
    },
    {
        question: "¿Qué tecnología garantiza la autenticidad y confidencialidad de las transacciones en línea?",
        options: [
            "Firma digital",
            "Cifrado asimétrico",
            "Certificado digital",
            "Técnica de «salting»"
        ],
        correct: [2]
    },
    {
        question: "¿Qué tipo de amenaza se mitiga mejor mediante la capacitación y la creación de conciencia entre los empleados?",
        options: [
            "Amenazas físicas",
            "Amenazas internas",
            "Ataques de ingeniería social",
            "Ataques de denegación de servicio"
        ],
        correct: [2]
    },
    {
        question: "¿Qué técnica permite calcular la expectativa anual de pérdida (ALE) durante un análisis de riesgos?",
        options: [
            "Índice de frecuencia anual y pérdida simple",
            "Valor de activos y factor de exposición",
            "Análisis de amenazas y vulnerabilidades",
            "Cálculo de impacto financiero"
        ],
        correct: [0]
    },
    {
        question: "¿Qué tipo de control de seguridad implica el uso de permisos de archivo para limitar el acceso?",
        options: ["Limitación", "Oscuridad", "Organización en capas", "Diversidad"],
        correct: [0]
    },
    {
        question: "¿Qué herramienta de seguridad permite detectar configuraciones incorrectas y vulnerabilidades en sistemas operativos?",
        options: [
            "Escáner de vulnerabilidad",
            "Análisis de paquetes",
            "Firewall",
            "Antivirus"
        ],
        correct: [0]
    },
    {
        question: "¿Qué componente de la tríada CIA se centra en garantizar que los datos estén disponibles para los usuarios autorizados?",
        options: ["Confidencialidad", "Integridad", "Disponibilidad", "Autenticación"],
        correct: [2]
    },
    {
        question: "¿Qué amenaza cibernética aprovecha relaciones de confianza entre sistemas para falsificar su identidad?",
        options: [
            "Spoofing",
            "Phishing",
            "Inyección SQL",
            "Man-in-the-middle"
        ],
        correct: [0]
    },
    {
        question: "¿Qué tipo de control de acceso utiliza atributos como roles y permisos para definir derechos de acceso?",
        options: ["DAC", "MAC", "RBAC", "ACL"],
        correct: [2]
    },
    {
        question: "¿Qué tipo de ataque explota vulnerabilidades en los protocolos de red como STP y ARP?",
        options: ["Ataque a switches", "Inyección de paquetes", "Ataque DoS", "Phishing"],
        correct: [0]
    },
    {
        question: "¿Qué tecnología permite identificar dispositivos no autorizados antes de que se conecten a la red?",
        options: ["NAC", "VPN", "Firewall", "IDS"],
        correct: [0]
    },
    {
        question: "¿Qué protocolo se utiliza para autenticar el origen de los paquetes y verificar su integridad en una VPN?",
        options: ["CRC", "Técnica de «salting»", "HMAC", "Contraseña"],
        correct: [2]
    },
    {
        question: "¿Qué ley fue decretada para evitar delitos relacionados con la auditoría corporativa?",
        options: [
            "Ley de Gramm-Leach-Bliley",
            "Ley Sarbanes-Oxley",
            "Ley Federal de Administración de Seguridad de la Información",
            "Ley de encriptación de importación y exportación"
        ],
        correct: [1]
    },
    {
        question: "¿Qué control de seguridad se implementa al instalar software antivirus en una organización?",
        options: [
            "Control preventivo",
            "Control de detección",
            "Control de recuperación",
            "Control correctivo"
        ],
        correct: [1]
    },
    {
        question: "¿Qué tipo de ataque haría que un archivo de base de datos quede cifrado y exija un pago para restaurarlo?",
        options: ["Ataque DoS", "Ransomware", "Troyano", "Man-in-the-middle"],
        correct: [1]
    },
    {
        question: "¿Qué amenaza se enfrenta cuando los usuarios hacen clic en enlaces de correos electrónicos engañosos?",
        options: ["Phishing", "Ransomware", "Spam", "Ataque DDoS"],
        correct: [0]
    },
    {
        question: "¿Qué enfoque de recuperación ante desastres implica sistemas de respaldo en sitios remotos?",
        options: ["Sitio caliente", "RAID", "Clúster activo", "Plan de emergencia"],
        correct: [0]
    },
    {
        question: "¿Qué tipo de ataque utiliza botnets para desbordar la capacidad de un servidor o red?",
        options: [
            "Ataque DoS",
            "Ataque DDoS",
            "Pharming",
            "Envenenamiento DNS"
        ],
        correct: [1]
    },
    {
        question: "¿Qué protocolo de seguridad inalámbrica hizo obligatorio el uso de AES y CCM?",
        options: ["WEP", "WPA", "WPA2", "802.11i"],
        correct: [2]
    },
    {
        question: "¿Qué tipo de integridad tiene una base de datos cuando se asegura que todas las claves externas correspondan a claves primarias?",
        options: [
            "Integridad referencial",
            "Integridad de la entidad",
            "Integridad de dominio",
            "Integridad definida por el usuario"
        ],
        correct: [0]
    },
    {
        question: "¿Qué herramienta permite monitorear vulnerabilidades en sistemas y evaluar su criticidad?",
        options: [
            "Base de datos de CVE",
            "Proyecto Honeynet",
            "Análisis de línea de base",
            "Sistema IDS"
        ],
        correct: [0]
    },
    {
        question: "¿Qué estrategia de mitigación de riesgos se basa en la compra de seguros o servicios de terceros?",
        options: ["Transferencia", "Aceptación", "Reducción", "Evitación"],
        correct: [0]
    },
    {
        question: "¿Qué tipo de integridad está garantizada cuando se limita el tamaño y tipo de datos introducidos en una base de datos?",
        options: [
            "Integridad de dominio",
            "Integridad referencial",
            "Integridad de la entidad",
            "Integridad definida por el usuario"
        ],
        correct: [0]
    },
    {
        question: "¿Qué característica se busca en los sistemas que requieren cinco nueves de disponibilidad?",
        options: [
            "Tolerancia a fallas",
            "Un único punto de error",
            "Recuperación rápida",
            "Alta redundancia"
        ],
        correct: [0]
    },
    {
        question: "¿Qué tipo de atacante cibernético es más probable que cree malware para obtener beneficios económicos?",
        options: [
            "Script kiddies",
            "Hackers de sombrero blanco",
            "Hackers de sombrero negro",
            "Hacktivistas"
        ],
        correct: [2]
    },
    {
        question: "¿Qué control de acceso se usa para evitar que un atacante reclame que no realizó una acción específica?",
        options: ["Autenticación", "No repudio", "Confidencialidad", "Integridad"],
        correct: [1]
    },
    {
        question: "¿Qué herramienta de seguridad permite detectar y prevenir intrusiones en una red?",
        options: ["IDS", "Firewall", "VPN", "RAID"],
        correct: [0]
    },
    {
        question: "¿Qué técnica se utiliza para calcular el impacto financiero de un evento de riesgo?",
        options: [
            "Cálculo de expectativa de pérdida anual",
            "Análisis de vulnerabilidades",
            "Factor de exposición",
            "Frecuencia de impacto"
        ],
        correct: [0]
    },
    {
        question: "¿Qué tipo de ataque utiliza técnicas de intimidación para que la víctima actúe de forma insegura?",
        options: ["Phishing", "Ransomware", "Ingeniería social", "Ataque DDoS"],
        correct: [2]
    },
    {
        question: "¿Qué herramienta debe utilizarse para identificar configuraciones incorrectas en un sistema operativo?",
        options: [
            "Analizador de línea de base de seguridad de Microsoft",
            "Visor de eventos de Windows",
            "Software de detección de virus",
            "Administrador de recursos de red"
        ],
        correct: [0]
    },
    {
        question: "¿Qué principio de seguridad garantiza que la información no se modifique de manera no autorizada?",
        options: ["Confidencialidad", "Integridad", "Disponibilidad", "Autenticación"],
        correct: [1]
    },
    {
        question: "¿Qué tecnología garantiza la integridad de los datos mediante el uso de claves y funciones de hash?",
        options: ["HMAC", "MD5", "SHA-1", "AES"],
        correct: [0]
    },
    {
        question: "¿Qué estrategia de recuperación se utiliza para minimizar el impacto de un desastre natural en los datos?",
        options: ["Backups externos", "Planes de emergencia", "RAID", "Sistemas en sitio frío"],
        correct: [0]
    },
    {
        question: "¿Qué tipo de control de seguridad incluye restricciones físicas como puertas y cercas?",
        options: ["Control lógico", "Control físico", "Control administrativo", "Control compensativo"],
        correct: [1]
    },
    {
        question: "¿Qué característica describe mejor un ataque de suplantación de identidad?",
        options: [
            "Intercepta comunicaciones para manipular los datos",
            "Utiliza una identidad falsa para eludir autenticaciones",
            "Sobrecarga los servidores para denegar acceso",
            "Instala malware a través de correos electrónicos"
        ],
        correct: [1]
    },
    {
        question: "¿Qué herramienta se utiliza para monitorear actividad sospechosa en tiempo real en una red?",
        options: ["Firewall", "IDS", "Escáner de vulnerabilidades", "Honeynet"],
        correct: [1]
    },
    {
        question: "¿Qué protocolo garantiza comunicaciones seguras y encriptadas en una red insegura?",
        options: ["HTTP", "SSH", "Telnet", "FTP"],
        correct: [1]
    },
    {
        question: "¿Qué tipo de ataque manipula los resultados de búsqueda para dirigir a los usuarios a sitios maliciosos?",
        options: ["Envenenamiento SEO", "Phishing", "Envenenamiento de DNS", "Ataque DDoS"],
        correct: [0]
    },
    {
        question: "¿Qué método no técnico utiliza la ingeniería social para recopilar información confidencial?",
        options: ["Amenazas", "Estafas", "Manipulación psicológica", "Hackeo remoto"],
        correct: [2]
    },
    {
        question: "¿Qué control de acceso impide que usuarios no autorizados accedan a datos confidenciales?",
        options: ["Autenticación", "ACL", "MAC", "RBAC"],
        correct: [1]
    },
    {
        question: "¿Qué ataque utiliza técnicas de fuerza bruta para descifrar contraseñas?",
        options: [
            "Phishing",
            "Ataque de diccionario",
            "Ransomware",
            "Man-in-the-middle"
        ],
        correct: [1]
    },
    {
        question: "Se le ha solicitado que describa la validación de datos a los empleados encargados de la entrada de datos en cuentas por cobrar. ¿Cuáles de los siguientes son buenos ejemplos de cadenas, números enteros y decimales?",
        options: [
            "masculino, $25,25, veterano",
            "800-900-4560, 4040-2020-8978-0090, 01/21/2013",
            "sí/no 345-60-8745, TRF562",
            "femenino, 9866, $125,50"
        ],
        correct: [3]
    },
    {
        question: "¿Qué tipo de ataque ha experimentado una organización cuando un empleado instala un dispositivo no autorizado en la red para ver el tráfico de la red?",
        options: [
            "Suplantación de identidad (phishing)",
            "Falsificación de identidad (spoofing)",
            "Análisis",
            "Envío de correo no deseado"
        ],
        correct: [2]
    },
    {
        question: "Se invita a un especialista del departamento de RR. HH. a promover el programa de ciberseguridad en escuelas de la comunidad. ¿Cuáles son los tres temas que el especialista acentuaría en la presentación para atraer a los estudiantes a este campo? (Elija tres opciones).",
        options: [
            "Alta posibilidad de ganancias",
            "Un trabajo con rutina y tareas cotidianas",
            "Un campo profesional con gran demanda",
            "Servicio al público",
            "La certificación CompTIA A+ proporciona una base de conocimientos adecuada para el campo",
            "Un campo que requiere un título de doctorado"
        ],
        correct: [0, 2, 3]
    },
    {
        question: "¿Qué tecnología puede implementarse como parte de un sistema de autenticación para verificar la identificación de los empleados?",
        options: [
            "Una huella digital virtual",
            "Un lector de tarjetas inteligentes",
            "Una trampa",
            "Hash SHA-1"
        ],
        correct: [1]
    },
    {
        question: "Un delincuente cibernético envía una serie de paquetes con formato malicioso al servidor de la base de datos. El servidor no puede analizar los paquetes y el evento provoca la falla del servidor. ¿Cuál es el tipo de ataque que lanza un delincuente cibernético?",
        options: [
            "DoS",
            "Inyección SQL",
            "Man-in-the-middle",
            "Inyección de paquete"
        ],
        correct: [0]
    },
    {
        question: "¿Qué tecnología se podría utilizar para evitar que un descifrador lance un ataque de diccionario o de fuerza bruta a un hash?",
        options: [
            "MD5",
            "AES",
            "Tablas de arcoíris",
            "HMAC"
        ],
        correct: [3]
    },
    {
        question: "¿Qué declaración describe un ataque de denegación de servicio distribuida?",
        options: [
            "Un atacante envía una cantidad enorme de datos que un servidor no puede manejar.",
            "Una computadora acepta los paquetes de datos según la dirección MAC de otra computadora.",
            "Un atacante crea un botnet conformado por zombies.",
            "Un atacante ve el tráfico de red para conocer las credenciales de autenticación."
        ],
        correct: [2]
    },
    {
        question: "¿Cuál es una característica de una función criptográfica de hash?",
        options: [
            "La salida tiene una longitud variable.",
            "El hash requiere una clave pública y una clave privada.",
            "La entrada de hash se puede calcular según el valor de salida.",
            "La función de hash es una función matemática unidireccional."
        ],
        correct: [3]
    },
    {
        question: "¿Cuáles son las tres mejores prácticas que pueden ayudar a defenderse de los ataques de ingeniería social? (Elija tres opciones).",
        options: [
            "Implementar dispositivos de firewall bien diseñados.",
            "Habilitar una política que establezca que el departamento de TI deba proporcionar información telefónica solo a los gerentes.",
            "Capacitar a los empleados sobre las políticas.",
            "Agregar más protecciones de seguridad.",
            "Resista el impulso de hacer clic en enlaces de sitio web atractivos.",
            "No ofrecer restablecimientos de contraseña en una ventana de chat."
        ],
        correct: [2, 4, 5]
    }    

];

// Inicializar el cuestionario
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
let userAnswers = questions.map(() => new Set()); // Respuestas del usuario como conjuntos para manejar selecciones múltiples

// Estado inicial: deshabilitar el botón de resultados
submitButton.disabled = true;

// Crear mensaje indicativo dinámico
const messageElement = document.createElement('p');
messageElement.id = 'message';
messageElement.style.textAlign = 'center';
messageElement.style.fontWeight = 'bold';
messageElement.style.color = '#ff0000';
messageElement.textContent = `Responde todas las preguntas para ver los resultados.`;
quizContainer.appendChild(messageElement);

// console.log(questions.length)

// Renderizar las preguntas
questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${q.question}</p>`;

    q.options.forEach((option, i) => {
        const optionButton = document.createElement('div');
        optionButton.classList.add('option');
        optionButton.textContent = option;

        // Evento para manejar la selección de opciones
        optionButton.addEventListener('click', () => {
            // Si es una pregunta con múltiples respuestas correctas
            if (q.correct.length > 1) {
                if (userAnswers[index].has(i)) {
                    userAnswers[index].delete(i); // Desmarcar si ya está seleccionada
                    optionButton.classList.remove('selected');
                } else {
                    userAnswers[index].add(i); // Marcar como seleccionada
                    optionButton.classList.add('selected');
                }
            } else {
                // Pregunta con una única respuesta correcta
                const allOptions = questionDiv.querySelectorAll('.option');
                allOptions.forEach(opt => {
                    opt.classList.remove('selected', 'disabled');
                    opt.style.pointerEvents = 'auto';
                });
                userAnswers[index] = new Set([i]);
                optionButton.classList.add('selected');
            }

            // Deshabilitar pregunta si todas las opciones están seleccionadas (para preguntas múltiples)
            if (userAnswers[index].size === q.correct.length || q.correct.length === 1) {
                const allOptions = questionDiv.querySelectorAll('.option');
                allOptions.forEach(opt => {
                    opt.classList.add('disabled');
                    opt.style.pointerEvents = 'none';
                });

                // Resaltar respuestas correctas e incorrectas
                allOptions.forEach((opt, j) => {
                    if (q.correct.includes(j)) {
                        opt.classList.add('correct'); // Verde
                    } else if (userAnswers[index].has(j)) {
                        opt.classList.add('incorrect'); // Rojo
                    }
                });

                // Mostrar retroalimentación
                const feedback = document.createElement('p');
                feedback.classList.add('feedback');

                const isCorrect = [...userAnswers[index]].every(
                    selected => q.correct.includes(selected)
                ) && userAnswers[index].size === q.correct.length;

                if (isCorrect) {
                    feedback.textContent = "¡Correcto!";
                    feedback.classList.add('feedback-correct');
                } else {
                    feedback.textContent = "¡Incorrecto!";
                    feedback.classList.add('feedback-incorrect');
                }
                questionDiv.appendChild(feedback);

                // Actualizar estado del botón "Ver resultados"
                checkIfAllAnswered();
            }
        });

        questionDiv.appendChild(optionButton);
    });

    quizContainer.appendChild(questionDiv);
});

// Validar si todas las preguntas fueron respondidas
function checkIfAllAnswered() {
    const allAnswered = userAnswers.every(
        (answer, index) => answer.size > 0 || (questions[index].correct.length === 1 && answer.size === 1)
    );

    if (allAnswered) {
        submitButton.disabled = false;
        messageElement.textContent = "¡Ya puedes ver los resultados!";
        messageElement.style.color = "#28a745"; // Verde
    } else {
        submitButton.disabled = true;
        const unanswered = userAnswers.filter(answer => answer.size === 0).length;
        messageElement.textContent = `Faltan ${unanswered} pregunta(s) por responder.`;
        messageElement.style.color = "#ff0000"; // Rojo
    }
}

// Mostrar los resultados al hacer clic en el botón
submitButton.addEventListener('click', () => {
    let score = 0;

    // Calcular el puntaje solo con respuestas correctas
    userAnswers.forEach((answer, index) => {
        const isCorrect = [...answer].every(selected => questions[index].correct.includes(selected)) &&
                          answer.size === questions[index].correct.length;

        if (isCorrect) {
            score++;
        }
    });

    scoreElement.textContent = `Tu puntaje es: ${score} de ${questions.length}`;
});
