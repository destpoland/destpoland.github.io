const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // Load time from localStorage or initialize defaults
        let storedTime = JSON.parse(localStorage.getItem("savedTime")) || {
            currentDayIndex: 5, // Friday
            hour: 10,
            minute: 0
        };

        let { currentDayIndex, hour, minute } = storedTime;

        const timeElement = document.getElementById("main-tb-time");

        function updateTime() {
            minute++;
            if (minute >= 60) {
                minute = 0;
                hour++;
            }
            if (hour >= 24) {
                hour = 0;
                currentDayIndex = (currentDayIndex + 1) % 7; // Loop back to Sunday after Saturday
            }

            const day = daysOfWeek[currentDayIndex];
            const formattedTime = `${day}: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            timeElement.textContent = formattedTime;

            // Save current time to localStorage
            localStorage.setItem("savedTime", JSON.stringify({ currentDayIndex, hour, minute }));
        }

        // Update time every second
        setInterval(updateTime, 1000);

        // Set initial time
        updateTime();