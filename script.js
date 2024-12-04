
const questions = [
    {
        question: "Los técnicos están probando la seguridad de un sistema de autenticación que utiliza contraseñas. Cuando un técnico examina las tablas de la contraseña, descubre que las contraseñas están almacenadas como valores hash. Sin embargo, después de comparar un hash de contraseña simple, el técnico luego detecta que los valores son diferentes de los que se encuentran en otros sistemas. ¿Cuáles son las dos causas de esta situación? (Elija dos opciones).",
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
    },
    {
        question: "¿Qué tipo de ataque de los delincuentes cibernéticos interferirían en la comunicación de red establecida mediante el uso de paquetes creados para que los paquetes parezcan que forman parte de la comunicación normal?",
        options: [
            "Programas detectores de paquete",
            "Falsificación de DNS",
            "AP wifi no confiable",
            "Falsificación del paquete",
        ],
        correct: [3]
    },
    {
        question: "¿Qué tipo de control es mantener las copias de respaldo de datos externos como recuperación tras un desastre?",
        options: ["de archivos", "Control preventivo", "Control de detección", "Control correctivo"],
        correct: [1]
    },
    {
        "question": "¿Qué tipo de ataque a la aplicación se produce cuando los datos van más allá de las áreas de memoria asignadas a la aplicación?",
        "options": ["Inyección SQL", "Desbordamiento de búfer", "Falsificación de RAM", "Inyección de RAM"],
        "correct": [1]
    },
    {
        "question": "Existen muchos entornos que requieren cinco nueves, pero un entorno de cinco nueves puede ser prohibitivo según los costos. ¿Cuál es un ejemplo en el que un entorno de los cinco nueves puede ser prohibitivo según los costos?",
        "options": ["Bolsa de valores de Nueva York", "Grandes almacenes en el centro comercial local", "La oficina central de un equipo deportivo de la primera división", "Departamento de Educación de los Estados Unidos"],
        "correct": [0]
    },
    {
        "question": "¿Cuál de los siguientes productos o tecnologías utilizaría para establecer una línea de base para un sistema operativo?",
        "options": ["Sistema de línea de base de SANS (SBS)", "MS Baseliner", "Analizador de la línea de base de CVE", "Analizador de la línea de base de seguridad de Microsoft"],
        "correct": [3]
    },
    {
        "question": "¿Qué tipo de redes presentan desafíos cada vez mayores para los especialistas en ciberseguridad debido al crecimiento de BYOD en el campus?",
        "options": ["red de transferencia", "redes cableadas", "redes inalámbricas", "redes virtuales"],
        "correct": [2]
    },
    {
        "question": "¿Qué tipo de ataque puede evitar la autenticación mutua?",
        "options": ["Man-in-the-middle", "Análisis inalámbrico", "Suplantación inalámbrica de direcciones IP", "Envenenamiento inalámbrico"],
        "correct": [0]
    },
    {
        "question": "¿Qué utilidad de Windows debe utilizarse para configurar las reglas de contraseña y las política de bloqueo de cuenta en un sistema que no es parte de un dominio?",
        "options": ["Administración de equipos", "Herramienta de seguridad de Active Directory", "Registro de seguridad del visor de eventos", "Herramienta de política de seguridad local"],
        "correct": [3]
    },
    {
        "question": "Una organización planea implementar la capacitación en seguridad para capacitar a los empleados sobre las políticas de seguridad. ¿Qué tipo de control de acceso intenta implementar la organización?",
        "options": ["Físico", "Lógico", "Administrativo", "Tecnológico"],
        "correct": [2]
    },
    {
        "question": "¿Qué amenaza se mitiga mediante la capacitación de conocimiento del usuario y la vinculación del conocimiento de seguridad con las revisiones de rendimiento?",
        "options": ["amenazas relacionadas con el usuario", "amenazas físicas", "amenazas relacionadas con el dispositivo", "amenazas relacionadas la nube"],
        "correct": [0]
    },
    {
        "question": "Una organización ha determinado que un empleado ha estado descifrando las contraseñas en cuentas administrativas para acceder a información altamente confidencial de la nómina. ¿Qué herramientas debería buscar en el sistema del empleado?",
        "options": ["Tablas de algoritmo", "Puntos de acceso dudosos", "Tablas de búsqueda", "Tablas de búsqueda inversas", "Tablas de arcoíris", "Compendio de contraseñas"],
        "correct": [2, 3, 4]
    },
    {
        "question": "¿Qué enfoque en la disponibilidad proporciona la protección más integral porque las múltiples defensas se coordinan para prevenir ataques?",
        "options": ["Limitación", "Diversidad", "Organización en capas", "Oscuridad"],
        "correct": [2]
    },
    {
        "question": "¿Qué recurso nacional se desarrolló como resultado de un pedido del Poder Ejecutivo de EE. UU., después de un estudio de colaboración de diez meses que involucra a más de 3000 profesionales de seguridad?",
        "options": ["Marco de trabajo de NIST", "Modelo de OSI ISO", "ISO/IEC 27000", "La base de datos nacional de vulnerabilidad (NVD)"],
        "correct": [0]
    },
    {
        "question": "Una organización permite que los empleados trabajen desde su hogar dos días a la semana. ¿Qué tecnología debería implementarse para garantizar la confidencialidad de los datos mientras estos se transmiten?",
        "options": ["SHS", "VLANS", "RAID", "VPN"],
        "correct": [3]
    },
    {
        "question": "¿Qué técnica crea diferentes hashes para la misma contraseña?",
        "options": ["HMAC", "SHA-256", "Técnica de «salting»", "CRC"],
        "correct": [2]
    },
    {
        "question": "¿Qué protocolos presentan amenazas al switching?",
        "options": ["IP", "WPA2", "STP", "RIP", "ICMP", "ARP"],
        "correct": [5, 2]
    },
    {
        "question": "¿Qué estado de datos se mantiene en el NAS y en los servicios de SAN?",
        "options": ["Datos cifrados", "Datos almacenados", "Datos en proceso", "Datos en tránsito"],
        "correct": [1]
    },
    {
        "question": "Una organización acaba de terminar una auditoría de seguridad. Su división se mencionó por no cumplir con los requisitos del estándar X.509. ¿Cuál es el primer control de seguridad que debe examinar?",
        "options": ["operaciones de hash", "reglas de validación de datos", "VPN y servicios de encriptación", "certificados digitales"],
        "correct": [3]
    },
    {
        "question": "Su administrador de riesgos acaba de distribuir un gráfico que utiliza tres colores para identificar el nivel de amenaza a los activos clave en los sistemas de seguridad informática. El color rojo representa el alto nivel de riesgo, el amarillo representa el nivel intermedio de amenazas y el verde representa el bajo nivel de amenazas. ¿Qué tipo de análisis de riesgos se representa en este gráfico?",
        "options": ["análisis de pérdida", "análisis cuantitativo", "análisis cualitativo", "análisis del factor de exposición"],
        "correct": [2]
    },
    {
        "question": "¿Qué protocolo se utilizaría para proporcionar seguridad a los empleados que tienen acceso a los sistemas de manera remota desde el hogar?",
        "options": ["SCP", "Telnet", "WPA", "SSH"],
        "correct": [3]
    },
    {
        "question": "¿Qué tecnología se puede utilizar para proteger VoIP ante las interceptaciones?",
        "options": ["Mensajes de vos cifrados", "ARP", "Autenticación segura.", "SSH"],
        "correct": [0]
    },
    {
        "question": "Un usuario tiene una gran cantidad de datos que deben mantenerse confidenciales. ¿Qué algoritmo cumpliría mejor este requisito?",
        "options": ["ECC", "Diffie-Hellman", "RSA", "3DES"],
        "correct": [3]
    },
    {
        "question": "El equipo está en proceso de realizar un análisis de riesgos en los servicios de base de datos. La información recopilada incluye el valor inicial de estos activos, las amenazas a los activos y el impacto de las amenazas. ¿Qué tipo de análisis de riesgos está realizando el equipo al calcular la expectativa anual de pérdida?",
        "options": ["análisis de protección", "análisis de pérdida", "análisis cualitativo", "análisis cuantitativo"],
        "correct": [3]
    },
    {
        "question": "¿Qué declaración describe las características de los cifrados por bloque?",
        "options": [
            "Los cifrados por bloque dan lugar a datos de salida que son más grandes que los datos de entrada la mayoría de las veces.",
            "Los cifrados por bloque son más rápidos que los cifrados de flujo.",
            "Los cifrados por bloque generar un resultado comprimido.",
            "Los cifrados por bloque cifran un texto simple un bit a la vez para formar un bloque."
        ],
        "correct": [0]
    },
    {
        "question": "¿Qué instrumento de ciberseguridad analiza el uso de contraseñas predeterminadas, parches faltantes, puertos abiertos, configuraciones incorrectas y direcciones IP activas?",
        "options": ["Analizadores de paquetes", "Escáners de vulnerabilidad", "Programas detectores de paquete", "Decodificadores de contraseñas"],
        "correct": [1]
    },
    {
        "question": "¿Qué métodos se pueden utilizar para implementar la autenticación de varios factores?",
        "options": ["IDS e IPS", "Token y hashes", "Contraseñas y huellas digitales", "VPN y VLAN"],
        "correct": [2]
    },
    {
        "question": "Alice y Bob usan la encriptación de clave pública para intercambiar un mensaje. ¿Qué tecla debe utilizar Alice para encriptar un mensaje a Bob?",
        "options": ["la clave pública de Alice", "la clave privada de Bob", "la clave privada de Alice", "la clave pública de Bob"],
        "correct": [3]
    },
    {
        "question": "¿Cómo se denomina cuando una organización instala solamente las aplicaciones que cumplen con las pautas y los administradores aumentan la seguridad al eliminar las demás aplicaciones?",
        "options": ["estandarización de activos", "disponibilidad de activos", "identificación de activos", "clasificación de activos"],
        "correct": [0]
    },
    {
        "question": "Alice y Bob utilizan una clave precompartida para intercambiar un mensaje confidencial. Si Bob desea enviar un mensaje confidencial a Carol, ¿qué clave debe utilizar?",
        "options": [
            "la clave pública de Bob",
            "una nueva clave precompartida",
            "la misma clave precompartida que utilizó con Alice",
            "la clave privada de Carol"
        ],
        "correct": [1]
    },
    {
        "question": "¿Antes de que los datos se envíen para análisis, ¿qué técnica se puede utilizar para reemplazar los datos confidenciales en entornos no relacionados con la producción, a fin de proteger la información subyacente?",
        "options": ["Esteganografía", "Ofuscación de software", "Sustitución de enmascaramiento de datos", "Estegoanálisis"],
        "correct": [2]
    },
    {
        "question": "¿En qué situación se garantizaría un control de detección?",
        "options": [
            "cuando la organización no pueda usar un perro guardián, por lo que será necesario considerar una alternativa",
            "cuando la organización necesita reparar el daño",
            "después de que la organización haya experimentado una violación para restaurar todo a un estado normal",
            "cuando la organización necesite buscar la actividad prohibida"
        ],
        "correct": [3]
    },
    {
        "question": "Una organización ha adoptado recientemente un programa de cinco nueves para dos servidores de base de datos críticos. ¿Qué tipo de controles implicará esto?",
        "options": [
            "acceso remoto a miles de usuarios externos",
            "limitación del acceso a los datos en estos sistemas",
            "sistemas de encriptación más sólidos",
            "mejora de la confiabilidad y tiempo de actividad de los servidores"
        ],
        "correct": [3]
    },
    {
        "question": "¿Cuáles son los tres protocolos que pueden utilizar el Estándar de cifrado avanzado (AES)?",
        "options": ["WPA2", "802.11q", "WPA", "WEP", "802.11i", "TKIP"],
        "correct": [0, 2, 4]
    },
    {
        "question": "Una organización ha implementado el software antivirus. ¿Qué tipo de control de seguridad implementó la empresa?",
        "options": ["Control de detección", "Control compensativo", "Control de recuperación", "Control disuasivo"],
        "correct": [2]
    },
    {
        "question": "Los usuarios informan que no se puede tener acceso a la base de datos del servidor principal. El administrador de una base de datos verifica el problema y advierte que el archivo de base de datos ahora está cifrado. La organización recibe un correo electrónico de amenaza en el que se exige un pago a cambio de descifrar el archivo de base de datos. ¿Qué tipo de ataque ha experimentado la organización?",
        "options": ["Ataque man-in-the-middle", "Ransomware", "Ataque DoS", "Troyano"],
        "correct": [1]
    },
    {
        "question": "¿Cuáles son las dos etapas de respuesta ante los incidentes?",
        "options": [
            "Detección y análisis",
            "Contención y recuperación",
            "Confidencialidad y erradicación",
            "Mitigación y aceptación",
            "Análisis de riesgos y alta disponibilidad",
            "Prevención y contención"
        ],
        "correct": [0, 1]
    },
    {
        "question": "Una VPN se utilizarpa en la organización para brindar a los usuarios remotos el acceso seguro a la red corporativa. ¿Qué utiliza IPsec para autenticar el origen de cada paquete a fin de proporcionar verificación de la integridad de datos?",
        "options": ["Técnica de «salting»", "CRC", "HMAC", "Contraseña"],
        "correct": [2]
    },
    {
        "question": "¿Qué tipo de ataque hará que los sitios web ilegítimos aparezcan más arriba en el listado de resultados de búsqueda en la web?",
        "options": ["Envenenamiento SEO", "Correo no deseado", "Secuestrador de navegadores", "Envenenamiento de DNS"],
        "correct": [0]
    },
    {
        "question": "¿Qué enfoque en la disponibilidad implica el uso de permisos de archivos?",
        "options": ["Simplicidad", "Oscuridad", "Organización en capas", "Limitación"],
        "correct": [3]
    },
    {
        "question": "¿Qué algoritmo utilizará Windows por defecto cuando un usuario intente cifrar archivos y carpetas en un volumen NTFS?",
        "options": ["3DES", "AES", "RSA", "DES"],
        "correct": [1]
    },
    {
        "question": "El departamento de TI debe implementar un sistema que controla lo que el usuario puede y no puede hacer en la red corporativa. ¿Qué proceso debe implementarse para cumplir con el requisito?",
        "options": [
            "auditoría de inicio de sesión del usuario",
            "observaciones que se proporcionarán a todos los empleados",
            "un lector de huellas digitales biométrico",
            "un conjunto de atributos que describe los derechos de acceso del usuario"
        ],
        "correct": [3]
    },
    {
        "question": "¿Qué estándar inalámbrico hizo que los estándares AES y CCM fueran obligatorios?",
        "options": ["WPA2", "WEP", "WPA", "WEP2"],
        "correct": [0]
    },
    {
        "question": "¿Qué tecnología se puede utilizar para garantizar la confidencialidad de los datos?",
        "options": ["encriptación", "RAID", "administración de identidades", "hash"],
        "correct": [0]
    },
    {
        "question": "¿Qué tecnología se debe utilizar para aplicar la política de seguridad de que un dispositivo informático debe cotejarse con la última actualización antivirus antes de que el dispositivo pueda conectarse a la red del campus?",
        "options": ["SAN", "NAC", "VPN", "NAS"],
        "correct": [1]
    },
    {
        "question": "¿Qué tipo de delincuentes cibernéticos es más probable que cree un malware que comprometa a una organización al robar información de tarjetas de crédito?",
        "options": ["Hackers de sombrero gris", "Hackers de sombrero blanco", "Hackers de sombrero negro", "Script kiddies"],
        "correct": [2]
    },
    {
        "question": "¿Cuál es la parte más difícil del diseño de un sistema criptográfico?",
        "options": ["Ingeniería inversa", "Algoritmo de cifrado", "Largo de clave", "Administración de claves"],
        "correct": [3]
    },
    {
        "question": "¿Qué tecnología de seguridad define el estándar X.509?",
        "options": ["Biometría", "tokens de seguridad", "contraseñas seguras", "certificados digitales"],
        "correct": [3]
    },
    {
        "question": "Alice y Bob utilizan una firma digital para firmar un documento. ¿Qué clave debe utilizar Alice para firmar el documento de modo que Bob pueda asegurarse de que el documento provino de Alice?",
        "options": [
            "clave privada de Bob",
            "clave privada de Alice",
            "clave pública de Bob",
            "nombre de usuario y contraseña de Alice"
        ],
        "correct": [1]
    },
    {
        "question": "¿Qué tecnología debe implementar para garantizar que una persona no pueda reclamar posteriormente que no firmó un documento determinado?",
        "options": ["HMAC", "firma digital", "certificado digital", "cifrado asimétrico"],
        "correct": [1]
    },
    {
        "question": "Un servicio de prueba de penetración contratado por la empresa ha informado que se identificó una puerta trasera en la red. ¿Qué medida debe tomar la organización para detectar si los sistemas están comprometidos?",
        "options": [
            "Buscar cambios en las políticas en el Visor de eventos.",
            "Buscar nombres de usuario que no tengan contraseñas.",
            "Buscar cuentas no autorizadas.",
            "Analizar los sistemas en busca de virus."
        ],
        "correct": [2]
    },
    {
        "question": "¿Cuál es el ataque de suplantación de identidad que aprovecha una relación de confianza entre dos sistemas?",
        "options": [
            "Envío de correo no deseado",
            "Man-in-the-middle",
            "Falsificación de identidad (spoofing)",
            "Análisis"
        ],
        "correct": [2]
    },
    {
        "question": "¿Qué marco de trabajo se debe recomendar para establecer un sistema completo de administración de seguridad informática en una organización?",
        "options": ["ISO/IEC 27000", "Modelo de OSI ISO", "Marco de trabajo de NIST/NICE", "Tríada de CIA"],
        "correct": [0]
    },
    {
        "question": "¿Qué estrategias de mitigación de riesgos incluyen servicios de tercerización y seguro de compra?",
        "options": ["de desastres", "Aceptación", "Transferencia", "de reducción"],
        "correct": [2]
    },
    {
        "question": "Se le solicita a un especialista en ciberseguridad que identifique a los delincuentes potenciales que se conocer por atacar a la organización. ¿Con qué tipos de hackers tendría menos preocupación el especialista?",
        "options": [
            "Script kiddies",
            "Hackers de sombrero gris",
            "Hackers de sombrero blanco",
            "Hackers de sombrero negro"
        ],
        "correct": [2]
    },
    {
        "question": "¿En qué dominios de ciberseguridad se incluyen los sistemas de HVAC, de agua y de incendio?",
        "options": ["red", "instalaciones físicas", "dispositivo", "usuario"],
        "correct": [1]
    },
    {
        "question": "¿Qué control de acceso debe utilizar el departamento de TI para restaurar un sistema a su estado normal?",
        "options": ["Control de compensación", "Control de detección", "Control preventivo", "Control correctivo"],
        "correct": [3]
    },
    {
        "question": "¿Las tarjetas inteligentes y biometría se consideran qué tipo de control de acceso?",
        "options": ["Lógico", "Administrativo", "Tecnológico", "Físico"],
        "correct": [0]
    },
    {
        "question": "¿Qué sitio web ofrece orientación para armar una lista de verificación a fin de brindar orientación sobre cómo configurar y endurecer los sistemas operativos?",
        "options": [
            "El Centro de tormentas de Internet",
            "La base de datos nacional de vulnerabilidad",
            "El Centro de ciberseguridad avanzada",
            "CERT"
        ],
        "correct": [1]
    },
    {
        "question": "¿Qué utilidad utiliza el Protocolo de mensajería de control de Internet?",
        "options": ["DNS", "NTP", "Ping", "RIP"],
        "correct": [2]
    },
    {
        "question": "¿Qué ley fue decretada para evitar delitos relacionados con la auditoría corporativa?",
        "options": [
            "Ley de Gramm-Leach-Bliley",
            "Ley Sarbanes-Oxley",
            "Ley Federal de Administración de Seguridad de la Información",
            "Ley de encriptación de importación y exportación"
        ],
        "correct": [1]
    },
    {
        "question": "Los empleados de una empresa reciben un correo electrónico que indica que la contraseña de la cuenta caducará inmediatamente y requiere el restablecimiento de la contraseña en 5 minutos. ¿Qué declaración clasificaría este correo electrónico?",
        "options": [
            "Es un ataque de suplantación de identidad.",
            "Es un ataque de DDoS.",
            "Es un ataque combinado.",
            "Es un correo electrónico engañoso."
        ],
        "correct": [3]
    },
    {
        "question": "¿Qué algoritmo de hash se recomienda para la protección de la información confidencial, sin clasificar?",
        "options": ["MD5", "3DES", "SHA-256", "AES-256"],
        "correct": [2]
    },
    {
        "question": "¿Las contraseñas y los PIN son ejemplos de qué término de seguridad?",
        "options": ["autorización", "autenticación", "identificación", "acceso"],
        "correct": [1]
    },
    {
        "question": "¿Cuáles son los tres estados de datos durante los cuales los datos son vulnerables?",
        "options": [
            "Datos en proceso",
            "Datos en tránsito",
            "Datos descifrados",
            "Datos almacenados",
            "Datos depurados",
            "Datos cifrados"
        ],
        "correct": [0, 1, 3]
    },
    {
        "question": "¿Cuál es el método no técnico que un delincuente cibernético usaría para recopilar información confidencial de una organización?",
        "options": ["Ingeniería social", "«Pharming»", "Ransomware", "Man-in-the-middle"],
        "correct": [0]
    },
    {
        "question": "¿Qué tipo de integridad tiene una base de datos cuando todas las filas tienen un identificador único llamado clave principal?",
        "options": [
            "integridad referencial",
            "integridad de la entidad",
            "integridad del dominio",
            "integridad definida por el usuario"
        ],
        "correct": [1]
    },
    {
        "question": "¿Qué estrategia de control de acceso permite que el propietario de un objeto determine si debe permitir el acceso al objeto?",
        "options": ["ACL", "DAC", "MAC", "RBAC"],
        "correct": [1]
    },
    {
        "question": "¿Qué método utiliza la esteganografía para ocultar el texto en un archivo de imagen?",
        "options": [
            "El bit más significativo",
            "Ofuscación de datos",
            "Enmascaramiento de datos",
            "El bit menos significativo"
        ],
        "correct": [3]
    },
    {
        "question": "Se le ha pedido que implemente un programa de integridad de datos para proteger los archivos de datos que debe descargar electrónicamente el personal de ventas. Usted ha decidido utilizar el algoritmo de hash más sólido disponible en sus sistemas. ¿Qué algoritmo de hash seleccionaría?",
        "options": ["SHA-1", "AES", "MD5", "SHA-256"],
        "correct": [3]
    },
    {
        "question": "¿La posibilidad de mantener la disponibilidad durante los eventos molestos describe cuál de los principios de alta disponibilidad?",
        "options": [
            "tolerancia a falla",
            "recuperabilidad del sistema",
            "servicios ininterrumpibles",
            "único punto de error"
        ],
        "correct": [1]
    },
    {
        "question": "¿Cuáles son los dos valores que se requieren para calcular la expectativa de pérdida anual?",
        "options": [
            "Valor cuantitativo de pérdida",
            "Factor de frecuencia",
            "Expectativa de pérdida simple",
            "Valor de los activos",
            "Factor de exposición",
            "Índice de frecuencia anual"
        ],
        "correct": [2, 5]
    },
    {
        "question": "¿Qué tecnología de hash requiere el intercambio de claves?",
        "options": ["HMAC", "AES", "técnica de «salting»", "MD5"],
        "correct": [0]
    },
    {
        "question": "Se le ha solicitado trabajar con el personal de entrada y recopilación de datos en su organización para mejorar la integridad de datos durante operaciones iniciales de entrada de datos y modificación de datos. Varios miembros del personal le solicitan que explique por qué las nuevas pantallas de entrada de datos limitan los tipos y el tamaño de los datos capaces de introducirse en los campos específicos. ¿Cuál es un ejemplo de un nuevo control de integridad de datos?",
        "options": [
            "controles de entrada de datos que solo permiten que el personal de entrada vea los datos actuales",
            "operaciones de cifrado de datos que evitan que un usuario no autorizado tenga acceso a los datos confidenciales",
            "una regla de validación que se implementó para garantizar la integridad, la precisión y la uniformidad de los datos",
            "una regla de limitación que se implementó para evitar que el personal no autorizado introduzca datos confidenciales"
        ],
        "correct": [2]
    },
    {
        "question": "Los usuarios informan que el acceso a la red es lento. Después de preguntar a los empleados, el administrador de red descubrió que un empleado descargó un programa de análisis de terceros para la impresora. ¿Qué tipo de malware puede introducirse, que provoque el rendimiento lento de la red?",
        "options": ["Correo no deseado", "Gusano", "Suplantación de identidad", "Virus"],
        "correct": [1]
    },
    {
        "question": "¿Qué tecnología implementaría para proporcionar alta disponibilidad para el almacenamiento de datos?",
        "options": ["Reserva activa", "N+1", "RAID", "Actualizaciones de software"],
        "correct": [2]
    },
    {
        "question": "Un gerente ejecutivo fue a una reunión importante. La secretaria en la oficina recibe una llamada de una persona que dice que el gerente ejecutivo está a punto de dar una presentación importante, pero los archivos de la presentación están dañados. El interlocutor recomienda firmemente que la secretaria mande por correo electrónico la presentación de inmediato a una dirección de correo electrónico personal. El interlocutor también indica que el gerente ejecutivo responsabiliza a la secretaria del éxito de esta presentación. ¿Qué tipo de tácticas de ingeniería social describiría esta situación?",
        "options": ["Familiaridad", "Partners confiables", "Urgencia", "Intimidación"],
        "correct": [3]
    },
    {
        "question": "Una organización desea adoptar un sistema de etiquetado en función del valor, la sensibilidad y la importancia de la información. ¿Qué elemento de administración de riesgos se recomienda?",
        "options": [
            "clasificación de activos",
            "disponibilidad de activos",
            "identificación de activos",
            "estandarización de activos"
        ],
        "correct": [0]
    },
    {
        "question": "El conocimiento y la identificación de vulnerabilidades es una función crucial de un especialista en ciberseguridad. ¿Cuáles de los siguientes recursos se pueden utilizar para identificar los detalles específicos de las vulnerabilidades?",
        "options": [
            "Modelo de ISO/IEC 27000",
            "Base de datos de CVE nacional",
            "Marco de trabajo de NIST/NICE",
            "Infragard"
        ],
        "correct": [1]
    },
    {
        "question": "Se le solicita asesoramiento a un especialista en seguridad sobre una medida de seguridad para evitar que hosts no autorizados accedan a la red doméstica de los empleados. ¿Qué medida sería la más eficaz?",
        "options": [
            "Implementar una RAID.",
            "Implementar un VLAN.",
            "Implementar sistemas de detección de intrusiones.",
            "Implementar un firewall."
        ],
        "correct": [3]
    },
    {
        "question": "En una comparación de los sistemas biométricos, ¿cuál es el índice de error de la conexión cruzada?",
        "options": [
            "Índice de falsos negativos e índice de falsos positivos",
            "Índice de aceptación e índice de falsos negativos",
            "Índice de rechazo e índice de falsos negativos",
            "Índice de falsos positivos e índice de aceptación"
        ],
        "correct": [0]
    },
    {
        "question": "¿Qué es lo que describe la protección proporcionada por una cerca de 1 metro de alto?",
        "options": [
            "Evita los delincuentes ocasionales debido a su altura.",
            "La cerca disuade a intrusos determinados.",
            "Disuade a los intrusos ocasionales únicamente.",
            "Ofrece demora limitada a un intruso determinado."
        ],
        "correct": [2]
    },
    {
        "question": "¿Cuáles son los dos métodos más eficaces para defenderse del malware?",
        "options": [
            "Implementar firewalls de red.",
            "Actualizar el sistema operativo y otro software de la aplicación.",
            "Implementar una RAID.",
            "Implementar una VPN.",
            "Implementar contraseñas seguras.",
            "Instalar y actualizar el software antivirus."
        ],
        "correct": [1, 5]
    },
    {
        "question": "Las tecnologías como GIS e IdT contribuyen al crecimiento de grandes almacenes de datos. ¿Cuáles son los dos motivos por los que estas tecnologías aumentan la necesidad de contar con especialistas en ciberseguridad?",
        "options": [
            "Recopilan información confidencial.",
            "Aumentan los requisitos de procesamiento.",
            "Requieren más equipos.",
            "Contienen información personal.",
            "Requieren monitoreo las 24 horas.",
            "Complican aún más los sistemas."
        ],
        "correct": [0, 3]
    },
    {
        "question": "¿Qué tecnología debe implementarse para verificar la identidad de una organización, para autenticar su sitio web y para proporcionar una conexión cifrada entre un cliente y el sitio web?",
        "options": ["firma digital", "cifrado asimétrico", "certificado digital", "técnica de «salting»"],
        "correct": [2]
    },
    {
        "question": "¿Qué declaración describe de mejor manera la motivación de los hacktivistas?",
        "options": [
            "Son parte del grupo de protesta detrás de una causa política.",
            "Están interesados en la detección de nuevos ataques.",
            "Intentan alardear sus habilidades de hacking.",
            "Son curiosos y aprenden las habilidades de hacking."
        ],
        "correct": [0]
    },
    {
        "question": "Un especialista en ciberseguridad trabaja con el personal de TI para establecer un plan eficaz de seguridad informática. ¿Qué combinación de principios de seguridad constituye la base de un plan de seguridad?",
        "options": [
            "Tecnologías, políticas y conocimiento",
            "Encriptación, autenticación e identificación",
            "Privacidad, identificación y no rechazo",
            "Confidencialidad, integridad y disponibilidad."
        ],
        "correct": [3]
    },
    {
        "question": "Su organización manejará las operaciones del mercado. Deberá verificar la identidad de cada cliente que ejecuta una transacción. ¿Qué tecnología debe implementarse para autenticar y verificar las transacciones electrónicas del cliente?",
        "options": ["cifrado simétrico", "hash de datos", "cifrado asimétrico", "certificados digitales"],
        "correct": [3]
    },
    {
        "question": "¿Cuáles son los dos grupos de personas que se consideran atacantes internos?",
        "options": [
            "Partners confiables",
            "Asistentes cibernéticos",
            "Aficionados",
            "Hackers de sombrero negro",
            "Exempleados",
            "Hacktivistas"
        ],
        "correct": [0, 4]
    },
    {
        "question": "¿Cuál es un ejemplo de sistemas de advertencia temprana que se pueden utilizar para frustrar a los delincuentes cibernéticos?",
        "options": [
            "Base de datos CVE",
            "Proyecto de Honeynet",
            "Infragard",
            "Programa ISO/IEC 27000"
        ],
        "correct": [1]
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
                    opt.classList.remove('disabled');
                    opt.style.pointerEvents = 'auto';
                });
                userAnswers[index] = new Set([i]);
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
                        opt.classList.remove('selected');
                        opt.classList.add('correct'); // Verde
                    } else if (userAnswers[index].has(j)) {
                        opt.classList.remove('selected');
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
