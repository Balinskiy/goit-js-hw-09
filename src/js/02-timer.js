import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const selectors = {
    button: document.querySelector('button[data-start]'),
    day: document.querySelector('span.value[data-days]'),
    hour: document.querySelector('span.value[data-hours]'),
    minute: document.querySelector('span.value[data-minutes]'),
    second: document.querySelector('span.value[data-seconds]'),
};

const datetimePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const startButton = selectors.button;

        if (selectedDate <= new Date()) {
            alert("Please choose a date in the future");
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
});

selectors.button.addEventListener('click', handleStartClick);

function handleStartClick() {
    const selectedDate = datetimePicker.selectedDates[0];

    // Calculate the time difference between the selected date and the current time
    const timeDifference = selectedDate - new Date();

    // Start a countdown or perform other actions based on the timeDifference
    console.log("Countdown to selected date:", timeDifference);

    // You can implement a countdown timer or other functionality here
}
