// netlify/functions/firebase-config.js
exports.handler = async (event, context) => {
  console.log('Firebase config function called');
  
  // CORS headers для разрешения запросов с фронтенда
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Обработка CORS preflight запроса
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Разрешить только GET запросы
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        error: 'Method not allowed. Only GET requests are supported.' 
      })
    };
  }

  // Дополнительная безопасность: проверка origin
  const allowedOrigins = [
    'https://your-site-name.netlify.app',  // замените на ваш реальный домен
    'https://your-custom-domain.com',      // если у вас есть кастомный домен
    'http://localhost:8080',               // для локальной разработки
    'http://localhost:3000',               // для локальной разработки
    'http://127.0.0.1:8080'               // для локальной разработки
  ];
  
  const origin = event.headers.origin || event.headers.referer;
  console.log('Request origin:', origin);
  
  // В продакшене можно включить эту проверку для дополнительной безопасности
  // if (origin && !allowedOrigins.some(allowed => origin.includes(allowed.replace('https://', '').replace('http://', '')))) {
  //   console.log('Origin not allowed:', origin);
  //   return {
  //     statusCode: 403,
  //     headers,
  //     body: JSON.stringify({ error: 'Forbidden: Origin not allowed' })
  //   };
  // }

  try {
    // Получаем конфигурацию Firebase из environment variables
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };

    // Проверяем, что все необходимые переменные установлены
    const requiredVars = ['apiKey', 'projectId', 'authDomain'];
    const missingVars = requiredVars.filter(key => !firebaseConfig[key]);
    
    if (missingVars.length > 0) {
      console.error('Missing required Firebase configuration:', missingVars);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Server configuration error: Missing Firebase configuration',
          missingVars: missingVars // только для отладки, уберите в продакшене
        })
      };
    }

    console.log('Firebase config loaded successfully');
    
    // Возвращаем конфигурацию
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(firebaseConfig)
    };

  } catch (error) {
    console.error('Error in firebase-config function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message // только для отладки, уберите в продакшене
      })
    };
  }
};
