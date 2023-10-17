import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  calendar: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  day: document.querySelector('span[data-days]'),
  hour: document.querySelector('span[data-hours]'),
  minute: document.querySelector('span[data-minutes]'),
  second: document.querySelector('span[data-seconds]'),
};

refs.button.addEventListener('click', startCountdown);

let TIMEDEDLINE = null;
refs.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= options.defaultDate) {
      alert('Please choose a date in the future');
    } else {
      refs.button.disabled = false;
    }
    TIMEDEDLINE = selectedDate;
  },
};

flatpickr(refs.calendar, options);

let intervalId = null;

function startCountdown() {
  clearInterval(intervalId); 

  const updateCountdown = () => {
    const currentTime = Date.now();
    const diff = TIMEDEDLINE - currentTime; 

    if (diff <= 0) {
      clearInterval(intervalId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(diff);

    refs.day.textContent = addLeadingZero(days);
    refs.hour.textContent = addLeadingZero(hours);
    refs.minute.textContent = addLeadingZero(minutes);
    refs.second.textContent = addLeadingZero(seconds);
  };

  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}




