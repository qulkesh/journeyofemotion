<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <title>Journey of Emotion</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --primary-color: #8b5cf6;
            --primary-hover: #7c3aed;
            --secondary-color: #ec4899;
            --bg-from: #f3e8ff;
            --bg-via: #fdf2f8;
            --bg-to: #dbeafe;
        }

        .theme-purple {
            --primary-color: #8b5cf6;
            --primary-hover: #7c3aed;
            --secondary-color: #ec4899;
            --bg-from: #f3e8ff;
            --bg-via: #fdf2f8;
            --bg-to: #dbeafe;
        }

        .theme-blue {
            --primary-color: #3b82f6;
            --primary-hover: #2563eb;
            --secondary-color: #06b6d4;
            --bg-from: #dbeafe;
            --bg-via: #f0f9ff;
            --bg-to: #cffafe;
        }

        .theme-green {
            --primary-color: #10b981;
            --primary-hover: #059669;
            --secondary-color: #34d399;
            --bg-from: #d1fae5;
            --bg-via: #ecfdf5;
            --bg-to: #f0fdf4;
        }

        .theme-orange {
            --primary-color: #f59e0b;
            --primary-hover: #d97706;
            --secondary-color: #fb923c;
            --bg-from: #fef3c7;
            --bg-via: #fffbeb;
            --bg-to: #ffedd5;
        }

        .theme-rose {
            --primary-color: #e11d48;
            --primary-hover: #be185d;
            --secondary-color: #f43f5e;
            --bg-from: #fecdd3;
            --bg-via: #fff1f2;
            --bg-to: #ffe4e6;
        }

        body {
            background: linear-gradient(to bottom right, var(--bg-from), var(--bg-via), var(--bg-to));
        }

        .primary-bg {
            background-color: var(--primary-color);
        }

        .primary-hover:hover {
            background-color: var(--primary-hover);
        }

        .primary-border {
            border-color: var(--primary-color);
        }

        .primary-text {
            color: var(--primary-color);
        }

        .slider::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary-color);
            cursor: pointer;
        }
        .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary-color);
            cursor: pointer;
            border: none;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
            .mobile-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 1rem;
            }
            .mobile-nav {
                flex-direction: row;
                gap: 0.25rem;
            }
            .mobile-nav button {
                flex: 1;
                text-align: center;
                font-size: 0.75rem;
                padding: 0.5rem 0.25rem;
            }
            body {
                padding: 0.5rem;
            }
            .max-w-4xl {
                padding: 0;
            }
        }

        /* Touch improvements */
        button {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
        }
        
        input, textarea {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
        }

        .modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .emoji-grid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 0.5rem;
            max-height: 200px;
            overflow-y: auto;
        }

        .emoji-btn {
            padding: 0.5rem;
            border: 2px solid transparent;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 1.5rem;
            text-align: center;
            transition: all 0.2s;
        }

        .emoji-btn:hover {
            border-color: var(--primary-color);
            background-color: rgba(139, 92, 246, 0.1);
        }

        .emoji-btn.selected {
            border-color: var(--primary-color);
            background-color: rgba(139, 92, 246, 0.2);
        }

        .theme-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid transparent;
            cursor: pointer;
            transition: all 0.2s;
        }

        .theme-btn.active {
            border-color: #374151;
            transform: scale(1.1);
        }
    </style>
