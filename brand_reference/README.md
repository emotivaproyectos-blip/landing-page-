# RiverTech — Proyecto de previsualización

## Estado de esta entrega

Previsualización de montaje de **178,5 segundos**, 1920 × 1080, 24 fps.
Incluye la fotografía de la embarcación y las diez capturas facilitadas, con acercamientos, desplazamientos y transiciones suaves. Los textos de apoyo están fuera de la interfaz.

**No contiene avatar, locución ni música. No es la versión publicitaria final.**
La solicitud de generación de la presentadora en Higgsfield fue rechazada con el mensaje «Requires basic plan or higher». La consulta de cuenta devolvió plan gratuito y 10 créditos. No se creó un trabajo de generación para el avatar. No se activó ninguna prueba ni suscripción.

## Archivos

- `assets/`: los once originales, copiados sin alterar sus bytes.
- `storyboard.json`: orden, duración, movimientos de cámara, textos y guion. Incluye SHA-256 de cada original.
- `render.py`: render local y reproducible, sin modelos generativos para las capturas.
- `locucion_es.txt`: guion de voz femenina en español latino neutro, pendiente de grabación.
- `textos_guia.srt`: textos de apoyo con tiempos del montaje preliminar; no es una transcripción de audio grabado.
- `capitulos.ffmetadata`: capítulos para el contenedor MP4.
- `previews/storyboard_contact_sheet.jpg`: hoja de revisión de encuadres.

El MP4 se entrega por separado. No se incluyen fuentes tipográficas ni claves de servicios.

## Ejecutar

Se requiere Python 3.10 o posterior y `ffmpeg` disponible en PATH.

```bash
python -m pip install -r requirements.txt
python render.py --output RiverTech_previsualizacion_1080p.mp4
```

El script busca Inter o DejaVu Sans instaladas en Linux. En otros sistemas se pueden indicar las fuentes locales:

```bash
python render.py --font /ruta/Regular.ttf --font-bold /ruta/Semibold.ttf --output video.mp4
```

Para revisar fotogramas antes de renderizar:

```bash
python render.py --preview
```

Para una prueba breve:

```bash
python render.py --seconds 12 --output prueba.mp4
```

## Fidelidad de las referencias

Los originales no se regeneran, recolorean, retocan ni redibujan. Solo se aplican transformaciones de encuadre y escala. El reescalado y la compresión normal de un MP4 impiden prometer igualdad pixel a pixel con un PNG; el contenido, los nombres, los valores, los mapas y la geometría representada no se editan.

No se simulan clics, desplazamientos del barco, actualizaciones de métricas ni reproducción histórica continua. Las vistas de History se ordenan por el momento registrado: 04:38:02, 05:24:05 y 05:35:11, del 15 de septiembre de 2026.

La fotografía de la embarcación es una referencia de ambientación. No se identifica como DIBULLA PILOT. El cierre distingue la fotografía de referencia del registro adjunto. Los datos se presentan como contenido de las capturas, no como transmisión en vivo ni como datos auditados de forma independiente.

## Pendiente para la versión final

Generar la misma presentadora ficticia en apertura y cierre, dentro de una embarcación similar a la referencia; grabar la locución femenina; ajustar sincronía labial, pausas y duración al audio real; y componer la presentadora junto al recorte original del registro de cierre. No enviar las capturas a un generador para reconstruir su interfaz.

La apertura no promete una cifra de ahorro. Cualquier afirmación de ahorro en «miles de millones» necesita un caso verificable, con moneda, período y método de cálculo.