</head>
<body class="min-h-screen">
    <div class="max-w-4xl mx-auto p-4">
        <!-- Header -->
        <div class="text-center mb-6 pt-4">
            <div class="flex justify-between items-center mb-4">
                <button onclick="showThemeSelector()" class="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all">
                    🎨
                </button>
                <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Journey of Emotion</h1>
                <button onclick="showView('settings')" class="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all">
                    ⚙️
                </button>
            </div>
            <p class="text-gray-600 text-sm md:text-base px-4">Отслеживайте, размышляйте и понимайте свои эмоциональные паттерны</p>
        </div>

        <!-- Navigation -->
        <div class="flex justify-center mb-6">
            <div class="bg-white rounded-full p-1 shadow-lg mobile-nav w-full max-w-md flex">
                <button onclick="showView('log')" id="logBtn" class="flex-1 px-4 py-2 rounded-full transition-all primary-bg text-white shadow-md text-sm">
                    ➕ Записать
                </button>
                <button onclick="showView('history')" id="historyBtn" class="flex-1 px-4 py-2 rounded-full transition-all text-gray-600 hover:bg-gray-100 text-sm">
                    📅 История
                </button>
                <button onclick="showView('insights')" id="insightsBtn" class="flex-1 px-4 py-2 rounded-full transition-all text-gray-600 hover:bg-gray-100 text-sm">
                    📊 Аналитика
                </button>
            </div>
        </div>

        <!-- Log View -->
        <div id="logView" class="bg-white rounded-2xl shadow-xl p-4 md:p-8 mx-2 md:max-w-2xl md:mx-auto">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 text-center">Как вы себя чувствуете?</h2>
            
            <!-- Emotion Selection -->
            <div class="mb-4 md:mb-6">
                <div class="flex justify-between items-center mb-3 md:mb-4">
                    <h3 class="text-base md:text-lg font-medium text-gray-700">Выберите эмоцию:</h3>
                    <button onclick="showAddEmotionModal()" class="text-sm primary-text hover:underline">
                        + Добавить свою
                    </button>
                </div>
                <div id="emotionGrid" class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mobile-grid">
                    <!-- Emotions will be rendered here -->
                </div>
            </div>

            <!-- Intensity Slider -->
            <div id="intensitySection" class="mb-4 md:mb-6 hidden">
                <h3 class="text-base md:text-lg font-medium text-gray-700 mb-3 md:mb-4">
                    Интенсивность: <span id="intensityValue">5</span>/10
                </h3>
                <input type="range" min="1" max="10" value="5" id="intensitySlider" 
                       class="w-full h-3 md:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                <div class="flex justify-between text-xs md:text-sm text-gray-500 mt-1">
                    <span>Слабо</span>
                    <span>Сильно</span>
                </div>
            </div>

            <!-- Trigger Input -->
            <div id="triggerSection" class="mb-4 md:mb-6 hidden">
                <h3 class="text-base md:text-lg font-medium text-gray-700 mb-2">Что вызвало эту эмоцию?</h3>
                <input type="text" id="triggerInput" placeholder="например, встреча на работе, разговор с другом..." 
                       class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base">
            </div>

            <!-- Note Input -->
            <div id="noteSection" class="mb-4 md:mb-6 hidden">
                <h3 class="text-base md:text-lg font-medium text-gray-700 mb-2">Дополнительные заметки (необязательно)</h3>
                <textarea id="noteInput" placeholder="Как ощущалась эта эмоция? Какие мысли с ней пришли?" 
                          rows="3" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm md:text-base resize-none"></textarea>
            </div>

            <!-- Submit Button -->
            <button id="saveBtn" onclick="saveEntry()" class="w-full primary-bg primary-hover text-white py-3 md:py-3 rounded-lg transition-colors font-medium shadow-lg hidden text-sm md:text-base">
                Сохранить запись
            </button>
        </div>

        <!-- History View -->
        <div id="historyView" class="bg-white rounded-2xl shadow-xl p-4 md:p-8 mx-2 hidden">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Ваше эмоциональное путешествие</h2>
            <div id="historyContent"></div>
        </div>

        <!-- Insights View -->
        <div id="insightsView" class="bg-white rounded-2xl shadow-xl p-4 md:p-8 mx-2 hidden">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Эмоциональная аналитика</h2>
            <div id="insightsContent"></div>
        </div>

        <!-- Settings View -->
        <div id="settingsView" class="bg-white rounded-2xl shadow-xl p-4 md:p-8 mx-2 hidden">
            <h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Настройки</h2>
            
            <div class="space-y-6">
                <!-- Theme Selection -->
                <div>
                    <h3 class="text-lg font-medium text-gray-700 mb-3">Цветовая тема</h3>
                    <div class="flex space-x-3">
                        <button onclick="changeTheme('purple')" class="theme-btn theme-purple" style="background: linear-gradient(45deg, #8b5cf6, #ec4899)" data-theme="purple"></button>
                        <button onclick="changeTheme('blue')" class="theme-btn theme-blue" style="background: linear-gradient(45deg, #3b82f6, #06b6d4)" data-theme="blue"></button>
                        <button onclick="changeTheme('green')" class="theme-btn theme-green" style="background: linear-gradient(45deg, #10b981, #34d399)" data-theme="green"></button>
                        <button onclick="changeTheme('orange')" class="theme-btn theme-orange" style="background: linear-gradient(45deg, #f59e0b, #fb923c)" data-theme="orange"></button>
                        <button onclick="changeTheme('rose')" class="theme-btn theme-rose" style="background: linear-gradient(45deg, #e11d48, #f43f5e)" data-theme="rose"></button>
                    </div>
                </div>

                <!-- Custom Emotions Management -->
                <div>
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-lg font-medium text-gray-700">Ваши эмоции</h3>
                        <button onclick="showAddEmotionModal()" class="primary-bg primary-hover text-white px-4 py-2 rounded-lg text-sm">
                            Добавить эмоцию
                        </button>
                    </div>
                    <div id="customEmotionsList" class="space-y-2">
                        <!-- Custom emotions will be listed here -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Psychology Tips Section -->
        <div class="mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-6 mx-2">
            <div class="text-center mb-4">
                <h3 class="text-lg md:text-xl font-semibold text-gray-800 mb-2">💡 Совет психолога</h3>
                <div id="psychologyTip" class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <p id="tipText" class="text-gray-700 text-sm md:text-base italic mb-2">Загружаем совет...</p>
                    <p id="tipAuthor" class="text-gray-600 text-xs md:text-sm">—</p>
                </div>
                <div class="mt-3 flex justify-center space-x-2">
                    <button onclick="loadNewTip()" class="primary-bg primary-hover text-white px-4 py-2 rounded-lg text-sm">
                        Новый совет
                    </button>
                    <div class="flex items-center text-xs text-gray-500">
                        <span id="countdown">30</span>s
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Theme Selector Modal -->
    <div id="themeModal" class="modal">
        <div class="bg-white rounded-2xl p-6 m-4 max-w-sm w-full">
            <h3 class="text-lg font-semibold mb-4">Выберите тему</h3>
            <div class="grid grid-cols-3 gap-3 mb-4">
                <button onclick="changeTheme('purple')" class="theme-btn mx-auto theme-purple" style="background: linear-gradient(45deg, #8b5cf6, #ec4899)" data-theme="purple"></button>
                <button onclick="changeTheme('blue')" class="theme-btn mx-auto theme-blue" style="background: linear-gradient(45deg, #3b82f6, #06b6d4)" data-theme="blue"></button>
                <button onclick="changeTheme('green')" class="theme-btn mx-auto theme-green" style="background: linear-gradient(45deg, #10b981, #34d399)" data-theme="green"></button>
                <button onclick="changeTheme('orange')" class="theme-btn mx-auto theme-orange" style="background: linear-gradient(45deg, #f59e0b, #fb923c)" data-theme="orange"></button>
                <button onclick="changeTheme('rose')" class="theme-btn mx-auto theme-rose" style="background: linear-gradient(45deg, #e11d48, #f43f5e)" data-theme="rose"></button>
            </div>
            <button onclick="closeThemeModal()" class="w-full bg-gray-200 text-gray-800 py-2 rounded-lg">
                Закрыть
            </button>
        </div>
    </div>

    <!-- Add Emotion Modal -->
    <div id="addEmotionModal" class="modal">
        <div class="bg-white rounded-2xl p-6 m-4 max-w-md w-full">
            <h3 class="text-lg font-semibold mb-4">Добавить новую эмоцию</h3>
            
            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Название эмоции</label>
                <input type="text" id="emotionNameInput" placeholder="Например: Вдохновение" 
                       class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Выберите эмодзи</label>
                <div class="emoji-grid" id="emojiGrid">
                    <!-- Emojis will be generated here -->
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Выбранная эмоция</label>
                <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div id="selectedEmojiPreview" class="w-8 h-8 flex items-center justify-center text-2xl">❓</div>
                    <span id="selectedEmotionNamePreview" class="text-gray-500">Выберите эмодзи и введите название</span>
                </div>
            </div>

            <div class="flex space-x-3">
                <button onclick="addCustomEmotion()" class="flex-1 primary-bg primary-hover text-white py-2 rounded-lg">
                    Добавить
                </button>
                <button onclick="closeAddEmotionModal()" class="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg">
                    Отмена
                </button>
            </div>
        </div>
    </div>

    <script>
        // Data storage
        let entries = JSON.parse(localStorage.getItem('emotionEntries')) || [];
        let selectedEmotion = '';
        let currentTheme = localStorage.getItem('selectedTheme') || 'purple';
        let selectedEmoji = '';

        // Default emotions
        const defaultEmotions = {
            joy: { name: 'Радость', color: 'bg-yellow-400', emoji: '☀️', isDefault: true },
            love: { name: 'Любовь', color: 'bg-pink-400', emoji: '❤️', isDefault: true },
            excitement: { name: 'Волнение', color: 'bg-orange-400', emoji: '⚡', isDefault: true },
            calm: { name: 'Спокойствие', color: 'bg-blue-400', emoji: '☁️', isDefault: true },
            neutral: { name: 'Нейтрально', color: 'bg-gray-400', emoji: '😐', isDefault: true },
            sadness: { name: 'Грусть', color: 'bg-blue-600', emoji: '🌧️', isDefault: true },
            anger: { name: 'Гнев', color: 'bg-red-500', emoji: '😠', isDefault: true },
            anxiety: { name: 'Тревога', color: 'bg-purple-500', emoji: '😰', isDefault: true }
        };

        // Load custom emotions
        let customEmotions = JSON.parse(localStorage.getItem('customEmotions')) || {};
        let emotions = { ...defaultEmotions, ...customEmotions };

        // Available emojis for selection
        const availableEmojis = [
            '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣',
            '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰',
            '😘', '😗', '☺️', '😚', '😙', '🥲', '😋', '😛',
            '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔',
            '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄',
            '😬', '🤥', '😔', '😪', '🤤', '😴', '😷', '🤒',
            '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵',
            '🤯', '🤠', '🥳', '🥸', '😎', '🤓', '🧐', '😕',
            '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺',
            '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱',
            '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤',
            '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩',
            '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '🎭',
            '💫', '⭐', '🌟', '✨', '⚡', '💥', '💢', '💯',
            '💤', '💨', '🤍', '🖤', '❤️', '🧡', '💛', '💚',
            '💙', '💜', '🤎', '💔', '❣️', '💕', '💞', '💓',
            '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️',
            '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐'
        ];

        // Theme management
        function changeTheme(theme) {
            currentTheme = theme;
            document.body.className = `min-h-screen theme-${theme}`;
            localStorage.setItem('selectedTheme', theme);
            updateActiveThemeButton();
            closeThemeModal();
        }

        function updateActiveThemeButton() {
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll(`[data-theme="${currentTheme}"]`).forEach(btn => {
                btn.classList.add('active');
            });
        }

        function showThemeSelector() {
            document.getElementById('themeModal').classList.add('show');
            updateActiveThemeButton();
        }

        function closeThemeModal() {
            document.getElementById('themeModal').classList.remove('show');
        }

        // Emotion management
        function renderEmotions() {
            const emotionGrid = document.getElementById('emotionGrid');
            let html = '';
            
            Object.keys(emotions).forEach(key => {
                const emotion = emotions[key];
                html += `
                    <button onclick="selectEmotion('${key}')" class="emotion-btn p-3 md:p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all" data-emotion="${key}">
                        <div class="w-6 h-6 md:w-8 md:h-8 ${emotion.color} rounded-full mx-auto mb-1 md:mb-2 flex items-center justify-center">
                            <span class="text-white text-sm md:text-lg">${emotion.emoji}</span>
                        </div>
                        <span class="text-xs md:text-sm font-medium text-gray-700">${emotion.name}</span>
                    </button>
                `;
            });
            
            emotionGrid.innerHTML = html;
        }

        function showAddEmotionModal() {
            document.getElementById('addEmotionModal').classList.add('show');
            renderEmojiGrid();
            resetEmotionForm();
        }

        function closeAddEmotionModal() {
            document.getElementById('addEmotionModal').classList.remove('show');
        }

        function renderEmojiGrid() {
            const emojiGrid = document.getElementById('emojiGrid');
            let html = '';
            
            availableEmojis.forEach(emoji => {
                html += `<button class="emoji-btn" onclick="selectEmoji('${emoji}')">${emoji}</button>`;
            });
            
            emojiGrid.innerHTML = html;
        }

        function selectEmoji(emoji) {
            selectedEmoji = emoji;
            
            // Update selected state
            document.querySelectorAll('.emoji-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            event.target.classList.add('selected');
            
            // Update preview
            document.getElementById('selectedEmojiPreview').textContent = emoji;
            updateEmotionPreview();
        }

        function updateEmotionPreview() {
            const name = document.getElementById('emotionNameInput').value;
            const preview = document.getElementById('selectedEmotionNamePreview');
            
            if (name && selectedEmoji) {
                preview.textContent = name;
                preview.className = 'text-gray-800 font-medium';
            } else {
                preview.textContent = 'Выберите эмодзи и введите название';
                preview.className = 'text-gray-500';
            }
        }

        function resetEmotionForm() {
            document.getElementById('emotionNameInput').value = '';
            selectedEmoji = '';
            document.getElementById('selectedEmojiPreview').textContent = '❓';
            document.getElementById('selectedEmotionNamePreview').textContent = 'Выберите эмодзи и введите название';
            document.getElementById('selectedEmotionNamePreview').className = 'text-gray-500';
            
            document.querySelectorAll('.emoji-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
        }

        function addCustomEmotion() {
            const name = document.getElementById('emotionNameInput').value.trim();
            
            if (!name || !selectedEmoji) {
                alert('Пожалуйста, введите название и выберите эмодзи');
                return;
            }

            const emotionId = 'custom_' + Date.now();
            const colors = ['bg-purple-400', 'bg-indigo-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400', 'bg-pink-400', 'bg-teal-400'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            const newEmotion = {
                name: name,
                color: randomColor,
                emoji: selectedEmoji,
                isDefault: false
            };

            customEmotions[emotionId] = newEmotion;
            emotions[emotionId] = newEmotion;
            
            localStorage.setItem('customEmotions', JSON.stringify(customEmotions));
            
            renderEmotions();
            renderCustomEmotionsList();
            closeAddEmotionModal();
        }

        function deleteCustomEmotion(emotionId) {
            if (confirm('Удалить эту эмоцию?')) {
                delete customEmotions[emotionId];
                delete emotions[emotionId];
                localStorage.setItem('customEmotions', JSON.stringify(customEmotions));
                renderEmotions();
                renderCustomEmotionsList();
            }
        }

        function renderCustomEmotionsList() {
            const container = document.getElementById('customEmotionsList');
            let html = '';
            
            Object.keys(customEmotions).forEach(key => {
                const emotion = customEmotions[key];
                html += `
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">${emotion.emoji}</span>
                            <span class="font-medium">${emotion.name}</span>
                        </div>
                        <button onclick="deleteCustomEmotion('${key}')" class="text-red-600 hover:text-red-800 text-sm">
                            Удалить
                        </button>
                    </div>
                `;
            });
            
            if (html === '') {
                html = '<p class="text-gray-500 text-center py-4">Пока нет добавленных эмоций</p>';
            }
            
            container.innerHTML = html;
        }

        // Add event listener for emotion name input
        document.addEventListener('DOMContentLoaded', function() {
            const emotionNameInput = document.getElementById('emotionNameInput');
            if (emotionNameInput) {
                emotionNameInput.addEventListener('input', updateEmotionPreview);
            }
        });

        // Navigation
        function showView(view) {
            // Hide all views
            document.getElementById('logView').classList.add('hidden');
            document.getElementById('historyView').classList.add('hidden');
            document.getElementById('insightsView').classList.add('hidden');
            document.getElementById('settingsView').classList.add('hidden');

            // Reset button styles
            document.querySelectorAll('button[id$="Btn"]').forEach(btn => {
                btn.className = 'flex-1 px-4 py-2 rounded-full transition-all text-gray-600 hover:bg-gray-100 text-sm';
            });

            // Show selected view and update button
            document.getElementById(view + 'View').classList.remove('hidden');
            if (view !== 'settings') {
                document.getElementById(view + 'Btn').className = 'flex-1 px-4 py-2 rounded-full transition-all primary-bg text-white shadow-md text-sm';
            }

            if (view === 'history') {
                displayHistory();
            } else if (view === 'insights') {
                displayInsights();
            } else if (view === 'settings') {
                renderCustomEmotionsList();
                updateActiveThemeButton();
            }
        }

        // Emotion selection
        function selectEmotion(emotion) {
            selectedEmotion = emotion;
            
            // Update button styles
            document.querySelectorAll('.emotion-btn').forEach(btn => {
                btn.className = 'emotion-btn p-3 md:p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all';
            });
            
            document.querySelector('[data-emotion="' + emotion + '"]').className = 'emotion-btn p-3 md:p-4 rounded-xl border-2 primary-border shadow-lg scale-105 transition-all';

            // Show additional sections
            document.getElementById('intensitySection').classList.remove('hidden');
            document.getElementById('triggerSection').classList.remove('hidden');
            document.getElementById('noteSection').classList.remove('hidden');
            document.getElementById('saveBtn').classList.remove('hidden');
        }

        // Intensity slider
        document.getElementById('intensitySlider').addEventListener('input', function() {
            document.getElementById('intensityValue').textContent = this.value;
        });

        // Save entry
        function saveEntry() {
            if (!selectedEmotion) return;

            const entry = {
                id: Date.now(),
                emotion: selectedEmotion,
                intensity: parseInt(document.getElementById('intensitySlider').value),
                trigger: document.getElementById('triggerInput').value,
                note: document.getElementById('noteInput').value,
                timestamp: new Date()
            };

            entries.unshift(entry);
            localStorage.setItem('emotionEntries', JSON.stringify(entries));

            // Reset form
            selectedEmotion = '';
            document.querySelectorAll('.emotion-btn').forEach(btn => {
                btn.className = 'emotion-btn p-3 md:p-4 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all';
            });
            
            document.getElementById('intensitySlider').value = 5;
            document.getElementById('intensityValue').textContent = '5';
            document.getElementById('triggerInput').value = '';
            document.getElementById('noteInput').value = '';
            
            document.getElementById('intensitySection').classList.add('hidden');
            document.getElementById('triggerSection').classList.add('hidden');
            document.getElementById('noteSection').classList.add('hidden');
            document.getElementById('saveBtn').classList.add('hidden');

            alert('Запись успешно сохранена!');
        }

        // Display history
        function displayHistory() {
            const historyContent = document.getElementById('historyContent');
            
            if (entries.length === 0) {
                historyContent.innerHTML = '<div class="text-center py-12"><div class="text-6xl mb-4">📖</div><p class="text-gray-500 text-lg">Пока нет записей. Начните отслеживать свои эмоции!</p></div>';
                return;
            }

            let html = '<div class="space-y-4">';
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                const emotion = emotions[entry.emotion] || { name: 'Неизвестная эмоция', color: 'bg-gray-400', emoji: '❓' };
                const date = new Date(entry.timestamp).toLocaleString('ru-RU');
                
                html += '<div class="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow">';
                html += '<div class="flex items-start space-x-3 md:space-x-4">';
                html += '<div class="w-10 h-10 md:w-12 md:h-12 ' + emotion.color + ' rounded-full flex items-center justify-center flex-shrink-0">';
                html += '<span class="text-white text-lg md:text-xl">' + emotion.emoji + '</span>';
                html += '</div>';
                html += '<div class="flex-1 min-w-0">';
                html += '<div class="flex items-center justify-between mb-2">';
                html += '<h3 class="text-base md:text-lg font-medium text-gray-800 truncate">' + emotion.name + '</h3>';
                html += '<span class="text-xs md:text-sm text-gray-500 flex-shrink-0 ml-2">' + date + '</span>';
                html += '</div>';
                html += '<div class="mb-2">';
                html += '<span class="text-xs md:text-sm text-gray-600">Интенсивность: </span>';
                html += '<span class="font-medium text-sm md:text-base">' + entry.intensity + '/10</span>';
                html += '</div>';
                
                if (entry.trigger) {
                    html += '<div class="mb-2">';
                    html += '<span class="text-xs md:text-sm text-gray-600">Триггер: </span>';
                    html += '<span class="text-gray-800 text-sm md:text-base break-words">' + entry.trigger + '</span>';
                    html += '</div>';
                }
                
                if (entry.note) {
                    html += '<p class="text-gray-700 text-xs md:text-sm bg-gray-50 p-2 md:p-3 rounded-lg break-words">' + entry.note + '</p>';
                }
                
                html += '</div>';
                html += '</div>';
                html += '</div>';
            }
            html += '</div>';
            
            historyContent.innerHTML = html;
        }

        // Display insights
        function displayInsights() {
            const insightsContent = document.getElementById('insightsContent');
            
            if (entries.length === 0) {
                insightsContent.innerHTML = '<div class="text-center py-12"><div class="text-6xl mb-4">📊</div><p class="text-gray-500 text-lg">Начните записывать эмоции, чтобы увидеть аналитику!</p></div>';
                return;
            }

            // Calculate statistics
            const emotionCounts = {};
            const totalIntensity = {};
            
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                emotionCounts[entry.emotion] = (emotionCounts[entry.emotion] || 0) + 1;
                totalIntensity[entry.emotion] = (totalIntensity[entry.emotion] || 0) + entry.intensity;
            }

            const avgIntensity = {};
            for (const emotion in emotionCounts) {
                avgIntensity[emotion] = totalIntensity[emotion] / emotionCounts[emotion];
            }

            // Most common emotions
            let commonEmotionsHtml = '<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">';
            const sortedEmotions = Object.entries(emotionCounts).sort((a, b) => b[1] - a[1]).slice(0, 4);
            
            for (let i = 0; i < sortedEmotions.length; i++) {
                const emotionKey = sortedEmotions[i][0];
                const count = sortedEmotions[i][1];
                const emotionData = emotions[emotionKey] || { name: 'Неизвестная', color: 'bg-gray-400', emoji: '❓' };
                
                commonEmotionsHtml += '<div class="text-center p-3 md:p-4 border border-gray-200 rounded-lg">';
                commonEmotionsHtml += '<div class="w-10 h-10 md:w-12 md:h-12 ' + emotionData.color + ' rounded-full mx-auto mb-2 flex items-center justify-center">';
                commonEmotionsHtml += '<span class="text-white text-lg md:text-xl">' + emotionData.emoji + '</span>';
                commonEmotionsHtml += '</div>';
                commonEmotionsHtml += '<h4 class="font-medium text-gray-800 text-sm md:text-base">' + emotionData.name + '</h4>';
                commonEmotionsHtml += '<p class="text-xs md:text-sm text-gray-600">' + count + ' раз</p>';
                commonEmotionsHtml += '</div>';
            }
            commonEmotionsHtml += '</div>';

            // Average intensity
            let avgIntensityHtml = '<div class="space-y-3">';
            const sortedAvgIntensity = Object.entries(avgIntensity).sort((a, b) => b[1] - a[1]);
            
            for (let i = 0; i < sortedAvgIntensity.length; i++) {
                const emotionKey = sortedAvgIntensity[i][0];
                const avg = sortedAvgIntensity[i][1];
                const emotionData = emotions[emotionKey] || { name: 'Неизвестная', color: 'bg-gray-400', emoji: '❓' };
                const percentage = (avg / 10) * 100;
                
                avgIntensityHtml += '<div class="flex items-center space-x-3">';
                avgIntensityHtml += '<div class="w-6 h-6 md:w-8 md:h-8 ' + emotionData.color + ' rounded-full flex items-center justify-center flex-shrink-0">';
                avgIntensityHtml += '<span class="text-white text-xs md:text-sm">' + emotionData.emoji + '</span>';
                avgIntensityHtml += '</div>';
                avgIntensityHtml += '<div class="flex-1 min-w-0">';
                avgIntensityHtml += '<div class="flex justify-between items-center">';
                avgIntensityHtml += '<span class="font-medium text-gray-800 text-sm md:text-base truncate">' + emotionData.name + '</span>';
                avgIntensityHtml += '<span class="text-xs md:text-sm text-gray-600 flex-shrink-0 ml-2">' + avg.toFixed(1) + '/10</span>';
                avgIntensityHtml += '</div>';
                avgIntensityHtml += '<div class="w-full bg-gray-200 rounded-full h-2 mt-1">';
                avgIntensityHtml += '<div class="h-2 rounded-full ' + emotionData.color + '" style="width: ' + percentage + '%"></div>';
                avgIntensityHtml += '</div>';
                avgIntensityHtml += '</div>';
                avgIntensityHtml += '</div>';
            }
            avgIntensityHtml += '</div>';

            insightsContent.innerHTML = '<div class="space-y-6 md:space-y-8"><div><h3 class="text-lg md:text-xl font-medium text-gray-800 mb-3 md:mb-4">Самые частые эмоции</h3>' + commonEmotionsHtml + '</div><div><h3 class="text-lg md:text-xl font-medium text-gray-800 mb-3 md:mb-4">Средняя интенсивность по эмоциям</h3>' + avgIntensityHtml + '</div><div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-lg"><h3 class="text-lg md:text-xl font-medium text-gray-800 mb-2">Сводка вашего путешествия</h3><p class="text-gray-700 text-sm md:text-base">Вы записали ' + entries.length + ' эмоциональных состояний. Продолжайте отслеживать, чтобы лучше понимать свои паттерны и эмоциональное благополучие!</p></div></div>';
        }

        // Initialize app
        function initApp() {
            changeTheme(currentTheme);
            renderEmotions();
            loadPsychologyTip();
            startTipTimer();
            showView('log');
        }

        // Psychology Tips functionality
        let tipTimer;
        let countdownInterval;

        const psychologyTips = [
            {
                text: "Дышите глубоко. Когда вы чувствуете стресс или тревогу, сделайте 5 глубоких вдохов. Это активирует парасимпатическую нервную систему и помогает успокоиться.",
                author: "Техника дыхания"
            },
            {
                text: "Практикуйте благодарность. Каждый день записывайте 3 вещи, за которые вы благодарны. Это меняет фокус внимания с негативного на позитивное.",
                author: "Позитивная психология"
            },
            {
                text: "Ваши мысли - это не факты. Когда приходят негативные мысли, спросите себя: 'Это правда? Есть ли доказательства?' Часто наши страхи преувеличены.",
                author: "Когнитивно-поведенческая терапия"
            },
            {
                text: "Движение - это лекарство для мозга. Даже 10 минут ходьбы могут улучшить настроение и снизить уровень стресса.",
                author: "Нейропсихология"
            },
            {
                text: "Говорите с собой как с лучшим другом. Замените самокритику на сострадание к себе. Это повышает самооценку и психическое здоровье.",
                author: "Самосострадание"
            },
            {
                text: "Принимайте свои эмоции. Не пытайтесь подавлять или игнорировать чувства. Признание эмоций - первый шаг к их здоровой переработке.",
                author: "Эмоциональный интеллект"
            },
            {
                text: "Ограничьте время в социальных сетях. Постоянное сравнение с другими может негативно влиять на самооценку и настроение.",
                author: "Цифровое благополучие"
            },
            {
                text: "Практикуйте осознанность. Будьте в настоящем моменте. Когда ум блуждает в прошлом или будущем, мягко верните внимание к 'здесь и сейчас'.",
                author: "Майндфулнесс"
            },
            {
                text: "Поддерживайте социальные связи. Качественные отношения - один из главных факторов счастья и психического здоровья.",
                author: "Социальная психология"
            },
            {
                text: "Устанавливайте границы. Учитесь говорить 'нет'. Защита своего времени и энергии - это не эгоизм, а необходимость для психического здоровья.",
                author: "Психология границ"
            },
            {
                text: "Ведите дневник. Письменное выражение мыслей и чувств помогает их структурировать и лучше понять себя.",
                author: "Экспрессивное письмо"
            },
            {
                text: "Создавайте ритуалы. Регулярные приятные ритуалы (утренний кофе, вечерняя ванна) создают ощущение стабильности и комфорта.",
                author: "Поведенческая психология"
            }
        ];

        async function loadPsychologyTip() {
            try {
                // Пытаемся загрузить из API
                const response = await fetch('https://zenquotes.io/api/random');
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.length > 0) {
                        document.getElementById('tipText').textContent = data[0].q;
                        document.getElementById('tipAuthor').textContent = `— ${data[0].a}`;
                        return;
                    }
                }
            } catch (error) {
                console.log('API недоступен, используем локальные советы');
            }

            // Если API недоступен, используем локальные советы
            const randomTip = psychologyTips[Math.floor(Math.random() * psychologyTips.length)];
            document.getElementById('tipText').textContent = randomTip.text;
            document.getElementById('tipAuthor').textContent = `— ${randomTip.author}`;
        }

        function loadNewTip() {
            loadPsychologyTip();
            resetTipTimer();
        }

        function startTipTimer() {
            let countdown = 30;
            
            countdownInterval = setInterval(() => {
                countdown--;
                document.getElementById('countdown').textContent = countdown;
                
                if (countdown <= 0) {
                    loadPsychologyTip();
                    countdown = 30;
                }
            }, 1000);

            tipTimer = setInterval(() => {
                loadPsychologyTip();
            }, 30000);
        }

        function resetTipTimer() {
            clearInterval(tipTimer);
            clearInterval(countdownInterval);
            startTipTimer();
        }

        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.classList.remove('show');
            }
        });

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initApp);
    </script>
</body>
</html>
